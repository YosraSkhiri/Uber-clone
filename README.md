# Uber Clone

## Description
This is a college project, meant to teach us docker, reactjs, mongoDB and express.

## Docker image
Link: https://hub.docker.com/r/gallalou/node-mongo-apache-sshd

:warning: Make sure to pull the second version of the image:

```
docker pull gallalou/node-mongo-apache-sshd:v2
```

## Runing the frontend code in the docker container

```
docker run -it -p 3000:3000 -v /home/<user>/Uber/front:/home/front gallalou/node-mongo-apache-sshd:v2
```
## to run the react app:
```
cd home/front
```
```
npm start
```

## Runing the backend code and the database in the docker container

```
docker run -it -p 4000:4000 -v /home/<user>/Uber/back:/home/node -v /home/<user>/Uber/database:/data/db gallalou/node-mongo-apache-sshd:v2
```
## to run the server and the database:
```
cd home/node
```
```
mongod & npm start
```