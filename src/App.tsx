import { useState } from 'react';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'signup'>('landing');

  if (currentPage === 'signup') {
    return <SignupPage onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onSignup={() => setCurrentPage('signup')} />;
}
