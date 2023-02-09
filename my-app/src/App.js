import logo from './logo.svg';
import './App.css';

import { Route,Routes } from 'react-router-dom';
import UserLogin from './screens/user_login/UserLogin';
import LoginPage from './screens/login_page/LoginPage';
function App() {
  return (
    <Routes> 
      <Route path='login' element={<UserLogin/>}></Route>
      <Route path='loginPage' element={<LoginPage/>}></Route>

    </Routes>
   );
}

export default App;
