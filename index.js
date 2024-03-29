const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Bom dia!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Jose Silva',
                email: 'jose@email.com',
                idade: 29,
                salario: 2200.33,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})
