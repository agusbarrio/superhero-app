import { UserContextProvider } from './contexts/UserContext';
import PublicLayout from './templates/PublicLayout';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <UserContextProvider>
      <PublicLayout>
        <LoginForm></LoginForm>
      </PublicLayout>
    </UserContextProvider>
  );
}

export default App;
