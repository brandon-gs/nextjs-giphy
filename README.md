# Giphy API - Brandon GS

## Development tools

- Reactjs / Nextjs
- Javascript / Typescript
- CSS / SASS
- Material UI

## Getting started

Clone this repo:

```sh
git clone git@github.com:brandon-gs/nextjs-giphy.git
cd nextjs-giphy
```

Install dependencies:

```sh
yarn
```

Config the .env.development.local file with the correct values

```sh
cp .env.example .env.development.local
```

Run the project

```sh
yarn dev
```

## Environment variables docs

| Variable name |                                                                      |
| ------------- | -------------------------------------------------------------------- |
| GIPHY_KEY     | GIPHY API Key required to make requests to the GIPHY API. (required) |

## Questions and Answers

#### Why use nextjs api routes?

I use nextjs api routes as proxy to consult giphy api. For security reasons I can hide the GIPHY_KEY from the client and all the requests the client would make.
