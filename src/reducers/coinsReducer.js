export default (state = {}, actions) => {
    switch(actions.type) {
        case 'SET_COINS':
            return actions.coins;
        default:
            return state;
    }
}