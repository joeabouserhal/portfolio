import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Technologies from './components/technologies/Technologies'
import Projects from './components/projects/Projects'

function App() {

  return (
    <div className="App">
      <Header/> 
      <Info/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
