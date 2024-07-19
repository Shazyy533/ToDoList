
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <ToDoList/>
    </div>
    <About/>
    </>
  );
}

export default App;
