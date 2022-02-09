import React from "react";
import {useParams } from 'react-router-dom';
const ExpensifyEdit = (props) => {
    let {id}=useParams();
    console.log(id);
    return(
        <div>  Edit the Expense  Page with id of {id}
        </div>
    )
};
export default ExpensifyEdit;