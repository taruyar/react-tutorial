import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

/*
E.G. 複数のReducerをまとめる
export default combineReducers({ foo bar baz })
 */