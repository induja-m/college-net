// import Login from "./components/login/Login";
import Login from './components/login/Login'
import { BrowserRouter, Route, Link, Switch, HashRouter } from "react-router-dom";
import Header from './components/header/Header';
import React, { Component ,Suspense} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import InputForm from './components/login/index';
import LoginContainer from './components/container/loginContainer';
import CollegesHomeContainer from './components/container/collegesHomeContainer';
import CollegeDetailsContainer from './components/container/collegeDetailsContainer';
import StudentsHomeContainer from './components/container/studentsHomeContainer';
import MyApplicationsContainer from './components/container/myApplicationsContainer';
import ApplicationTrackingContainer from './components/container/applicationTrackingContainer';
const StudentsHome = React.lazy(()=>import('./components/students/studentsHome'))
const CollegesHome = React.lazy(()=>import('./components/collegesHome/collegesHome'))
const CollegeDetails = React.lazy(()=>import('./components/collegesHome/collegeDetails'))
const MyApplications = React.lazy(()=>import('./components/students/myApplications'))
const ApplicationTracking = React.lazy(()=>import('./components/students/applicationTracking'))



function App() {
//routing
  return (
    <div >
      {/* <Header/> */}
      <Suspense fallback={<>Loading....</>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route path="/login" component={LoginContainer} />
          <Route path="/students/myapplications" component={MyApplicationsContainer} exact/>
          <Route path="/students/home" component={StudentsHomeContainer} exact/>
          <Route path="/colleges/home" component={CollegesHomeContainer} exact/>
          <Route path="/colleges/:code" component={CollegeDetailsContainer} exact/>
          <Route path="/tracking/:id" component={ApplicationTrackingContainer} exact/>
          <Route path="**" render={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
