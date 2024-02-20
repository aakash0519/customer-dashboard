import './App.css';
import Sidebar from './Components/Sidebar';
import UserAddNew from './Components/UserAddNew';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="dashboard">
      <div className='container'>
        <div className='row'>
        <BrowserRouter>
          <div className="sidebar col-md-3">
              <Sidebar />
          </div>
          <div className='data-content col-md-9'>
              <UserAddNew />
          </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
