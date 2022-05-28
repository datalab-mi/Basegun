
variable "image" {
  type        = string
  default     = "Debian 10 - Docker"
  description = "Image name available in Openstack Glance"
}

variable "flavor" {
  type        = string
  default     = "s1-2"
  description = "Flavor available in Openstack"
}

variable "volume_size" {
  type        = number
  default     = 10
  description = "Size in GB of boot volume"
}

variable "subnet_cidr" {
  type        = string
  default     = "192.168.1.0/24"
}

variable "fixed_ip" {
  type        = string
  description = "Desirated IP address for instance"
}

variable "deploy_env" {
    type        = map
    description = "All variables necessary for running deploy script"
}