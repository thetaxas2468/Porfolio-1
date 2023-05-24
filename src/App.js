import './App.css';
import { NavigationBar } from './components/NavigationBar';
import {Banner} from "./components/Banner"
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
