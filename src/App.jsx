import 'bootstrap/dist/css/bootstrap.min.css';
import WordApp from './components/WordApp';
import './app.css';

function App() {
  return (
    <div className='container-xl flex-grow-1'>
      <h1 className='text-center'>Daily German Word Learning</h1>
      <div className='row' style={{ minHeight: '100vh' }}>
        <div className='col-12 px-3 py-2 border-start-end d-flex justify-content-center'>
          <div>
            <WordApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
