export default (coins, identifier = '') => {
    var regex1 = new RegExp(identifier, "g");
    return coins.filter((coin) => {
        if(coin.name.toLowerCase().match(regex1) || coin.symbol.toLowerCase().match(regex1)) {
            return coin;
        }
    });
}