# jenkins

## team members  
Weisimin Peng 001057546  
Jiachen Yu 001050114  

## pre prepare
Elastic IP tag: Name: jenkins_elasticIP  
Put your elastic ip and ssh info into a host file  

## command 
cd your path to repository   
ansible-playbook -i host_pengwei jenkins.yml --extra-vars "domain=jenkins.weisiminpeng.com aws_profile=aws keyName=csye7374_aws" -v  
ansible-playbook -i host_pengwei jenkins-teardown.yml --extra-vars "aws_profile=aws" -vv 

## login jenkins
url: your domain  
the jenkins password will be in initialAdminPassword folder  