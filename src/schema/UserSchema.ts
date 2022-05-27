export const userSchema = `
type Query {
  list(name: String): [user]
  getUser(_id: String!): user
}

type user {
  _id: String
  index: Int
  picture: String
  age: Int
  eyeColor: String
  name: String
  company: String
  email: String
  phone: String
  greeting: String
  friends: [friends]
}

type friends {
  _id: String
  index: Int
  picture: String
  age: Int
  eyeColor: String
  name: String
  company: String
  email: String
  phone: String
}
`;
