import UserForm from "./components/UserForm/UserForm";
import FileUpload from "./components/FileUpload/FileUpload";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route , Routes} from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div className="body-bg">
      <Header />
      <Routes>
        <Route path='/' element={<UserForm />}/>
        <Route path='fileupload' element={<FileUpload />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
