import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';

import './App.css';
import StartPage from './pages/StartPage';
import SelectPage from './pages/SelectPage';
import GamePage from './pages/GamePage';
import ProfilePage from './pages/ProfilePage';
import ClearPage from './pages/ClearPage';
import AuthLayout from './components/AuthLayout';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<StartPage />} />
          <Route path={"/"} element={<AuthLayout />}>
            <Route path={"select"} element={<SelectPage />} />
            <Route path={"game"} element={<GamePage />} />
            <Route path={"profile"} element={<ProfilePage />} />
            <Route path={"clear"} element={<ClearPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
