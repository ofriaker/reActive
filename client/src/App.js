import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import CatagoryPage from './pages/CatagoryPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/catagory' element={<CatagoryPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
