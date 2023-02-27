import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import { AuthProvider } from "../auth/AuthProvider";
import RequireAuth from "../auth/RequireAuth";

import { ProjectPage, DocumentationPage, BuildingPage, SmartHousePage, SupportPage } from "../pages/account";
import { HomePage, AdvantagesPage, BlogPage, CareerPage, ContactsPage, FaqPage, PolicyPage, ProjectsPage} from "../pages/main";

const MainPageLayout = lazy(() => import("../mainPageLayout/MainPageLayout"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const AccountLayout = lazy(() => import("../accountLayout/AccountLayout"));
const Page404 = lazy(() => import("../pages/page404/Page404"));
const SolutionViewerPage = lazy(() => import("../pages/account/solutionViewerPage/SolutionViewerPage"));
const PlatformInstructionsPage = lazy(() => import("../pages/platformInstructionsPage/PlatformInstructionsPage"));


function App() {

  return (
    <AuthProvider>
      <Suspense fallback={<Spinner/>}>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/instructions" element={<PlatformInstructionsPage />} />
            <Route exact path='*' element={<Page404 />}/>

            <Route element={<MainPageLayout/>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/advantages" element={<AdvantagesPage />} />
              <Route path="/questions" element={<FaqPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/policy" element={<PolicyPage />} />
            </Route>

            <Route element={<AccountLayout />}>
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