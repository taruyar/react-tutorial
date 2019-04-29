import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//thunkを使って、アクションの代わりに関数を返す
//axiosの戻り値はPromise
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({type: READ_EVENTS, response})
}

/*
https://udemy-utils.herokuapp.com/api/v1/events?token=token123
*/