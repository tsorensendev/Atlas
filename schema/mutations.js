const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const mongoose = require('mongoose');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const TestType = require('./types/test_type');
const Test = mongoose.model('test')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    },
    test: {
      type: TestType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        number: { type: GraphQLString },
      },
      resolve(parentValue, { name, email, number }, req) {
        return new Test({ name, email, number }).save();
      }
    }
  }
});

module.exports = mutation