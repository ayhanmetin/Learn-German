import 'bootstrap/dist/css/bootstrap.min.css';
import WordApp from './components/WordApp';

function App() {
  return (
    <>
      <div className='container-xl flex-grow-1'>
        <div className='row' style={{ minHeight: '100vh' }}>
          {' '}
          <div className='col-2 border-end'>
            1 of 3
          </div>
          <div className='col-10'>
            <WordApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
