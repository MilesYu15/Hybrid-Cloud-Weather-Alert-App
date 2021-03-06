# Hybrid-Cloud-Weather-Alert-App

This application implements a simple weather alert app, in which a registered user can create, update and delete weather alerts in a selected area. User can set various thresholds for metrics like temperature, humidity, wind level, and so on. If the weather data polled from NOAA website exceeds the threshold in the area where the user set the threshold on, weather alerts will be sent to user. The application also keeps track of the weather alert so that the user will not receive repetitve alert in a short time. <br/>

This application is capable of being deployed in a Kubernetes cluster on AWS, Google Cloud Platform and Microsoft Azure. All the services needed for this appliction are deployed on the Kubernetes cluster in the form of docker containers, except the storage layer is provided by the relational database services in different clouds.

## :trophy: Features

- Developed back-end NodeJS application with data stored on Amazon Relational Database Service using MySQL
- Used Ansible playbook to create Kubernetes cluster with high availability settings.  
- Implemented two internal microservices to poll weather data and send alerts using Kafka topics  
- Incorporated CI/CD strategies and built pipelines using Jenkins to pull image from Dockerhub and run Helm command to deploy applications to the cluster
- Forwarded application and Kubernetes cluster logs to Elasticsearch, Fluentd and Kibana logging stack. 

## Application Components

This repository includes the code for a headless NodeJS server, microservice applications and other necessary modules for CI/CD, autoscalin, monitoring and networking. 

### App-prereq-helm-charts

The `app-prereq-helm-chart` folder includes the code to set up the prerequisite services before the main and microservice applications are deployed. The setup can be done manually but we use Jenkins to automate this process. <br />

Both microservice applications are event-driven and communicate with each other and main application through Kafka topics. Fluentd sends out the logs from every Kubernetes node for ElasticSearch to collect. Kibana provides a dashboard to organize these logs. Metrics are handled by Prometheus. Nginx controller and Letsencrypt helps ensure the HTTPS communication. Cluster Autoscaler is used to scale up or down the cluster when the cpu or memory usage exceed a certain threshold.

### Jenkins

The `jenkins` directory contains the Ansible playbook to set up the Jenkins instance. There are more manual steps to set up the whole CI/CD pipeline.

### Kubernetes

The `kubernetes` directory contains the Ansible playbook to set up a self-managed Kubernetes cluster on AWS. This process is a one-time manual setup.

### GKE

The `GKE` directory contains the Terraform modules to set up a Google Kubernetes Engine on Google Cloud Platform, which includes networking components and Google Cloud SQL.

### AKS

The `AKS` directory contains the Terraform modules to set up a Azure Kubernetes Service on Microsoft Azure, which includes networking components and Azure Database for MySQL.

### Back End Application

The back-end application is a headless NodeJS server. The backend handles the business logic related to user and weather alert management. Upon creating, updating or deleting weather alerts, events are created and sent down the Kafka topics for poller and notifier to process. 

Access is restricted only to registered and authenticated users. Each user can only modity their only alerts. To accomplish this, after a user is authenticated, the client will receive JWT token which it should then use when making REST API calls. 

### Poller

Poller is a microservice in charge of polling weather data from NOAA website. Poller has its own database to store the locations of which weather data needs to be polled. Poller is event-driven and updates its database based on the events it receives from the Kafka topic. Weather data is polled periodically and sent down another Kafka topic for notifier to process.

### Notifier

Notifier is a microservice in charge of sending out weather alerts. Notifier has its own database to keep track of the alerts that have already been sent out. Notifier is also event-driven and determines if alerts should be sent based on the weather data from the Kafka topic.