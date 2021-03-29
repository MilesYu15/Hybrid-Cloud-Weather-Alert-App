provider "google" {
  credentials = file("/home/yujiache/csye7125/elegant-rock-298417-d84e8c5df59c.json")
  project = var.project
  region  = var.region
  zone = var.zone
}


module "term_project" {
  source = "../modules/termproject"
}


terraform {
  backend "local" {
    path = "state/terraform.tfstate"
  }
}