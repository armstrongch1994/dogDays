import axios from 'axios'
import history from '../history'

const ADD_DOG = 'ADD_DOG'

const initialState = {
  dogs: []
}

const addDog = newDog => ({
  type: ADD_DOG,
  newDog
})

export const addDogThunk = newDog => async dispatch => {
  try {
    const {data} = await axios.post('/api/dogs', newDog)
    dispatch(addDog(data))
  } catch (err) {
    console.error(err)
  }
}

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:
      return {...state, dogs: [...state.dogs, action.newDog]}
    default:
      return state
  }
}

export default dogReducer
