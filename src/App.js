import './App.css';
import { ShowStudent } from './ShowStudent/ShowStudent';
import { Route, Routes } from 'react-router-dom';
import { DeleteStudent } from './ShowStudent/DeleteStudent';
import { Nav } from './Components/Nav';
import { Footer } from './Components/Footer';
import { AddStudent } from './ShowStudent/AddStudent';
import { Desc } from './Components/Desc';
import { SearchStudent } from './ShowStudent/SearchStudent';
import { UpdateStudent } from './ShowStudent/UpdateStudent';
import { Contact } from './Components/Contact';

function App() {

  return (
    <div >
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Desc />}></Route>
        
        <Route path='/student/showall' element={<ShowStudent />}></Route>
        <Route path='/students/delete/:id' element={<DeleteStudent />}></Route>
        <Route path='/student/search/:id' element={<SearchStudent/>}></Route>
        <Route path='/student/update/:id' element={<UpdateStudent/>}></Route>
        <Route path='/student/search/' element={<ShowStudent/>}></Route>
        <Route path='/student/contact/' element={<Contact/>}></Route>
        <Route path='/student/search/undefined' element={<ShowStudent/>}></Route>
        <Route path='/student/add' element={<AddStudent />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
