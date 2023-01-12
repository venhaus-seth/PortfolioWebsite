import './App.css';
import {Routes, Route} from 'react-router-dom'
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContactMe from "./components/ContactMe"
import SideBar from "./components/SideBar"


function App() {
  return (
    <div className='MainPage'>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contactMe' element={<ContactMe />} />
        </Routes>
        <SideBar/>
    </div>
  );
}

export default App;
