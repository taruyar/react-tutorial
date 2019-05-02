import _ from 'lodash'
import { READ_EVENTS, READ_EVENT, CREATE_EVENT, DELETE_EVENT,UPDATE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch(action.type){
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      console.log(`Reducer: ${READ_EVENT}`)
      return { ...events, [data.id]: data}
    case READ_EVENTS:
      console.log(`Reducer: ${READ_EVENTS}`)
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      console.log(`Reducer: ${DELETE_EVENT}/ id: ${action.id}`)
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}