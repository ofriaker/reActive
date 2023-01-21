import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
