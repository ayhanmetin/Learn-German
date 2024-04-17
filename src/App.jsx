import 'bootstrap/dist/css/bootstrap.min.css';
import WordApp from './components/WordApp';
import Nav from './components/Nav';
import frankfurt from './image/Frankfurt.jpeg';

function App() {
  return (
    <>
      <div className=''>
        <Nav />
      </div>
      <div className='d-flex me-4 ms-4 mt-4 justify-content-center'>
        <div className='d-flex col-12 justify-content-center'>
          <WordApp />
        </div>
      </div>
    </>
  );
}

export default App;
