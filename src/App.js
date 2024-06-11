import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './css/app.css'
import Navbar from './nav';
import Home from './Home';
import Service from './Service';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';


function App() {
  return (
          <BrowserRouter>
    <div className="App">
        <div className='body'>
        <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/service' element={<Service/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/work' element={<Work/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    </div>
          </BrowserRouter>
  );
}

export default App;
