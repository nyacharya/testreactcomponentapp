import React from "react";
import { Switch, Route } from "react-router-dom";
import UserDetail from "../../userdetail/components/list";
import addUsers from "../components/adddata";
import ListUsers from "../../users";
import Fancy from 'react-fancy-component';

const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/user/:id" component={UserDetail} />
      <Route exact path="/edit-user/:id" component={addUsers} />
      <Route exact path="/add-user" component={addUsers} />
      <Route exact path="/users" component = {ListUsers} />
      <Route path="*" component={addUsers} />
    </Switch>
  </div>
);

export default UserRouter;


