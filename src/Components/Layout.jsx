import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from "./Scroll";
import UserContextProvider from "./UserContextProvider"; // Import your provider

function Layout() {
  return (
    <UserContextProvider>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}

export default Layout;
