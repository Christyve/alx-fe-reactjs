import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Jane Doe" age={28} bio="Avid traveler and foodie." />
      <Footer />
    </div>
  );
}

export default App;
