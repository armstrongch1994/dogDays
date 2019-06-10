import axios from 'axios'
import history from '../history'

const ADD_DOG = 'ADD_DOG'
const GET_SHELTERS_DOGS = 'GET_SHELTERS_DOGS'
const GET_ALL_DOGS = 'GET_ALL_DOGS'
const GET_SINGLE_DOG = 'GET_SINGLE_DOG'
const UPDATE_DOG_BOOKING = 'UPDATE_DOG_BOOKING'
const GET_FILTERED_DOGS = 'GET_FILTERED_DOGS'
const SET_FILTERS = 'SET_FILTERS'

const initialState = {
  dogs: [],
  sheltersDogs: [],
  singleDog: {},
  personality: '',
  size: '',
  gender: ''
}

const addDog = newDog => ({
  type: ADD_DOG,
  newDog
})

const getSheltersDogs = sheltersDogs => ({
  type: GET_SHELTERS_DOGS,
  sheltersDogs
})

const getAllDogs = allDogs => ({
  type: GET_ALL_DOGS,
  allDogs
})

const getSingleDog = singleDog => ({
  type: GET_SINGLE_DOG,
  singleDog
})

const updateDogBooking = updatedDog => ({
  type: UPDATE_DOG_BOOKING,
  updatedDog
})

const getFilteredDogs = filteredDogs => ({
  type: GET_FILTERED_DOGS,
  filteredDogs
})

export const setFilters = filters => ({
  type: SET_FILTERS,
  filters
})

export const addDogThunk = newDog => async dispatch => {
  try {
    const {data} = await axios.post('/api/dogs', newDog)
    dispatch(addDog(data))
    history.push('/confirmDogSubmission')
  } catch (err) {
    console.error(err)
  }
}

export const getSheltersDogsThunk = shelterId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/shelters/${shelterId}`)
    dispatch(getSheltersDogs(data))
  } catch (error) {
    console.error(error)
  }
}

export const getAllDogsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/dogs')
    dispatch(getAllDogs(data))
  } catch (error) {
    console.error(error)
  }
}

export const getSingleDogThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/dogs/${id}`)
    dispatch(getSingleDog(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateDogBookingThunk = (id, updateData) => async dispatch => {
  try {
    console.log(id, updateData)
    const {data} = await axios.put(`/api/dogs/${id}`, updateData)
    dispatch(updateDogBooking(data))
  } catch (error) {
    console.error(error)
  }
}

export const getfilteredDogsThunk = filters => async dispatch => {
  try {
    const {data} = await axios.put('/api/dogs/filteredDogs', filters)
    dispatch(getFilteredDogs(data))
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
    case GET_ALL_DOGS:
      return {...state, dogs: action.allDogs}
    case GET_SINGLE_DOG:
      return {...state, singleDog: action.singleDog}
    case GET_FILTERED_DOGS:
      return {...state, dogs: action.filteredDogs}
    case SET_FILTERS:
      return {
        ...state,
        personality: action.filters.personality,
        size: action.filters.size,
        gender: action.filters.gender
      }
    default:
      return state
  }
}

export default dogReducer
