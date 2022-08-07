import UserContextProvider from './contexts/UserContext';
import Login from './pages/Login';
function App() {
  return (
    <UserContextProvider>
      <Login></Login>
    </UserContextProvider>
  );
}

export default App;
