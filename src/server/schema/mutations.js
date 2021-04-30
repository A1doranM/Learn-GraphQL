const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parentValue, {email, password}, request) {
                AuthService.signup({
                    email,
                    password,
                    request
                }).catch((e) => console.log('ERROR IN SIGNUP MUTATION: ', e));
            }
        }
    }
});
module.exports = mutation;