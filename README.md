# Simple-Decentralized-Application-DApp-with-WalletConnect

## Clone the Repository

- clone the project directory: `git clone https://github.com/aniketmandloi/Simple-Dapp.git`.
- change into the project directory: `cd Simple-Dapp`.

## Install Dependencies

- make sure you use node v18.
- or change the version using `nvm use 18` so that we are on the same page.
- run `npm install` to install all the dependencies.
- Install truffle suit: `npm i -g truffle`.
- Install ganache: `npm install -g ganache-cli`.

## Compiling and deploying

- to compile the contract use `truffle compile`.
- to deploy start the Granache first `truffle develop` on a new terminal.
- deploy the contract using `migrate --reset`.

# MetaMask setup

- Install metamask extension for browser.
- setup a wallet.
- setup network.
- use the local host value also chain Id will be 1337 default for `truffle develop` command.
- rpc url: `http://localhost:9545`.
- import the account, you'll have a test account in the output of your terminal.
- you're ready to interact with the account.
