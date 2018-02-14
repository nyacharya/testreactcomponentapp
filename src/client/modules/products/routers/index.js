import React from "react";
import { Switch, Route } from "react-router-dom";
import ListUsers from "../../users";
import UserDetail from "../../userdetail";
import addUsers from "../../adduser";
import ListProduct from '../../products/components/list';

const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/" component={ListUsers} />
      <Route exact path="/product" component={ListProduct} />
      <Route path="*" component={ListUsers} />

    </Switch>
  </div>
);

export default UserRouter;
