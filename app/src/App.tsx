import React from 'react';
import IndexComponent from "./components/index/index";
import LoginComponent from "./components/login";
import {Routes, Route, useNavigate} from 'react-router-dom'
import BookDetail from "./pages/bookDetail";
// import ' ./App.css';
function App() {
    // const navigate=useNavigate()
    // if(!localStorage.getItem('token')){
    //     navigate('/login')
    // }
  return (
    <div className="App">
        {/*<IndexComponent/>*/}
       <Routes>
           <Route path='/' element={<IndexComponent />} />
           <Route path='/login' element={<LoginComponent />} />
           <Route path='/bookDetail/:id' element={<BookDetail />} />
           {/* 当没有其他路由与 URL 匹配时，匹配 path='*'的路由 */}
           {/*<Route path='*' element={<LoginComponent />} />*/}
       </Routes>
    </div>
  );
}

export default App;
