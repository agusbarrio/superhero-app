import { UserContextProvider } from './contexts/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constants';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginAccess from './auth/LoginAccess';
import HomeAccess from './auth/HomeAccess';
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={PATHS.HOME}
            element={
              <HomeAccess>
                <HomePage />
              </HomeAccess>
            }
          />
          <Route
            path={PATHS.LOGIN}
            element={
              <LoginAccess>
                <LoginPage />
              </LoginAccess>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
