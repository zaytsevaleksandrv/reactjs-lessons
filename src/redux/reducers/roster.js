const initialState = {
    rosterLoader: false
};

const roster = (state = initialState, action) => {
    if (action.type === "GET_ROSTER_REQ") {
        return {
            ...state,
            rosterLoader: !state.rosterLoader
        };
    }
    return state;
};

export default roster;
