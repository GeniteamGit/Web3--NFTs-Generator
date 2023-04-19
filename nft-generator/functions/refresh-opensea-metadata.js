const axios = require("axios");

const tokens = 7;
const contractAddress = "0xcd8e7d7bA0C782C34231ceE5583a5C5bd6a83959";

const refreshMetadata = async () => {
    console.log('refreshing metadata..');

    for (let tokenId = 1; tokenId <= tokens; tokenId++) {
        // Opensea
        await axios.get(`https://testnets-api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/?force_update=true`)
        await axios.get('https://google.com');

        // Rarible
        // await axios.get(`https://rinkeby.rarible.com/token/${contractAddress}:${tokenId}`)
    }
}

refreshMetadata().then(r => console.log('Done!'));