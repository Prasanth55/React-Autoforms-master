import react from 'react';
import UserForm from './components/UserForm/UserForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='body-bg'>
      <Header />
      <UserForm />
      <Footer />
    </div>
  )
}

export default App;
