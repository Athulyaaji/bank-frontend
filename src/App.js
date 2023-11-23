import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Add from './Components/Add';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
