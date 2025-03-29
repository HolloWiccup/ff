let crypta = {
  solana: 150,
  cardano: 1,
};

let newCrypta = structuredClone(crypta);
console.log(newCrypta);
newCrypta.solana = 149;
console.log(newCrypta.solana);
console.log(crypta.solana);
