import axios from 'axios'
import history from '../history'

const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'

const initialState = {
  subscribers: []
}
const addSubscriber = newSubscriber => ({
  type: ADD_SUBSCRIBER,
  newSubscriber
})

export const newSubscriberThunk = email => async dispatch => {
  try {
    const subscriber = {
      email
    }
    const {data} = await axios.post('/api/subscribers', subscriber)
    dispatch(addSubscriber(data))
    history.push('./confirmSubscriber')
  } catch (error) {
    console.error(error)
  }
}

const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: [...state.subscribers, action.newSubscriber]
      }
    default:
      return state
  }
}

export default subscriberReducer
