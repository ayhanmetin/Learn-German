import 'bootstrap/dist/css/bootstrap.min.css';
import WordApp from './components/WordApp';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container-xl'>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <div className='d-flex justify-content-center'>
              <WordApp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
