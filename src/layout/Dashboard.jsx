import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

import { Grid, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" Component={ProductList} />
              <Route path="/products" Component={ProductList} />
              <Route path="/products/:id" Component={ProductDetail} />
              <Route path="/cart/" Component={CardDetail} />
              <Route path="/product/add" Component={ProductAdd} />
              
            </Routes>
          </Grid.Column>
        </GridRow>
      </Grid>
    </div>
  );
}
