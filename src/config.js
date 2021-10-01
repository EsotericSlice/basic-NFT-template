const layersOrder = [
    { name: 'Skin', number: 4 },
    { name: 'Bra', number: 2 },
    { name: 'Necklace', number: 3 },
    { name: 'Accessories', number: 4 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };