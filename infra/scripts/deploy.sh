#!/bin/bash
set -e -o pipefail

su $USER

%{ for name_var, value_var in jsondecode(ENVIRONMENT) }
export ${name_var}=${value_var}
%{ endfor ~}
export APP_NAME="basegun"
export APP_URL="https://github.com/datalab-mi/$APP_NAME/archive/refs/heads/$APP_BRANCH.tar.gz"
export USER=$(lsb_release -si | tr [:upper:] [:lower:])

cd /home/$USER && mkdir -p $APP_NAME && curl -kLs $APP_URL \
| tar -zxvf - --strip-components=1 -C $APP_NAME

(
  cd $APP_NAME
  if [ $(hostname) == "load-balancer-${WORKSPACE}" ]; then \
  make HOST=$HOST start-https; else make CONTINUE=y TAG=${APP_VERSION} deploy-prod; fi
)
exit $?