# Welcome to The ZAUBAR's NonForgeTTables NFTT 💎

![](public/config/images/zaubar-logo.png)

## Installation 🛠️

Make sure you have node.js installed so you can use npm, then run:

```sh
npm install
```

## Usage ℹ️

In order to make use of this dapp, all you need to do is change the configurations to point to your smart contract as well as update the images and theme file.

For the most part all the changes will be in the `public` folder.

To link up your existing smart contract, go to the `public/config/config.json` file and update the following fields to fit your smart contract, network and marketplace details. The cost field should be in wei.

Note: this dapp is designed to work with the intended NFT smart contract, that only takes one parameter in the mint function "mintAmount". But you can change that in the App.js file if you need to use a smart contract that takes 2 params.

```json
{
  "CONTRACT_ADDRESS": "0x984dB17b50A1F082E06aD1ff6246Ea78733900C3",
  "SCAN_LINK": "https://mumbai.polygonscan.com/address/0x984db17b50a1f082e06ad1ff6246ea78733900c3",
  "NETWORK": {
    "NAME": "Polygon",
    "SYMBOL": "Matic",
    "ID" : 137
  },
  "NFT_NAME": "ZAUBAR's NonForgeTTables",
  "SYMBOL": "NFTT",
  "MAX_SUPPLY": 100,
  "WEI_COST": 0,
  "DISPLAY_COST": 0,
  "GAS_LIMIT": 285000,
  "MARKETPLACE": "Opeansea",
  "MARKETPLACE_LINK": "https://testnets.opensea.io/collection/unidentified-contract-soreapwvas",
  "SHOW_BACKGROUND": true
}

```

Make sure you copy the contract ABI from remix and paste it in the `public/config/abi.json` file.
(follow the youtube video if you struggle with this part).

Now you will need to create and change 2 images and a gif in the `public/config/images` folder, `bg.png`, `example.gif` and `logo.png`.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the `public/favicon.ico`, `public/logo192.png`, and
`public/logo512.png` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
    <title>ZAUBAR's Exclusive NonForgeTTables</title>
    <meta name="description" content="Claim your ZAUBAR NFTT" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "NFTT",
  "name": "ZAUBAR's NonForgeTTables",
}
```

After all the changes you can run.

```sh
npm run start
```

Or create the build if you are ready to deploy.

```sh
npm run build
```

Now you can host the contents of the build folder on a server.

That's it! you're done.
