import axios from 'axios'
import history from '../history'

const ADD_DOG = 'ADD_DOG'
const GET_SHELTERS_DOGS = 'GET_SHELTERS_DOGS'
const GET_ALL_DOGS = 'GET_ALL_DOGS'

const initialState = {
  dogs: [],
  sheltersDogs: []
}

const addDog = newDog => ({
  type: ADD_DOG,
  newDog
})

const getSheltersDogs = sheltersDogs => ({
  type: GET_SHELTERS_DOGS,
  sheltersDogs
})
export const addDogThunk = newDog => async dispatch => {
  try {
    const {data} = await axios.post('/api/dogs', newDog)

    dispatch(addDog(data))
  } catch (err) {
    console.error(err)
  }
}

export const getSheltersDogsThunk = shelterId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/dogs/${shelterId}`)
    console.log('data inside add Dog Thunk', data)
    dispatch(getSheltersDogs(data))
  } catch (error) {
    console.error(error)
  }
}

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:
      return {...state, dogs: [...state.dogs, action.newDog]}
    case GET_SHELTERS_DOGS:
      return {...state, sheltersDogs: action.sheltersDogs}
    default:
      return state
  }
}

export default dogReducer
