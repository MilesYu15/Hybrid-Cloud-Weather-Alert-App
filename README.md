# Hybrid-Cloud-Weather-Alert-App

This application implements a simple weather alert app, in which a registered user can create, update and delete weather alerts in a selected area. User can set various thresholds for metrics like temperature, humidity, wind level, and so on. If the weather data polled from NOAA website exceeds the threshold in the area where the user set the threshold on, weather alerts will be sent to user. The application also keeps track of the weather alert so that the user will not receive repetitve alert in a short time. <br/>

This application is capable of being deployed in a Kubernetes cluster on AWS, Google Cloud Platform and Microsoft Azure. All the services needed for this appliction are deployed on the Kubernetes cluster in the form of docker containers, except the storage layer is provided by the relational database services in different clouds.

## :trophy: Features

- Developed back-end NodeJS application with data stored on Amazon Relational Database Service using MySQL
- Used Ansible playbook to create Kubernetes cluster with high availability settings.  
- Implemented two internal microservices to poll weather data and send alerts using Kafka topics  
- Incorporated CI/CD strategies and built pipelines using Jenkins to pull image from Dockerhub and run Helm command to deploy applications to the cluster
- Forwarded application and Kubernetes cluster logs to Elasticsearch, Fluentd and Kibana logging stack.  

