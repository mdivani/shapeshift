import SSAPI from '../shapeshift/shapeshift';

export const validateCoinAddres = (address, symbol) => {
    let response = {};
    SSAPI.ValidateAdddress(address, symbol, (data) => {
        response = data;
    });
    return response;
}