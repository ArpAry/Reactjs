import React from "react";
import {useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ExpensifyEdit = () => {
    let {id}=useParams();
    let location = useLocation();
    console.log(location)
    //console.log(id);
    return(
        <div> 
         Edit the Expense  Page with id of {id}
        </div>
    )
};
export default ExpensifyEdit;