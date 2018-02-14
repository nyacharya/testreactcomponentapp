import React from "react";
import { Switch, Route } from "react-router-dom";
import UserDetail from "../components/list";
import ListUser from "../../users";
import addUsers from "../../adduser";
import Fancy from 'react-fancy-component';

const UserRouter = () => (

  <div>
    <Switch>
      <Route exact path="/user/:id" component={UserDetail} />
      <Route exact path="/edit-user/:id" component={addUsers} />
      <Route exact path="/" component={ListUser} />
      <Route path="*" component={ListUser} />
    </Switch>
  </div>
);

export default UserRouter;


