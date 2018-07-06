const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const TestType = new GraphQLObjectType({
  name: 'TestType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    number: { type: GraphQLString },
  },
});

module.exports = TestType;
