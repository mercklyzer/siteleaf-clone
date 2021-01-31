import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'
import SimpleSection from './components/SimpleSection';
import {SimpleSectionProvider} from './components/SimpleSectionContext'
import ContentSection from './components/ContentSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <SimpleSection/>
      <ContentSection/>

    </div>
  );
}

export default App;
