import 'bootstrap/dist/css/bootstrap.min.css';
import WordApp from './components/WordApp';

function App() {
  return (
    <div className="container-xl">
      <div className='row justify-content-center'>
        <div className='col-8'>
          <div className='d-flex justify-content-center'>
            <WordApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
