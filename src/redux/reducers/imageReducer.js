import * as actions from '../actions/actionTypes'
const initialState = {
    image: [],
    index:''
}
 const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_IMAGE:
            return {
                image: [...state.image, action.image],
                index: action.index
            }
        default:
            return state
    }
}
export default imageReducer;