
output "instance_adress" {
  value = openstack_compute_instance_v2.instance.access_ip_v4
}

output "lb_adress" {
  value = openstack_compute_instance_v2.lb.access_ip_v4
}