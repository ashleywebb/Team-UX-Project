import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/api/users/users-service'


export default function App() {
  const [ user, setUser ] = useState(null)


  useEffect(() => {
    setUser(getUser())
  },[])



  return (
    <div className = "App">
     
     <NavBar user={user} setUser={setUser} />
     <Routes>
        <Route path='/signup' element={<AuthPage user={user} setUser={setUser} />}/>
    
        <Route path='/' element={<HomePage user={user} setUser={setUser} />} />
  


     </Routes>

     <Footer />
    </div>
  );
}