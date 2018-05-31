import SSAPI from '../shapeshift/shapeshift';

export const setCoins = (coins) => ({
    type: 'SET_COINS',
    coins
});

export const startSetCoins = () => {
    return (dispatch) => {
        SSAPI.GetCoins((coins) => {
            dispatch(setCoins(coins));
        });
    }
}
