
import './App.css';

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='toast toast-success'>
          <main className='toast__message'>
            <header className='toast__message-title'>Success</header>
            <p className='toast__message-text'>Right on!</p>
          </main>
          <button className='toast__button'>Dismiss</button>
        </div>
      </div>
    </>
  );
}

export default App;
