import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensifyAddPage from "../js-component/AddExpense";
import ExpensifyDashboardPage from "../js-component/DashbordOfExpense";
import ExpensifyEditPage from "../js-component/ExpensifyEditPage";
import ExpensifyHelpPage  from "../js-component/ExpensifyHelp";
import Error404 from "../js-component/ExpensifyErrorPage";
import Header from "../js-component/ExpensifyHeader";

const AppRouterFun =() =>(
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
    <Route path="/" element={<ExpensifyDashboardPage>  </ExpensifyDashboardPage>} exact={true} />
    <Route
      path="/create"
      element={<ExpensifyAddPage> </ExpensifyAddPage>}
    />
    <Route
      path="/edit"
      element={<ExpensifyEditPage> </ExpensifyEditPage>}
    />
    <Route
      path="/help"
      element={<ExpensifyHelpPage> </ExpensifyHelpPage>}
    />
    <Route path="*" element={<Error404>  </Error404>} />
    </Routes>
      </div>
  </BrowserRouter>
);
export default AppRouterFun;
