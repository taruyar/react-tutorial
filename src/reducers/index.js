import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })

/*
E.G. 複数のReducerをまとめる
export default combineReducers({ foo bar baz })
 */