import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "./store";
import Login from "./components/login";
import Registration from "./components/registration/Registration";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage/HomePage";

import "./App.css";

import StarterPage from "./components/startergames/StarterPage";
import StarterTranslationCourseSelector from "./components/startergames/starterTranslation/StarterTranslationCourseSelector";

function App() {
  console.log("MYGOAL");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

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
            <StarterPage />
          </Route>
          <Route exact path="/starter/translation">
            <StarterTranslationCourseSelector />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
