import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import RegisterPage from './register_page/register_page';
import SigninPage from './signin_page/signin_page';
import Home_page from './home_page/home_page';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path={"/"} element={<RegisterPage/>}/>
      <Route path={"/login"} element={<SigninPage/>}/>
      <Route path={"/home"} element={<Home_page/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
