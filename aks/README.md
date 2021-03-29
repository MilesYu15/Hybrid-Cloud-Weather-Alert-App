# Infrastructure as Code

## Team
Jiachen Yu 001050114
Weisimin Peng 001057546

## Initialization

Initialize the terraform directory by

```
terraform init
```

## Create a Kubernetes cluster with Azure Kubernetes Service(AKS)

Check if the components are correct.  

```
terraform plan
```

Apply chanages

```
terraform apply
```

Configure kubectl
```
az aks get-credentials --resource-group csye7125-final-project --name csye7125-aks
```

```
kubectl get nodes
```

## Destroy

Destroy the components managed by Terraform

```
terraform destroy
```
