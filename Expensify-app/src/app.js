// import validator from "validator";
// import React from "react";
// import ReactDOM from "react-dom";
// import "normalize.css/normalize.css";
// import "./styles/styles.scss";
// const appRoot = document.getElementById("app");
// ReactDOM.render(<p>this is Boilerplate</p>, appRoot);
import AppRouterFun from "./routers/AppRouter";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./stores/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {addExpense} from './actions/expenses';
import { setTextFilter } from "./actions/filter";
import getVisibleExpenses from './selectors/expenses';
//import expenses from "./reducers/expenses";
const store =configureStore();

store.dispatch(addExpense({description:'waterbill'}));
store.dispatch(addExpense({description:'gasbill'}));
store.dispatch(setTextFilter("gas"));

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expense,state.filters);
console.log(visibleExpenses);
//console.log(store.getState());

const appRoot = document.getElementById("app");
ReactDOM.render(<AppRouterFun/>, appRoot);
