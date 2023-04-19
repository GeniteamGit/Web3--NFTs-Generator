const basePath = process.cwd();
const {MODE} = require(`${basePath}/constants/blend_mode.js`);
// const {NETWORK} = require(`${basePath}/constants/network.js`);
const {NETWORK}= require('../constants/network')
const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Miss Ts NFTs";
const description = "Miss T, a Scary Teacher who has been threatening kids";
const baseUri = "https://misstsnfts.xyz/";

const solanaMetadata = {
    symbol: "MT",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://misstsnfts.xyz/",
    creators: [
        {
            address: "Ca98MPfLWgK7q3wUtemwA8moP49t6dMBnyEUUU2J1rEN",
            // address: "FKneVTRsEBAYh2gZZwfNj6wwCR1QvWMAazQ9Wjv6zFGD",
            share: 100,
        },
    ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
    // {
    //     growEditionSizeTo: 1666,
    //     layersOrder: [
    //         {name: "BG"},
    //         {name: "Skins"},
    //         {name: "Hair and Headwear"},
    //         {name: "Clothes"},
    //         {name: "Earrings"},
    //         {name: "Props"},
    //     ],
    // },
    {
        // growEditionSizeTo: 3333,
        growEditionSizeTo: 3313,
        layersOrder: [
            {name: "BG"},
            {name: "Skin"},
            {name: "Hair and Headwear"},
            {name: "Clothes"},
            {name: "Ear Ring"},
            {name: "Props"},
            {name: "Eyewear Eyes and faces"},
        ],
    }
];

const shuffleLayerConfigurations = true;

const debugLogs = true;

const format = {
    width: 1000,
    height: 1000,
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 100,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 200,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
