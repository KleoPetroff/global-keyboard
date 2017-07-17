# Global keyboard listener and logger built with Node.js

A small script which listens for global keyboard inputs and saves the data in a JSON file.

## How to install

**Requirements:** Make sure you have Node.js v7.4.0 or v8.0.0 installed, JVM and java available on your PATH.

1. Clone the repo - `git clone https://github.com/KleoPetroff/global-keyboard.git`
2. Install the dependencies by running `npm install`
3. Run `npm start` in the terminal.

## How it works

The script uses `gkm` as global keyboard listener. The package uses [jnativehook](https://github.com/kwhat/jnativehook), a Java library, which provides global keyboard and mouse listeners.
When started, the script will log and save all keys for the current session in a JSON file under the `data` folder with the specific date, month, year and hour.