/* eslint-disable no-unused-vars */
/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { getUserAuth } from "./redux/actions";
import RequiredAuth from "./components/RequiredAuth";
function App(props) {
  useEffect(() => {
    props.getUserAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route
            path="/home"
            element={
                <RequiredAuth>
                  <Header />
                  <Home />
                </RequiredAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
