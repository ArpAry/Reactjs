import {createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';
//import { dependencies } from 'webpack';
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
//REMOVE EXPENSE
//
const removeExpense=({id})=>({
    type:'REMOVEEXPENSE',
    id
});

//EDIT EXPENSE
const editExpense=(id,update)=>({
    type:'Edit_EXPENSE',
    id,
    update
});
//set_TEXT_FILTER
const setTextFilter=(text="")=>({ type:'SET_TEXT_FILTER',text});
//SORT_BY_DATE
const sortByDate=()=>({type:'SORT_BY_DATE'});
//Sort_BY_AMOUNT
const sortByAmount=()=>({type:'SORT_BY_AMOUNT'});
//SET_START_DATE
const sortByStartDate=(startDate)=>({type:'SORT_BY_START_DATE',startDate});

//SET_END_DATE
const sortByEndDate=(endDate)=>({type:'SORT_BY_END_DATE',endDate});
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
        case 'EDIT_EXPENSE':
            return state.map((expense) =>  
            {
                if(expense.id===action.id)
                {
                    return{...expense,...action.updates}
                }
                else{
                    return({expense});
                }
            }
        );
    default:return state;}
} 
// Filter Reducer
const defaultFilterReducer={
    text:"",
    sortby:'DATE',
    startDate:undefined,
    endDate:undefined
};
const filterReducer=(state=defaultFilterReducer,action)=>{
    switch(action.type)
    { case 'SET_TEXT_FILTER':return({...state,text:action.text});
    case 'SORT_BY_DATE':return{...state,sortby:'date'};
    case 'SORT_BY_AMOUNT':return({...state,sortby:'amount'});   
    case 'SORT_BY_START_DATE':return({...state,startDate:action.startDate});
    case 'SORT_BY_END_DATE':return({...state,endDate:action.endDate});
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

//    const expenseOne=  store.dispatch(addExpense({description:"RENT",amount:1000}));
//    const expenseTwo= store.dispatch(addExpense({description:"Coffee",amount:5000}));
//     store.dispatch(setTextFilter("rent"));
//     store.dispatch(setTextFilter());
//     store.dispatch(sortByAmount());
//     store.dispatch(sortByDate());
        store.dispatch(sortByStartDate(125));
        store.dispatch(sortByStartDate());
        store.dispatch(sortByEndDate(12));
        store.dispatch(sortByEndDate());

//    store.dispatch(removeExpense({id :expenseOne.expense.id}));
//     console.log(expenseOne);

//store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
//     const stu={
//         name:"DEEP",
//         Age:14,
//         class:1
//     }
//     console.log({...stu});
   
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
//   };
//  const user={name:'Jen',
// age:24};
 
// console.log({...user});
//  console.log({age:27,...user,name:'arpit',location:'Bareilly',});