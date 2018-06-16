import shapeshiftApi from '../shapeshift/shapeshift';

export const setTransaction = (transaction) => ({
    type: 'SET_TX',
    transaction
});

export const updateTransaction = (updatedTx) => ({
    type: 'UPDATE_TX',
    updatedTx
});

export const startSetTransaction = (amount, withdrawalAddress, coin1, coin2) => {
    return (dispatch) => {
        const fixedTransaction = shapeshiftApi.CreateFixedTx(amount, withdrawalAddress, coin1, coin2);
        shapeshiftApi.FixedAmountTx(fixedTransaction, (response) => {
            dispatch(setTransaction(response));
            console.log(response);
        });
    }
}

