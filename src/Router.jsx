import 'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css'
import Start from "./pages/Start"
import Abogados from "./pages/Abogados"
import Tramites from "./pages/Tramites"
import Layout from "./sections/Layout"
//src > Router.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {

  return (
    
    
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="abogados" element={<Abogados />}></Route>
          <Route path="tramites" element={<Tramites />}></Route>
        </Routes>
    </Layout>
      </BrowserRouter>
      );
};
export default Router;