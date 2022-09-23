
import { Routes, Route } from 'react-router-dom';
import { ResponsiveProvider } from './contexts/responsive-context';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import HomeFeatureCard from './components/page-components/home-feature-card/home-feature-card.component';
import Portfolio from './routes/portfolio/portfolio.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';

import './App.css';

function App() {
  return (
    <Routes >
      <Route  element={ 
                            <ResponsiveProvider>
                              <Navigation />
                            </ResponsiveProvider>  
      }>
        <Route path='/' element={ <Home /> } >
          <Route index element={<HomeFeatureCard/>}/>
          <Route path='portfolio'element={<Portfolio/>}/>
          <Route path='about'element={<About/>}/>
        </Route>
        <Route path='contact'element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
