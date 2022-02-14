import {createStore} from 'redux';

const store=createStore((State={count:10})=>{
    return State;
})
console.log(store.getState());
