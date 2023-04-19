const fs = require("fs");
const dir = __dirname;
const counter = 1000;

const data = {
    "dna": "158981",
    "name": "#1",
    "description": "This is an NFT made by DICOTA for the Scary Teacher.",
    "image": "https://geniteam.com/NFT_Example/dummy/placeholder.gif",
    "edition": 1,
    "date": Date.now(),
    "attributes": [
        {"trait_type": "Body", "value": "-"},
        {"trait_type": "Shoes", "value": "-"},
        {"trait_type": "Dress", "value": "-"},
        {"trait_type": "Face", "value": "-"},
        {"trait_type": "Hair", "value": "-"},
        {"trait_type": "Accessories", "value": "-"}
    ]
};

const startCreating = async () => {
    console.log('creating placeholders..');

    for (let i = 1; i <= counter; i++) {

        data.name = `#${i}`;

        const _json = JSON.stringify(data);
        fs.writeFileSync(`${dir}/placeholders/${i}.json`, _json);
    }
}

startCreating().then(r => console.log('Done!'));