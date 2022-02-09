import React from "react";
import { BrowserRouter, NavLink, Routes, Route, Link } from "react-router-dom";
import Home from "../js-component/Home";
import Error404 from "../js-component/Error";
import Portfolio from "../js-component/Portfolio";
import Contact from "../js-component/contact";
import Header from "../js-component/Header";
import Item from "../js-component/PortfolioItem";

const AppRouterFun = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Item></Item>}></Route>
        <Route path="/Portfolio/:id" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);
export default AppRouterFun;
