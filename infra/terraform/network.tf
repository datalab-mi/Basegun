
# Use internal network (must be created)
data "openstack_networking_network_v2" "internal_network" {
  name = "internal"
}

# Create a subnet in internal network
resource "openstack_networking_subnet_v2" "subnet" {
  network_id = data.openstack_networking_network_v2.internal_network.id
  cidr       = var.subnet_cidr
}

# Use keypair
data "openstack_compute_keypair_v2" "keypair" {
  name = "dev-keypair-tf"
}
