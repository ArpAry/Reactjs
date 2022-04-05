import {createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';
import { dependencies } from 'webpack';
//
//ADDEXPENSE Action Generator
//
const addExpense=({description="",note="",amount=100,createdAt=0}={}) =>
({
    type:'ADDEXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//
//EXPENSE Action Generator
//
const removeExpense=({id})=>({
    type:'REMOVEEXPENSE',
    id
});

// Expensify  Reducer
const expensifyDefault=[];
const expensifyReducer=(state =expensifyDefault,action) =>{
switch(action.type)
{   case 'ADDEXPENSE':
    return [
        ...state,
        action.expense
    ];
    case 'REMOVEEXPENSE':
        return state.filter(({id})=>   id!==action.id );
    default:return state;}
} 
// Filter Reducer
const defaultFilterReducer={
    text:"",
    sortby:"Date",
    startdate:undefined,
    enddate:undefined
};
const filterReducer=(state=defaultFilterReducer,action)=>{
    switch(action.type)
    { 
        default:
            return state;
    }
}
//
//Store Creation and Combine Reducer
//
const store=createStore(
    combineReducers({
        expense:expensifyReducer,
        filters:filterReducer
    })
    );

    store.subscribe(()=>{console.log(store.getState())});

   const expenseone=  store.dispatch(addExpense({description:"RENT",amount:1000}));
   const expensetwo= store.dispatch(addExpense({description:"Coffee",amount:5000}));

   store.dispatch(removeExpense({id :expenseone.expense.id}));
    console.log(expenseone);


    const stu={
        name:"DEEP",
        Age:14,
        class:1
    }
    //console.log(...stu);
   
// const demostate={
//     expense: [{
//         id:"kjdfksk",
//         description:"January Rent",
//         note:"This was last Rent for that site",
//         Amount:5000,
//         CreateAt:"0"
//      }],
//      filters:{
//          text:"rent",
//          sortby:"amount",
//          startdate:undefined,
//          Enddate:undefined
//      }
//  };
 