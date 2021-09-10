import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import Login from "./components/login";
import Registration from "./components/registration/Registration";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/";

import "./App.css";

import GameSelector from "./components/gameSelector";
import Quiz from "./components/quiz/";

import Loader from "./components/loading/";
import ListOfCourses from "./components/listofcourses";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Loader />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/users/login">
            <Login />
          </Route>
          <Route exact path="/users/registration">
            <Registration />
          </Route>
          <Route exact path="/starter">
            <GameSelector />
          </Route>
          <Route exact path="/starter/translation">
            <ListOfCourses />
          </Route>
          <Route exact path="/starter/translation/:id">
            <Quiz />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
