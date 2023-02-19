import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import { AuthContext } from "../auth/AuthContext";
import AuthProvider from "../auth/AuthProvider";
import RequireAuth from "../auth/RequireAuth";

import ProjectPage from "../pages/ProjectPage";
import DocumentationPage from "../pages/DocumentationPage";
// import BuildingPage from "../pages/buildingPage/BuildingPage";
import SmartHousePage from "../pages/SmartHousePage";
import SupportPage from "../pages/SupportPage";

import HomePage from "../pages/homePage/HomePage";

const BuildingPage = lazy(() => import("../pages/buildingPage/BuildingPage"));
const MainPage = lazy(() => import("../pages/mainPage/MainPage"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const AccountPage = lazy(() => import("../pages/accountPage/AccountPage"));
const Page404 = lazy(() => import("../pages/page404/Page404"));
const SolutionViewerPage = lazy(() => import("../pages/solutionViewerPage/SolutionViewerPage"));
const PlatformInstructionsPage = lazy(() => import("../pages/platformInstructionsPage/PlatformInstructionsPage"));


function App() {

  return (
    <AuthProvider AuthContext={AuthContext}>
      <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/instructions" element={<PlatformInstructionsPage />} />
            <Route exact path='*' element={<Page404 />}/>

            <Route element={<MainPage/>}>
              <Route path="/" element={<HomePage />} />
            </Route>

            <Route element={<AccountPage />}>
              <Route exact path='/project' element={
                <RequireAuth >
                  <ProjectPage />
                </RequireAuth>
              }/>

              <Route exact path='/documentation' element={
                <RequireAuth>
                  <DocumentationPage />
                </RequireAuth>
              }/>

              <Route exact path='/building' element={
                <RequireAuth>
                  <BuildingPage />
                </RequireAuth>
              }/>

              <Route exact path='/smarthouse' element={
                <RequireAuth>
                  <SmartHousePage />
                </RequireAuth>
              }/>

              <Route exact path='/support' element={
                <RequireAuth>
                  <SupportPage />
                </RequireAuth>
              }/>
            </Route>

            <Route exact path='/documentation/:solution' element={
                <RequireAuth>
                  <SolutionViewerPage />
                </RequireAuth>
            }/>
        </Routes>
      </Suspense>  
    </AuthProvider>
  );
}

export default App;