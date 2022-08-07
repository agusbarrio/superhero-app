import './App.css';
import UserContextProvider from './contexts/UserContext';
function App() {
  return (
    <UserContextProvider>
      <div>SuperHero App</div>
    </UserContextProvider>
  );
}

export default App;
