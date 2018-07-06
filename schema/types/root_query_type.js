const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Test = mongoose.model('test');
const UserType = require('./user_type');
const TestType = require('./test_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    test: {
      type: TestType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Test.findById(id);
      },
    },
  },
});

module.exports = RootQueryType;
