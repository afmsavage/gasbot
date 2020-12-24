## Eth Gas Bot

Simple Discord bot that publishes the Ethereum gas price fetched from [Gasnow](https://gasnow.org)

### Usage

* Create a .env file in the root directory with your Discord bot token
* Either create a Docker image using `docker build .` or start the bot with `npm run start`
* On your server that you invited the bot to, type `.gas` in a channel and it will return the prices
  
  #### Example response
```
gas bot BOT Today at 6:41 PM
rapid: 221000000000
fast: 209000001459
standard: 170000000000
slow: 151250000000
```
