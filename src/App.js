import React from "react";
import "./App.css";
import Contacts from "./Components/Contact/Contacts";
import Header from "./Components/Common/Header";
import AddContact from "./Components/Contact/AddContact";
import Provider from "./Components/Data/Context";
import EditContact from "./Components/Contact/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/Common/NotFound";
import About from "./Components/Common/About";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header></Header>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 col-sm-12">
                <Switch>
                  <Route exact path="/" component={Contacts}></Route>
                  <Route
                    exact
                    path="/addcontact"
                    component={AddContact}
                  ></Route>
                  <Route
                    exact
                    path="/editcontact/:id"
                    component={EditContact}
                  ></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
