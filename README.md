REST NodeJs API with a sum function that serves as cloud native class exercise.

## Invoking Sample
http://localhost:8000/sum?a=<num1>&b=<num2>

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
