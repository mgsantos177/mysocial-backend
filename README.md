<h1 align="center">Welcome to mysocial-backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Install

```sh
yarn install
```

## Usage

```sh
yarn build
yarn start
```

## Chamada Funcional GraphQL

```sh
curl --request POST "http://localhost:4000/graphql" --header "Content-Type: application/json" --data-raw "{\"query\":\"query getUser($id: String) {list(name: $id){name}}\"
```

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
