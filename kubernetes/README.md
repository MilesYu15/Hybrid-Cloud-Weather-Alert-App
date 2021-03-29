# kubernetes

## Team Members  
Weisimin Peng 001057546  
Jiachen Yu 001050114    

<!-- Usage -->
## Usage
Set up the Kubernetes cluster on AWS
```sh
ansible-playbook setup-k8s-cluster.yml --extra-vars "AWS_PROFILE=kops AWS_REGION=us-east-1 
NAME=jiachenyu.me 
KOPS_STATE_STORE='s3://jiachenyu.me' 
COMPUTE_NODE_SIZE=t2.medium 
MASTER_NODE_SIZE=t2.medium 
VERSION=1.13.0 
NODE_COUNT=3 
DNS_ZONE=jiachenyu.me 
SSH_KEY='/home/yujiache/.ssh/aws_ami.pub'
rds_aws_profile=dev 
prod_aws_profile=prod 
k8s_request_vpc_name=k8s.prod.weisiminpeng.com 
rds_accept_vpc_ower_id=838345291199 
username=csye7125 
password=Mysql7125"  -vv
```


Delete the Kubernetes cluster
```sh
ansible-playbook delete-k8s-cluster.yml --extra-vars "AWS_PROFILE=kops 
NAME=jiachenyu.me 
KOPS_STATE_STORE='s3://jiachenyu.me'
rds_aws_profile=dev 
prod_aws_profile=prod 
k8s_request_vpc_name=k8s.prod.weisiminpeng.com" -vv
```

SSH into Bastion node
```sh
ssh -A admin@`aws elb --output=table describe-load-balancers|grep DNSName.\*bastion|awk '{print $4}'`
```

SSH into other nodes from Bastion node
```sh
ssh admin@ip-172-20-53-10.ec2.internal
```