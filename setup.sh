#!/bin/bash

# Install and link dependencies
yarn install

# Install playwright dependencies
npx playwright install

# Run build
yarn run build 

# Run test
yarn run test
