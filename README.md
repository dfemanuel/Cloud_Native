REST NodeJs API with a sum function that serves as cloud native class exercise.

# Sample REST API with NodeJS

## How to Run
```
npm start run
```

## Building docker image
```
docker build -t dfemanuel/cloud-native:<VERSION_TAG> . 
```

## Running docker image
```
docker run --publish 8000:3000 --name cn dfemanuel/cloud-native:1.0
```

## Pushing to DockerHub
```
docker login 
docker push dfemanuel/cloud-native:<VERSION_TAG>
```

## Docker image
Docker image are available at [DockerHub](https://hub.docker.com/r/dfemanuel/cloud-native).


# For testing purposes
## Running locally with Docker compose
```
docker-compose up
```
## Invoking Sample
http://localhost:8000/sum?a=1&b=2

