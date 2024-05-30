const RandExp = require('randexp');

function generateRandomStrings(pattern, numSamples) {
    const randexp = new RandExp(pattern);
    const samples = [];
    for (let i = 0; i < numSamples; i++) {
        samples.push(randexp.gen());
    }
    return samples;
}

// コマンドライン引数を取得
const args = process.argv.slice(2);
const pattern = args[0];
const numSamples = parseInt(args[1], 10);

if (!pattern || isNaN(numSamples)) {
    console.log('Usage: node regix_gacha.js <pattern> <numSamples>');
    process.exit(1);
}

const randomStrings = generateRandomStrings(pattern, numSamples);
randomStrings.forEach(str => console.log(str));
