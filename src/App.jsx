import './App.css';
import MainRunner from './mainpage/MainRunner.jsx';
import MainFind from './mainpage/MainFind.jsx';
import SignIn from './mainpage/SignIn.jsx';
import SignUp from './mainpage/SignUp.jsx';
import PostRunner from './mainpage/PostRunner.jsx';
import PostFind from './mainpage/PostFind.jsx';
import EditRunner from './formpage/EditRunner.jsx';
import EditFind from './formpage/EditFind.jsx';
import AboutUs from './mainpage/AboutUs.jsx';
import FormFind from './formpage/FormFind.jsx';
import FormRunner from './formpage/FormRunner.jsx';
import Connect from './mainpage/Connect.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="</HiewHub-Draft1/mainrunner" element={<MainRunner />} />
          <Route path="/HiewHub-Draft1/mainfind" element={<MainFind />} />

          <Route path="/HiewHub-Draft1/" element={<SignIn />} />
          <Route path="/HiewHub-Draft1/signup" element={<SignUp />} />

          <Route path="/HiewHub-Draft1/postrunner" element={<PostRunner />} />
          <Route path="/HiewHub-Draft1/postfind" element={<PostFind />} />

          <Route path="/HiewHub-Draft1/editrunner" element={<EditRunner />} />
          <Route path="/HiewHub-Draft1/editfind" element={<EditFind />} />

          <Route path="/HiewHub-Draft1/formfind" element={<FormFind />} />
          <Route path="/HiewHub-Draft1/formrunner" element={<FormRunner />} />

          <Route path="/HiewHub-Draft1/aboutus" element={<AboutUs />} />
          <Route path="/HiewHub-Draft1/connect" element={<Connect />} />
        </Routes>
      </Router>
  );
}
