import { AppState, AppActionTypes, SELECTED_CITY, SELECTED_USER, BANNERS } from "./action";

// Initial state for the reducer
const initialState: AppState = {
    select_city: "New Delhi", // default city
    select_user: "Guest", // default user
    banners: {}
};

// Single reducer that handles multiple pieces of state
const reducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case SELECTED_CITY:
            return { ...state, select_city: action.payload };

        case SELECTED_USER:
            return { ...state, select_user: action.payload };

        case BANNERS:
            return { ...state, banners: action.payload };

        default:
            return state;
    }
};

export default reducer;
