import { createStore } from "redux";
import MyReducer from "./reducer";

const store = createStore(MyReducer)

export default store;