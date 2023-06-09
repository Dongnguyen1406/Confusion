import { legacy_createStore as createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store2 = createStore(reducer)
export default store2;