import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Technologies from './components/technologies/Technologies'
import Projects from './components/projects/Projects'
import ContactMe from './components/contact-me/ContactMe'
import Chevron from './components/shared/Chevron'

function App() {

  let scrollToContactMe = () => {
    const elementToView = document.getElementById("contactMe");
    elementToView.scrollIntoView();
  }
  
  let scrollToTechnologies = () => {
    const elementToView = document.getElementById("technologies");
    elementToView.scrollIntoView();
  }
  
  let scrollToProjects = () => {
    const elementToView = document.getElementById("projects");
    elementToView.scrollIntoView();
  }

  return (
    <div className="App">
      <Header/> 
      <Info/>
      <Technologies/>
      <Chevron func={() => scrollToProjects()}/>
      <Projects/>
      <Chevron func={() => scrollToContactMe()}/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}


export default App
