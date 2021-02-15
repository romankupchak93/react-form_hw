import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './components/css/App.css';
import './components/css/floating-labels.css';
import AppHeader from './components/Layout/AppHeader';
import Wrapper from './components/Layout/Wrapper';
import Footer from './components/Layout/Footer';

export const App = () => {

  return (
          <div className={'main'}>
              <AppHeader />
              <Wrapper/>
              <Footer/>
          </div>
      );
}