import { createContext, useContext } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import AuthProvider from "../auth/AuthProvider";
import RequireAuth from "../auth/RequireAuth";

import ProjectPage from "../pages/ProjectPage";
import DocumentationPage from "../pages/DocumentationPage";
import BuildingPage from "../pages/buildingPage/BuildingPage";
import SmartHousePage from "../pages/SmartHousePage";
import SupportPage from "../pages/SupportPage";

const MainPage = lazy(() => import("../pages/mainPage/MainPage"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const AppPage = lazy(() => import("../pages/appPage/AppPage"));
const Page404 = lazy(() => import("../pages/page404/Page404"));


function App() {

  let AuthContext = createContext(null);

  function useAuth() {
    return useContext(AuthContext);
  } 

  return (
    <AuthProvider AuthContext={AuthContext}>
      <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage useAuth={useAuth}/>} />
            <Route exact path='*' element={<Page404 />}/>
            <Route element={<AppPage useAuth={useAuth}/>}>

              <Route exact path='/project' element={
                <RequireAuth useAuth={useAuth}>
                  <ProjectPage AuthContext={AuthContext}/>
                </RequireAuth>
              }/>

              <Route exact path='/documentation' element={
                <RequireAuth useAuth={useAuth}>
                  <DocumentationPage />
                </RequireAuth>
              }/>

              <Route exact path='/building' element={
                <RequireAuth useAuth={useAuth}>
                  <BuildingPage />
                </RequireAuth>
              }/>

              <Route exact path='/smarthouse' element={
                <RequireAuth useAuth={useAuth}>
                  <SmartHousePage />
                </RequireAuth>
              }/>

              <Route exact path='/support' element={
                <RequireAuth useAuth={useAuth}>
                  <SupportPage />
                </RequireAuth>
              }/>

            </Route>
        </Routes>
      </Suspense>  
    </AuthProvider>
  );
}

export default App;
