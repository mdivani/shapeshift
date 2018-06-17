import shapeshiftApi from '../shapeshift/shapeshift';

export const setTransaction = (transaction) => ({
    type: 'SET_TX',
    transaction
});

export const updateTransaction = (updatedTx) => ({
    type: 'UPDATE_TX',
    updatedTx
});

export const startSetTransaction = (depositAmount, withdrawalAddress, returnAddress, coin1, coin2) => {
    return (dispatch) => {
        shapeshiftApi.GetRate(coin1, coin2, (response) => {
            if(response.rate) {
                const rate = response.rate;
                const amount = rate * depositAmount;
                RequestTx(amount, depositAmount, withdrawalAddress, returnAddress, coin1, coin2, dispatch);
            }
        });
    }
}

const RequestTx = (amount, depositAmount, withdrawalAddress, returnAddress, coin1, coin2, dispatch) => {
    const fixedTransaction = shapeshiftApi.CreateFixedTx(amount, depositAmount, withdrawalAddress, returnAddress, coin1, coin2);
    shapeshiftApi.FixedAmountTx(fixedTransaction, (response) => {
        dispatch(setTransaction(response));
        console.log(response);
    });
}

