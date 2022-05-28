
resource "openstack_compute_instance_v2" "lb" {
  name            = "load-balancer-${terraform.workspace}"
  image_name      = var.image
  flavor_name     = var.flavor
  key_pair        = data.openstack_compute_keypair_v2.keypair.name
  security_groups = ["sg_2"]
  user_data       = data.template_cloudinit_config.config.rendered

  block_device {
    uuid                  = data.openstack_images_image_v2.debian.id
    source_type           = "image"
    destination_type      = "local"
    volume_size           = var.volume_size
    boot_index            = 0
    delete_on_termination = true
  }

  network {
    name        = "Ext-Net"
    fixed_ip_v4 = var.fixed_ip
  }

  network {
    name        = "internal"
    fixed_ip_v4 = cidrhost(var.subnet_cidr, 5)
  }
}