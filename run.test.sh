#!/bin/bash
yarn
yarn setup
yarn deploy
yarn test

read -p "Press enter to continue to see this app in a broken state..."

git checkout broken

yarn deploy
yarn test