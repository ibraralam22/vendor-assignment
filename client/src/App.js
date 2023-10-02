import './App.css';
import VendorList from './components/VendorList';
import AddVendor from './components/AddVendor';
import EditVendor from './components/EditVendor';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<VendorList />}></Route>
      <Route exact path='/vendors' element={<VendorList />}></Route>
      <Route path='/edit-vendor/:id' element={<EditVendor />} />
    </Routes>
  );
}

export default App;
