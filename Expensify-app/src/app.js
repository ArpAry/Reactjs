// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Routes,Switch, Route } from "react-router-dom";
const appRoot = document.getElementById("app");
const ExpensifyDashboardPage = () => <div>this is from dashboard Page</div>;
const ExpensifyAddPage = () => <div>this id from Add Page</div>;
const ExpensifyEditPage = () => <div> This is from Edit Page</div>;
const ExpensifyHelpPage = () => <div>this is from Help Page</div>;
const Eror= ()=>(<div> Error 404</div>);
const routes = (
  <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<ExpensifyDashboardPage />} />
        <Route
          path="/create"
          element={<ExpensifyAddPage></ExpensifyAddPage>}
          exact={true}
        />
        <Route
          path="/edit"
          element={<ExpensifyEditPage></ExpensifyEditPage>}
          exact={true}
        />
        <Route
          path="/help"
          element={<ExpensifyHelpPage></ExpensifyHelpPage>}
          exact={true}
        />
        <Route path="*" element={<Eror></Eror>} />
      
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(routes, appRoot);
