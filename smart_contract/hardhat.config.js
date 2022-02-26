require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/C0_0TnZOxwAvwuImZcq6upe-QbQqRBqz",
      accounts: ["dce6efe3c21a9dc455ee35dc5e85bdb3d3a7412d5589ec3e41dee654bb60beb5"],
    },
  },
};


// require('@nomiclabs/hardhat-waffle')

// module.exports = {
//   solidity: "0.8.2",
//   networks: {
//     rinkeby: {
//       url: "https://eth-ropsten.alchemyapi.io/v2/C0_0TnZOxwAvwuImZcq6upe-QbQqRBqz",
//       accounts: [
//         "f2679263aadf9db7949246a5265f7cf0b0aece610ba4d84dcfc9304ccd050d0c",
//       ],
//     },
//   },
// };