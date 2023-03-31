import './App.css';
import Cards from './component/Cards/Cards';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App container">
    <Navbar></Navbar>
    <div className="main row">
    <div className="col-12 col-md-8">
    <Cards></Cards>
    </div>
    <div className="col-12 col-md-4 position-sticky t-0">
    <Sidebar></Sidebar>
    </div>
    </div>

</div>

  );
}

export default App;





