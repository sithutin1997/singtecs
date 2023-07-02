import './App.css';
import FrontPage from './pages/FrontPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import GetInTouch from './pages/GetInTouch';
import OurServices from './pages/OurServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path='/' element={<FrontPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/getintouch' element={<GetInTouch />} />
        <Route path='/ourservices' element={<OurServices />} />
        <Route path='/ourservices/:service' element={<ServiceDetailPage />} />
        <Route path='/privacy' element={<PrivacyPage />}/>
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
