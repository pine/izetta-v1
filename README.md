# Izetta [![CircleCI branch](https://img.shields.io/circleci/project/github/pine/Izetta/master.svg?style=flat-square)](https://circleci.com/gh/pine/Izetta) [![David](https://img.shields.io/david/pine/Izetta.svg?style=flat-square)](https://david-dm.org/pine/Izetta) [![David](https://img.shields.io/david/dev/pine/Izetta.svg?style=flat-square)](https://david-dm.org/pine/Izetta)

> Keep your lawn grasses lush green forever

Izetta is an perfect doctor for your GitHub lush grasses.<br>
If they had detect withering grass a little, they would alert to me by Slack.

![](screenshot.png)

## Getting started
### 1. Create Bluemix Account
### 2. Create Bluemix Application
### 3. Add environment variables

```
$ cf set-env YOUR_APP_NAME SLACK_API_TOKEN XXX
```

### 4. Deploy

```
$ cf login -u username@example.com
$ cf push
```

## License
MIT License
