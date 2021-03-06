> # Template for Telegram bots.
> Boilerplate for creating [Telegram bots](https://telegram.org/) using [telegraf.js](https://telegrafjs.org)

# Setup
  This project needs `express.js`, `telegraf.js` and `dotenv` packages to work right out of the box. Just run `yarn` or `npm install` in the terminal to install those packages. 

  After that

  - Add **bot secret token** in a `.env` file. Check [.env.example file](https://github.com/arsen1c/telegrafjs-template/blob/master/.env.example) for variable names.
  - Run `yarn start` or `npm start` to start the bot.

# Creating new commands
> **Warning:** Do not directly create command files in the `src/commands` folder.

In order to create new commands, you must first decide what sub-folder of `src/commands` this command will go into.

For example, if you want to create an admin specific command, kick, then you can create a new sub-folder called `/admin` in the `src/commands` folder and add a file named `kick.js` to it. After doing so, you folder structure should look something like this:
```
  commands 
  |---- utility
         |-- echo.js
         |-- help.js
  |---- admin
         |-- kick.js
```

# Usage
![image](https://user-images.githubusercontent.com/46086050/157853275-a1353672-d825-4ce1-808f-2a0a204724fa.png)
