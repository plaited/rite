# Plaited Rite test framework

[![Tests](https://github.com/plaited/rite/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/plaited/rite/actions/workflows/tests.yml)

Web testing framework based on RITEway.

To learn more about the [RITEway](https://github.com/paralleldrive/riteway)
testing pattern read
[5 questions every unit test must answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d).
RITEWay forces us to answer them.

1. What is the unit under test (module, function, class, whatever)?
2. What should it do? (Prose description)
3. What was the actual output?
4. What was the expected output?
5. How do we reproduce the failure?

## Requirements

### Test runner

- [@web/test-runner](https://www.npmjs.com/package/@web/test-runner) >= 0.16.1

### JavaScript runtime 
- [Node](https://nodejs.org/en) >= v18

## Dev Requirements

### local

- bun >= 1.0.7

### devcontainer requirements

- vscode
- Docker

## Dev Setup

### local setup

1. Clone repository and ensure you have bun >= 1.0.7
2. Run `bunx playwright install`
3. Run `bash setup.sh`

### devcontainer setup

1. Install docker on local machine
2. Ensure docker desktop daemon/app is running
3. Open new window for VSCode
4. `ctrl/cmd + shift + p`
5. search for **Dev Containers:Clone Repository in Container Volume**
6. Enter this repo name **plaited/plaited**
7. Wait for it to download and set everything up
8. Open a VSCode terminal tab and run `zsh setup.sh`
