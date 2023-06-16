import './App.css';
import FrontPage from './pages/FrontPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import GetInTouch from './pages/GetInTouch';
import OurServices from './pages/OurServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path='/' element={<FrontPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/getintouch' element={<GetInTouch />} />
        <Route path='/ourservices' element={<OurServices />} />
        <Route path='/ourservices/:service' element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
