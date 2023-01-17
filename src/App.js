import './App.css';
import {Routes, Route, Redirect} from 'react-router-dom'
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContactMe from "./components/ContactMe"
import SideBar from "./components/SideBar"
import Landing from './components/Landing';


function App() {
  return (
    <div className='MainPage'>
      <SideBar/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/aboutMe/*' element={<AboutMe />} />
          <Route path='/projects/*' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contactMe' element={<ContactMe />} />
        </Routes>
       
    </div>
  );
}

export default App;
