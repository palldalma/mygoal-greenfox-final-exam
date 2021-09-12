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
import CustomSelector from "./components/customselector";
import CreateQuiz from "./components/createquiz/CreateQuiz";

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
          <Route exact path="/create">
            <CustomSelector />
          </Route>
          <Route exact path="/create/translation">
            <CreateQuiz />
          </Route>
          <Route exact path="/:level">
            <GameSelector />
          </Route>
          <Route exact path="/:level/translation">
            <ListOfCourses />
          </Route>
          <Route exact path="/:level/translation/:id">
            <Quiz />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
