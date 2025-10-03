import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Research from "./components/Research";
import ScrollToTopButton from "./components/ScrollToTop";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className="App bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <Navbar />
      <Profile />
      <About />
      <Career />
      <Skills />
      <Research />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
