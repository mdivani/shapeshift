import { getCoinData } from '../coincap/coinCap';

const topCoins = [
    'BTC',
    'ETH',
    'XRP',
    'BCH',
    'LTC',
    'XMR',
    'DASH',
    'ETC',
    'QTUM',
    'OMG'
];

export const setTopCoins = (coins) => ({
    type: 'SET_TOP_COINS',
    coins
});

export const startSetTopCoins = () => {
    return (dispatch) => {
        getCoinData((data) => {
            const coins = [];
            let i = 0;
            topCoins.forEach((symbol) => {
                const coin = data.filter((coin) => {
                    if(symbol === coin.short) {
                        return coin;
                    }
                })[0];
                if(coin) {
                  coins[i] = coin;
                  i++;
                }
            });
            dispatch(setTopCoins(coins));
        });
    }
};