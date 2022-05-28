data "openstack_images_image_v2" "debian" {
  name        = var.image
  most_recent = true
}


data "template_file" "init" {
  template = file("${path.module}/../scripts/init.yaml")
}

data "template_file" "deploy" {
  template = file("${path.module}/../scripts/deploy.sh")

  vars = {
    ENVIRONMENT = jsonencode("${var.deploy_env}")
    APP_VERSION = "${var.deploy_env.APP_VERSION}"
    WORKSPACE   = "${terraform.workspace}"
  }
}

data "template_cloudinit_config" "config" {
  gzip          = false
  base64_encode = false

  part {
    content_type = "text/cloud-config"
    content      = data.template_file.init.rendered
  }

  part {
    content_type = "text/plain"
    content      = data.template_file.deploy.rendered
  }
}