import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Page1 from "./components/Page1/Page1.jsx";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";

function App() {
  return (
    <div className="Main_block">
      <BrowserRouter>
        <div className="Main_controle_block">
        <div className='controle1'>
            <div className="controle_img1"></div>
            <p className="controle_text1">INFluentzilla</p>
            <div className="controle_names">
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
            </div>
            <Link to="/page1"><p className="controle_btn1">Посмотреть</p></Link>
          </div>
          <div className='controle1'>
            <div className="controle_img1"></div>
            <p className="controle_text1">INFluentzilla</p>
            <div className="controle_names">
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
            </div>
            <Link to="/page2"><p className="controle_btn1">Посмотреть</p></Link>
          </div>
          <div className='controle1'>
            <div className="controle_img1"></div>
            <p className="controle_text1">INFluentzilla</p>
            <div className="controle_names">
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
              <div className="controle_item">
                <div className="controle_img2"></div>
                <p className="controle_name1">Имя разработчика</p>
              </div>
            </div>
            <Link to="/page3"><p className="controle_btn1">Посмотреть</p></Link>
          </div>
        </div>
        
        <Routes>
          <Route path="/page1" element={<Page1/>}></Route>
          <Route path="/page2" element={<Page2/>}></Route>
          <Route path="/page3" element={<Page3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;