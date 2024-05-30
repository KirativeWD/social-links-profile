import './App.css';
import UserCard from './components/UserCard';
import userData from './data/userData.json';

function App() {

  return (
    <main>
      <UserCard userData={userData} />
    </main>
  )
}

export default App
