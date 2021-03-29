variable "location" {
    type    = string
    default = "East US"
}

variable "instance_size" {
    type = string
    default = "Standard_D2_v3" 
}

variable "kubernetes_version" {
    type = string
    default = "1.19.3"
}

variable "availability_zones" {
    type = list(string)
    default = ["1", "2", "3"]
}

variable "ssh_key" {
    type = string
    default = "ssh-rsa "
}

variable "kube_vnet_address_space" {
    description = "VNET address space"
    type        = list(string)
    default = ["10.1.4.0/22"]
}

variable "kube_subnet_address_prefix" {
    description = "Subnets prefix"
    type        = list(string)
    default = ["10.1.4.0/24"]
}

variable "rds_vnet_address_space" {
    description = "VNET address space"
    type        = list(string)
    default = ["10.1.0.0/22"]
}

variable "rds_subnet_address_prefix" {
    description = "Subnets prefix"
    type        = list(string)
    default = ["10.1.0.0/24"]
}