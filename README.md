# Welcome to EsotericSlice 🌞

Everything you need is in this simple NFT template kit and what we'll be using during our workshop! 

Follow me on [Instagram](https://www.instagram.com/esotericslice/) for wholesum goodies 🥦😺

# basic-nft-template

Create simple NFTs like these!

![](https://github.com/EsotericSlice/simple-nft-template/blob/main/src/nft_preview.jpg)

## Installation

Download zip at https://github.com/EsotericSlice/simple-nft-template

Download Node.js at https://nodejs.org/en/

Download Visual Studio Code at https://code.visualstudio.com/

*Let's get started!* 😺

## Usage

Add your freshly created PNG layers to the different sections within the 'layers' directory (folder). Optionally, include '_r' and '_sr' at the end of the layer file names to make those layer files rare or super rare. 

*Example:* If you had background layer you would create a background directory (folder), and then a file might be called:

- `blue_background_sr.png`
- `red_background_r.png`
- `multi_background.png`

Once you have all your PNG layers, go into `src/config.js` and update the elements within the `layersOrder` array to suit your layer folder name in order of the back layer to the front layer and be sure to update the number of possible options in the 'number' section.

*Example:* If you were creating beach sunset designs, you might have a background, then a cloud, a bird, , people, waves, and then waves, so your `layersOrder` would look something like this with the number of possible backgrounds being 1, clouds 2, birds 12, and so forth:

```js
const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'cloud', number: 2 },
    { name: 'bird', number: 12 },
    { name: 'people', number: 3 },
    { name: 'waves', number: 1 },
];
```

The `name` of each layer object represents the name of the folder (in `/layers/`) that the images reside in. The `number` of each layer object represents the total number of image files you want to select from (possibly including blanks.) For instance, if you have three images in a layer folder and want to pick one of those each time, the `number` should be `3`. If you have a single image in a layer that you want to increase the rarity of to 1 in 100, the `number` for that layer should be `100`. In this case, 99 times out of 100, you will get a completely transparent layer.

Then update your `format` size (the final image size) to 1000 px by 1000 px, and also update the defaultEdition, which is the amount of editions that will be created (1-10,000+).

> Note: To prevent duplicates, you must have enough layer options if you want to create thousands of variations.

When ready, run the following command and your outputted art will be in the `build` directory:

```sh
node index.js
```
