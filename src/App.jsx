
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { ThemeProvider } from '@mui/material'
import theme from './theme';
// import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppContextProvider from './components/AppContext';


const queryClient = new QueryClient({
  defaultOptions: {
    
  },
})
export default function App() {

  return(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>} exact/>
            <Route path="/dance-exercises" element={<HomePage/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
      </AppContextProvider>
    </ThemeProvider>
 )
} 