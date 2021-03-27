require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth payment unable hunt kite bottom sustain'; 
let testAccounts = [
"0xd50146762f056d043e67091ddf32d7ce9fe83c4bb9ceed1730e328fa7ece9d43",
"0x895ecbff59e56b0852458eb48ab70217b2b6539fe5e566e5347644cf20f74797",
"0x60b761caa455e5fc28a9e23f71bf223fcf679384af76201176b6d754bcc874de",
"0xd1297927a0af06bd8945458e697bb2b8e2af056ea3b430715c729137e7882df3",
"0x8be034a4c56b364436e048ee236573f37e0790ebd1ceb02d2b321c1c2b29ff7c",
"0xd2e38f9a2960c1010bd88ec37af483a7e97203833f0d1b40ee2a56d489e92bdf",
"0xbfb92817f50f2fe84212667c13b788452b3859da6898981354ac1208d847aed5",
"0xbb17135bf62485cb4aad084e71492efe1bd3d346f524efc93799082b06014cc4",
"0xe55fe57bc76fa3b716db18df9caf47322fc15d413b54c176826054c73eaf3d52",
"0xd3662da85924a9433dce221618e65fbb8353e9034d136a83a0e061a429becf4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
