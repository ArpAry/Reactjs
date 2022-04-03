import {createStore } from 'redux';
const store=createStore((state={count:0},action)=>
{
   //  console.log(count);
    if(action.type==='INCREMENT')
    {const incrementby= typeof action.incrementby==='number' ?action.incrementby:1;
        return{ count:state.count+incrementby }
    }
    else if(action.type==='DECREMENT')
    {const decrementby=typeof action.decrementby ==='number' ?action.decrementby:1;
        return{count:state.count-decrementby}
    }
    else if(action.type==='RESET')
    {
        return{count:0}
    }
    else
    return  state;
});
//console.log(store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(
{
    type:'INCREMENT',
    incrementby:5
});
store.dispatch(
    {
        type:'INCREMENT'
    });
  //  unsubscribe();
store.dispatch({
    type:'RESET'
});
store.dispatch({
    type:'DECREMENT'
});
store.dispatch({
    type:'DECREMENT',
    decrementby:10
});
//console.log(store.getState());
// console.log("123");
 