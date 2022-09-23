
import { Routes, Route } from 'react-router-dom';
import { ResponsiveProvider } from './contexts/responsive-context';
import { PortfolioProvider } from './contexts/portfolio-context';
import Navigation from './routes/navigation/navigation.component';
import IndexElement from './routes/index-element/index-element.component';
import Home from './routes/home/home.component';
import Portfolio from './routes/portfolio/portfolio.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';

import './App.css';

function App() {
  return (
    <Routes >
      <Route element={ 
                            <ResponsiveProvider>
                              <Navigation />
                            </ResponsiveProvider>  
      }>
        <Route path='/' element={ 
                              <PortfolioProvider>
                                <IndexElement />
                              </PortfolioProvider>
         }>
          <Route index element={<Home />}/>
          <Route path='portfolio'element={<Portfolio/>}/>
          <Route path='about'element={<About/>}/>
        </Route>
        <Route path='contact'element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
