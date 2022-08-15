import { UserContextProvider } from './contexts/UserContext';
import LoginView from './views/LoginView';
function App() {
  return (
    <UserContextProvider>
      <LoginView></LoginView>
    </UserContextProvider>
  );
}

export default App;
