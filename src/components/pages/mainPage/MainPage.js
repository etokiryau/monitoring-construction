import { Outlet } from "react-router-dom";

function MainPage() {
    return (
      <>
        <main>
            <Outlet/>
        </main>
      </>
    )
}

export default MainPage;