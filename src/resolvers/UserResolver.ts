import { users } from '../db/data';

interface IListUsers {
  name: string;
}

interface IGetUser {
  _id: string;
}

const listUsers = ({ name }: IListUsers) => {
  if (name) {
    if (name.indexOf(' ') > 0) {
      const splitName = name.split(' ');
      const regex = new RegExp(
        `(?<=${splitName[0]}\s*).*?(?=\s*${splitName[1]})`,
        'i',
      );
      const datatest = users.filter((users) => users.name.match(regex));
      return datatest;
    }
    const regex = new RegExp(`${name}`, 'i');
    return users.filter((users) => users.name.match(regex));
  } else {
    return users;
  }
};

const getUser = ({ _id }: IGetUser) => {
  return users.find((user) => user._id == _id);
};

export const resolvers = {
  list: listUsers,
  getUser: getUser,
};
