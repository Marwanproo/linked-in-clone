import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from './articlesReducer'
import imageReducer from "./imageReducer";
const rootReducer = combineReducers({
    userState: userReducer,
    articleState: articleReducer,
    imageState:imageReducer,
})
export default rootReducer;