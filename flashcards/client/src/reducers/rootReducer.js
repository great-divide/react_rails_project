import {combineReducers} from 'redux';
import flashcardsReducer from './flashcardsReducer'
// import uuid from "uuid";

const rootReducer = combineReducers({
  flashcards: flashcardsReducer
})

export default rootReducer;