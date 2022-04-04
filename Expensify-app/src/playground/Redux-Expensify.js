import {createStore,combineReducers } from 'redux';
const demostate={
   expenses: [{
       id:"kjdfksk",
       description:"January Rent",
       note:"This was last Rent for that site",
       Amount:5000,
       CreateAt:"0"
    }],
    filters:{
        text:"rent",
        sortby:"amount",
        startdate:undefined,
        Enddate:undefined
    }
};