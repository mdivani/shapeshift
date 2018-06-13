export default (state = {}, actions) => {
    switch(actions.type) {
        case 'SET_TX': 
            return actions.transaction;
        default: 
            return state;
    }
}