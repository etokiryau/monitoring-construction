import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import { AuthContext } from "../auth/AuthContext";
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

  return (
    <AuthProvider AuthContext={AuthContext}>
      <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route exact path='*' element={<Page404 />}/>
            <Route element={<AppPage />}>

              <Route exact path='/project' element={
                <RequireAuth >
                  <ProjectPage />
                </RequireAuth>
              }/>

              <Route exact path='/documentation' element={
                <RequireAuth >
                  <DocumentationPage />
                </RequireAuth>
              }/>

              <Route exact path='/building' element={
                <RequireAuth >
                  <BuildingPage />
                </RequireAuth>
              }/>

              <Route exact path='/smarthouse' element={
                <RequireAuth >
                  <SmartHousePage />
                </RequireAuth>
              }/>

              <Route exact path='/support' element={
                <RequireAuth >
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
