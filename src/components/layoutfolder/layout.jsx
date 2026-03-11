import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;