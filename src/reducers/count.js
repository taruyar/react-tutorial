import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialStatte, action) => {
  switch(action.type){
    case INCREMENT:
      return { state.value + 1}
    case DECREMENT:
      return { state.value - 1}
    default:
      return state
  }
}