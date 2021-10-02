const layersOrder = [
    { name: 'Background', number: 5 },
    { name: 'Base', number: 1 },
    { name: 'Eyes', number: 3 },
    { name: 'Mouth', number: 3 },
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

const defaultEdition = 0;

module.exports = { layersOrder, format, rarity, defaultEdition };