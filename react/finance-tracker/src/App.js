import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Pages/ThemeContext';
import Dashboard from './Pages/Dashboard';
import Layout from './components/Layout'
import Settings from './Pages/Settings';
import TransactionForm from './components/TransactionForm';


function App() {
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark=mode' : 'light-mode'}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="transactionform" element={<TransactionForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
