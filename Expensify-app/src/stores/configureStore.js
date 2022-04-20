import {createStore,combineReducers} from 'redux';
import expensifyReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';
//
//Store Creation and Combine Reducer
//
export default ()=>{
    const store = createStore(
        combineReducers({
          expense: expensifyReducer,
          filters: filterReducer,
        })
      );
      return store;

}
