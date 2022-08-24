import React from "react";
import ScrollToTop from "../src/components/routerScroll";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./app.css";
import { Div, StyleReset, ThemeProvider } from "atomize";
import Navbar from '../src/components';
import Api from '../src/pages/api';
import Home from '../src/pages/Home';
import About from '../src/pages/about';
import FaqsList from '../src/pages/FaqsList';
import Social from '../src/pages/social';
import Contact from '../src/pages/contact';
import Students from '../src/pages/students';
import Product from '../src/pages/product';
import Loan from '../src/pages/loan';
import Group from '../src/pages/group';
import { Fragment } from "react/cjs/react.production.min";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
// 1. Create a client engine instance
const engine = new Styletron();


const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

     return (
  
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
        <Router>
        <Fragment>
        <ScrollToTop/>
      <Navbar></Navbar>
      <br></br><br></br><br></br>
      <Routes>
        <Route  path='/' exact element={<Home />} />
        <Route path='/home' element={<Home/>} />
       <Route path='/api' element={<Api/>} />
        <Route path='/faqs' element={<FaqsList/>} />
       <Route path='/contact' element={<Contact />} />
        <Route path='/students' element={<Students />} />
         <Route path='/product' element={<Product />} />
          <Route path='/loan' element={<Loan />} />
           <Route path='/group' element={<Group />} />
      </Routes>
      <Social      style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "green"
        }}></Social>
     </Fragment>
    </Router>
  

        </ThemeProvider>
      </StyletronProvider>
  
     
    );
  }
}
export default App;