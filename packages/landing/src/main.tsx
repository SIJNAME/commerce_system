import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div style={{ fontFamily: 'Noto Sans Thai, sans-serif', padding: 24 }}>Customer landing app scaffold</div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
