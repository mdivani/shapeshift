import SSAPI from '../shapeshift/shapeshift';

export const setCoins = (coins) => ({
    type: 'SET_COINS',
    coins
});

export const startSetCoins = (cb) => {
    return (dispatch) => {
        SSAPI.GetCoins((coins) => {
           const data = dispatch(setCoins(coins)).coins;
           if(cb !== undefined) {
            cb(data);
           }
        });
    }
}
