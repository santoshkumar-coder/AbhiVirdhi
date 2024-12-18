import { createStore } from "redux";
import reducer from "./reducer";

// Create the Redux store
const store = createStore(reducer);

export default store;
