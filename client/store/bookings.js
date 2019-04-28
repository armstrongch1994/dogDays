import axios from 'axios'
import history from '../history'

const ADD_BOOKING = 'ADD_BOOKING'
const GET_SINGLE_DOG_BOOKING = 'GET_SINGLE_DOG_BOOKING'

const initialState = {
  bookings: [],
  singleDogBooking: []
}

const addBooking = newBooking => ({
  type: ADD_BOOKING,
  newBooking
})

const getSingleDogBooking = singeDogBooking => ({
  type: GET_SINGLE_DOG_BOOKING,
  singeDogBooking
})

// when a user selects a date from a single dog page they will incode the addBooking Thunk
export const addBookingThunk = (newDate, dogId) => async dispatch => {
  try {
    const newBooking = {
      date: JSON.stringify(newDate),
      dogId: dogId
    }
    const {data} = await axios.post(`/api/bookings/${dogId}`, newBooking)
    dispatch(addBooking(data))
    history.push('/thankYou')
  } catch (error) {
    console.error(error)
  }
}

export const getSingleDogBookingThunk = dogId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/bookings/${dogId}`)
    dispatch(getSingleDogBooking(data))
  } catch (error) {
    console.error(error)
  }
}
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {...state, bookings: [...state.bookings, action.newBooking]}
    case GET_SINGLE_DOG_BOOKING:
      return {
        ...state,
        singleDogBooking: [...state.singleDogBooking, action.singeDogBooking]
      }
    default:
      return state
  }
}

export default bookingReducer
// the booking will be added to the booking model and then update the state to show all bookings
// the single dogs page will render bookings based on ID
