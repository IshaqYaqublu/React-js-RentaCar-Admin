import {useEffect} from 'react';
import './App.css';
import Nav from './components/NavBar/Nav'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import {useDispatch} from 'react-redux'
import {setLog} from './redux/loginSlice'
import Sliders from './Pages/Slider'
import Users from 'components/Users/Users';
import Products from 'components/Products/Products';
import Categories from 'components/Categories/Categories';
import Brands from 'components/Brands/Brands';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>
  {

    if (JSON.parse(localStorage.getItem("route")) === null)
    {
      localStorage.setItem("route",JSON.stringify(false))
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }
    else
    {
      dispatch(setLog(JSON.parse(localStorage.getItem("route"))))
    }

  },[])

  let loc = useLocation();

  return (
    <div className="App">

      {loc.pathname !== "/"?<Nav/>:null} 

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/sliders' element={<Sliders/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/brands' element={<Brands/>}/>
          </Route>
        </Routes>
    
    </div>
  );
}

export default App;
