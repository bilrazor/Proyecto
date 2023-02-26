import logo from './logo.svg';
import './App.css';

import { Route,Routes } from 'react-router-dom';
import UserLogin from './screens/user_login/UserLogin';
import LoginPage from './screens/login_page/LoginPage';
import UserRegister from './screens/user_register/UserRegister';
import UserProfile from './screens/user_profile/UserProfile';
function App() {
  return (
    <Routes> 
      <Route path='login' element={<UserLogin/>}></Route>
      <Route path='loginPage' element={<LoginPage/>}></Route>
      <Route path='register' element={<UserRegister/>}></Route>
      <Route path='profile' element={<UserProfile/>}></Route>

    </Routes>
   );
}

export default App;
