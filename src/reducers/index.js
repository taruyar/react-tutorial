import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })

/*
E.G. 複数のReducerをまとめる
export default combineReducers({ foo bar baz })
 */