import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Here */}
      {/* <Navbar /> */}
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;