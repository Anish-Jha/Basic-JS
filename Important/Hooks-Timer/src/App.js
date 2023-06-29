import "./App.css";
import React from 'react';
import useOnlineStatus from './hooks/useOnlineStatus';
import useTimeout from './hooks/useTimeout';
function App() {
  const ready = useTimeout(5000);
  const isUserOnline = useOnlineStatus();
  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {/* Show this div if the ready variable is true */}
      <div>
      {ready ? (
        <div data-testid="timeout-div">After the timeout</div>
      ) : (
        <div></div>
      )}
    </div>

      <br />
      <h3>Online Status</h3>
      <div>
      {isUserOnline ? (
        <div data-testid="online-status">Online 🟢</div>
      ) : (
        <div data-testid="offline-status">Offline 🔴</div>
      )}
      </div>
    </div>
  );
}

export default App;

