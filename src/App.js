import React from 'react';
import Dashboard from './components/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  // Aquí debes poner tu Client ID de Google Cloud Console
 const CLIENT_ID = "906163629499-nt26ucfugpfpmdltuke06ofm85nreekv.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        <Dashboard />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;