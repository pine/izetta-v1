# Izetta [![CircleCI branch](https://img.shields.io/circleci/project/github/pine/Izetta/master.svg?style=flat-square)]() [![David](https://img.shields.io/david/pine/Izetta.svg?style=flat-square)]() [![David](https://img.shields.io/david/dev/pine/Izetta.svg?style=flat-square)]()

> Keep your lawn grasses lush green forever

Izetta is an perfect doctor for your GitHub lush grasses.<br>
If they had detect withering grass a little, they would alert to me by Slack.

![](screenshot.png)

## Getting started
### 1. Create OpenShift Account
### 2. Create OpenShift Application
Cartridges
 - [Custom Node.js cartridge for OpenShift](https://github.com/icflorescu/openshift-cartridge-nodejs)
 - [Redis](https://github.com/smarterclayton/openshift-redis-cart)
 - [Cron](https://hub.openshift.com/addons/26-cron)

### 3. Add environment variables
```
$ rhc env set NOTIFY_TIMES=21:00,23:00 \
              GITHUB_USERNAME=username \
              SLACK_API_TOKEN=XXX \
              SLACK_CHANNEL=channel \
              SLACK_USERNAME=XXX \
              SLACK_ICON_URL=http://example.com/icons/izetta.png \
              SLACK_MESSAGE='alert message <!channel>' -a appname
```

### 4. Deploy
```
$ git remote add deploy ssh://xxxxxxxxxxxxxxxxxxxxxxxx@appname-domain.rhcloud.com/~/git/appname.git/
$ git push deploy master
```

## License
ISC License
