
# Use external network
data "openstack_networking_network_v2" "external_network" {
  name = "Ext-net"
}

# Use internal network (must be created)
data "openstack_networking_network_v2" "internal_network" {
  name = "internal"
}

# Create a subnet in internal network
resource "openstack_networking_subnet_v2" "subnet" {
  network_id = data.openstack_networking_network_v2.internal_network.id
  cidr       = var.subnet_cidr
  gateway_ip = cidrhost(var.subnet_cidr, 5)
  allocation_pool {
    start      = cidrhost(var.subnet_cidr, 10)
    end        = cidrhost(var.subnet_cidr, -2)
  }
}

# Use keypair
data "openstack_compute_keypair_v2" "keypair" {
  name = "dev-keypair-tf"
}

# NOT AVAILABLE
# # Create router attached on external network and internal subnet
# resource "openstack_networking_router_v2" "router" {
#   name                = "router"
#   external_network_id = data.openstack_networking_network_v2.external_network.id
# }

# resource "openstack_networking_router_interface_v2" "router_interface" {
#   router_id = "${openstack_networking_router_v2.router.id}"
#   subnet_id = "${openstack_networking_subnet_v2.subnet.id}"
# }
