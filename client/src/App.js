import './App.css';
import VendorList from './components/VendorList';
import AddVendor from './components/AddVendor';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<AddVendor />}></Route>
      <Route exact path='/vendors-list' element={<VendorList />}></Route>
    </Routes>
  );
}

export default App;
