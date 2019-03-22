# YZ AI

## Development

Setup Node and Git first.

```
npm install -g yarn gatsby-cli

git clone https://github.com/yz-ai/yz-ai.gatsby

cd yz-ai.gatsby
yarn install
gatsby develop
```

## Adding content

If you are planning to add a new project page, follow this:

1. Decide on an `id` without space, like `reinforcement-learning-project`. This `id` should be unique among whole website. This is important. For example, `reinforcement-learning-project`
2. Create a folder named `reinforcement-learning-project` folder under `./src/markdown/projects`.
3. Create a file named `index.md` under `./src/markdown/projects/reinforcement-learning-project`.
4. Add following frontmatter variables to the start of the file:
```
---
# Date variable according to your time
date: "2018-06-22"
# This should be same with the id, uniqueness is important
slug: "reinforcement-learning-project"
# This title will be present top of the card (character size should be around 50)
title: "Deep Reinforcement Learning Project Learning Project Learning Project Learning Project
# This text will be present at the description of the card (character size should be around 200)
text: "But this is easy to fix. When querying a connection of some type, you can pass a variety of arguments to the GraphQL query. But this is easy to fix. When querying a connection of some type, you can pass a variety of arguments to the GraphQL query."
---

# Here is the markdown content.

Spiced with Math.

$$\sum_{k=0}^5 k$$
```
