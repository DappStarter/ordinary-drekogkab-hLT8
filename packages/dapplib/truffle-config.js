require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain mixture grace fork supply student'; 
let testAccounts = [
"0xb60068472daa27b6b13853e33fc005a3477e3db9ae9e1c2e25973c8c6142bd13",
"0xb52ecfeab0e5c0b4666eafa66c2db9f3fbdffc8e8e0625ccee24e780fdfea4b6",
"0x8ca6cae088591c88a67ba54aaa12a0583ae7b14381040f92dc41ac0a41b42516",
"0xede1bbdc5eb252ea07773a88437fcdb7c5472088754883d2b7f37ea323f795bb",
"0x3dbb21731d5c648d28d359b45b2d161dc5f1f2da2ddaa3f25570121bd5573857",
"0x03795df2ea690e28db723528b333a883ad4ac4bd06e3d12893d11ba01f86766c",
"0x5fea1099fb140e2d315f1b0141b96473424852f9f035fd6031fa08446ad1c184",
"0x6645762c96bfc482bc8b9b66b780da3db0346d373f4ccf027c77cee13ce2f68d",
"0x23b5420bab18477c80036b0a0621f18bf6f0d8821ea9d07535b009c4e4c7abbb",
"0x2375bb8fdb30722a4aaa319f79102781d74c288d9ee108a7f8cd59b140ea086d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

