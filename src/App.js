import UserContextProvider from './contexts/UserContext';
import Login from './templates/Login';
function App() {
  return (
    <UserContextProvider>
      <Login></Login>
    </UserContextProvider>
  );
}

export default App;
