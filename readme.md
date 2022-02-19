# github-repo-fetcher

Get a list of Github repositories by username

## Installation

```js
# using npm
npm i github-repo-fetcher
# using yarn
yarn add github-repo-fetcher
```

## Usage

```js
# using require
const { getrepos } = require('github-repo-fetcher');
# using import
import { getrepos } from 'github-repo-fetcher';
```

## Example

### Using promises:

```js
getrepos({
    'harsh2220', // provide GitHub username here
    1, // Provide page here
    30 // Provide per page repositories here
}).then((repositories) => console.log(repositories));
```

### Using async/await:

```js
const getRepositories = async function () {
  const repositories = await getrepos({
    'harsh2220', // provide GitHub username here
    1, // Provide page here
    30 // Provide per page repositories here
  });
  console.log(repositories);
};
getRepositories();
```