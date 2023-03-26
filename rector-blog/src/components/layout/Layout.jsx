import { Outlet } from "react-router-dom";
import { Navbar as Header, Footer } from "../../components";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
