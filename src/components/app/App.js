import { useState} from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './app.scss';

import Sidebar from '../sidebar/Sidebar';
import LoginPage from '../pages/loginPage/LoginPage';
const Project = lazy(() => import("../pages/Project"));
const Documentation = lazy(() => import("../pages/Documentation"));
const Building = lazy(() => import("../pages/building/Building"));
const SmartHouse = lazy(() => import("../pages/SmartHouse"));
const SupportPage = lazy(() => import("../pages/SupportPage"));
const Page404 = lazy(() => import("../pages/page404/Page404"));


function App() {
  const [isLoggedin, setLoggedin] = useState(false);

  const onChangeLoginStatus = () => {
    setLoggedin(!isLoggedin);
  }

  return (
    <Router>
      {isLoggedin ? 
        <div className="App">
          <Sidebar/>
          <main>
            <Suspense>
              <Routes>
                <Route exact path='/' element={<Project onChangeLoginStatus={onChangeLoginStatus}/>}/>
                <Route exact path='/documentation' element={<Documentation/>}/>
                <Route exact path='/building' element={<Building/>}/>
                <Route exact path='/smarthouse' element={<SmartHouse/>}/>
                <Route exact path='/support' element={<SupportPage/>}/>
                <Route path='*' element={<Page404/>}/>
              </Routes>
            </Suspense>
          </main>
        </div>
      : <LoginPage onChangeLoginStatus={onChangeLoginStatus}/>}
    </Router>
  );
}

export default App;
