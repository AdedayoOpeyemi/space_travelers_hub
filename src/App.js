import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import MyProfile from './components/MyProfile';
import RocketList from './components/RocketList';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <RocketList />
        </Route>
        <Route exact path="/missions">
          <p>MISSIONS</p>
        </Route>
        <Route exact path="/myprofile">
          <MyProfile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
