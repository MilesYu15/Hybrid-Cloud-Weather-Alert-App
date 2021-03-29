# app-prereq-helm-charts

## Team Members  
Weisimin Peng 001057546  
Jiachen Yu 001050114    

<!-- Usage -->
## Kafka Usage

if you change code in cp-zookeeper chart not just value.yaml in cp-kafka chart, 
you need to update kafka dependency first
```sh
helm dependency update helm/cp-kafka/
```

deploy zookeeper/kafka on kubernetes cluster
```sh
helm install --set name=csye7125-kafka a6  ./helm/cp-kafka
```

upgrade zookeeper/kafka on kubernetes cluster
```sh
helm upgrade --set name=csye7125-kafka a6  ./helm/cp-kafka
```

delete zookeeper/kafka on kubernetes cluster
```sh
helm uninstall a6
# delete all the persistent volumes
kubectl delete pvc --all 
```

deploy and delete test-kafka pod on kubernetes cluster
```sh
kubectl apply -f test.yaml
kubectl delete pod kafka-test
```

exec into test-kafka pod to test kafka
```sh
# list topics
kafka-topics --list --zookeeper a6-cp-zookeeper:2181
or kafka-topics --list --bootstrap-server a6-cp-kafka:9092
# describe topics
kafka-topics --describe --topic watch --bootstrap-server a6-cp-kafka:9092
# create producer
kafka-console-producer --topic weather --bootstrap-server a6-cp-kafka:9092
# create consumer
kafka-console-consumer --topic weather --from-beginning --bootstrap-server a6-cp-kafka:9092
```
## Logging Usage

Install elasticsearch, kibana, fluentd
```sh
helm install logging ./helm/logging
```

## Metrics Usage

create monitoring namespace
```sh
kubectl create ns monitoring
```

install prometheus-operator
```sh
helm install prometheus helm/prometheus-operator --namespace monitoring
```

install elasticsearch-exporter
```sh
helm install  elasticsearch-exporter helm/elasticsearch-exporter --namespace monitoring 
```

install kafka-exporter
```sh
helm install kafka-exporter helm/kafka-exporter  --namespace monitoring 
```

install pushgateway
```sh
helm install pushgateway helm/prometheus-pushgateway --namespace monitoring
```

portforward
```sh
# prometheus
kubectl port-forward -n monitoring prometheus-prometheus-prometheus-oper-prometheus-0 9090
# grafana
kubectl port-forward -n monitoring prometheus-grafana-57cb46784-ll92k 9099:3000
# pushgateway
kubectl port-forward -n monitoring pushgateway-prometheus-pushgateway-584bb5dc8c-6xdql 9091
# elasticsearch-exporter
kubectl port-forward -n monitoring elasticsearch-elasticsearch-exporter-5c848cff6f-x5mjw 9108
# kafka exporter
kubectl port-forward -n monitoring kafka-exporter-756494b94f-dkk96  9308
```

uninstall all metrics tool
```sh
# prometheus
helm uninstall prometheus --namespace monitoring
# elasticsearch-exporter
helm uninstall  elasticsearch-exporter  --namespace monitoring 
# kafka-exporter
helm uninstall kafka-exporter  --namespace monitoring 
# pushgateway
helm uninstall pushgateway --namespace monitoring
# delete all the crds
kubectl delete crd prometheuses.monitoring.coreos.com  \                
kubectl delete crd prometheusrules.monitoring.coreos.com  \
kubectl delete crd servicemonitors.monitoring.coreos.com  \
kubectl delete crd podmonitors.monitoring.coreos.com  \
kubectl delete crd alertmanagers.monitoring.coreos.com  \
kubectl delete crd thanosrulers.monitoring.coreos.com
```

## Ingress Controller Usage

install/uninstall Ingress Controller
```sh
helm install ingress helm/nginx-ingress-controller 
helm uninstall ingress
```

install/uninstall cert manager
```sh
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.yaml
kubectl delete -f https://github.com/jetstack/cert-manager/releases/download/v1.0.4/cert-manager.yaml
```

create/delete cluster issuer
```sh
kubectl apply -f helm/letsencrypt-prod.yaml
kubectl delete -f helm/letsencrypt-prod.yaml
```

## Cluster Autoscaler Usage

Install/uninstall Kubernetes cluster autoscaler 
```sh
helm install \
--set aws_access_key_id=<BASE64_AWS_ACCESS_KEY> \
--set aws_secret_access_key=<BASE64_AWS_SECRET_KEY> \
--set cluster_name=<CLUSTER_NAME> \
autoscaler ./helm/cluster-autoscaler

helm uninstall autoscaler
```
