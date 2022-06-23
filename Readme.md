# "Petbook"

Fake social media app for pets. Intended as a personal learning project for various technologies.

## Completed

- Step1: dockerize simple web app (petstore)
- Step2: deploy simple docker app to k8s cluster (petstore)
- Step3: use create-react-app for client instead of vanilla JS (rename dockerhub image to petbook)

### Bugs
- nginx not playing nice with react-dom-router, causes refresh to return 404 on routes. Also include nginx config to fix this  in docker image

# TODO
- Multi-Container apps in Kubernetes
    - create & dockerize an API app that uses a DB storage
- integrate AWS deployment with Github Actions
- Handling traffic (Ingress Controllers)
- Production-grade deployment
- HTTPS
- Skaffold

# Petbook
- create an app where people can post photos of their pets
- users can rate other's pets
- you are presented with a paginated list of pets sorted by ratings
## NFR
- use a Database storage
- use JWT authentication (integrate some provider)

-------

# Notes

### Prepare docker images
- create a custom website docker image
    > see Dockerfile in "website" folder
- build image
    > docker build -t moraruv/petstore-website website
- push image to dockerhub
    > need to login through the docker CLI (echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin)
    > docker push moraruv/petstore-website

### Basic Kubernetes resources
- apiVersion: v1, gets us access to a set of objects
    - check up documentation for the Pod object, and use that apiVersion
- pod: run one or more very closely related containers
- service: sets up networking in a k8s Clusters
    - NodePort: expose container to outside world (only for dev services, no production!)
- add/update resources in k8s cluster
    > kubectl apply -f <filename>
- deployments are usually used to control spinning of pods

### Strategies to force a deployment to pick up new image version
- manually delete running pods (silly)
- update image version number every time the image changes (instad of using default, latest tag)
- use an imperative command
    > kubectl set image deployment/<deployment_name> {<container_name> - get this from config file} = <full_name_of_new_image>
    example:
    > kubectl set image deployment/client-deployment website-pod=moraruv/petstore-website:latest