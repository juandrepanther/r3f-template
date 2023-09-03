# React + TypeScript + React-three-fiber Template (Vite + Material UI + Zustand)

The core content of this template has been taken from [here](https://github.com/juandrepanther/react-ts-vite-materialui-template).

Created by running commands below:

- `git clone https://github.com/juandrepanther/react-ts-vite-materialui-template.git`
- `yarn upgrade`
- `yarn install`
- `yarn add three @types/three @react-three/fiber`
- `yarn add @react-three/drei`
- `yarn add @react-three/postprocessing`
- `yarn add --dev r3f-perf`
- `yarn add --dev leva`

# Deploying commands (examples):

## with docker-compose.yml file

First need to create and configure the docker-compose.yml file on remote server and then run:

- `docker compose up -d`

## with Dockerfile only

- `docker build -t app-name .`
- `docker run -d --restart=unless-stopped --network network-name --name app-name app-name`
