import { Route, Routes } from "react-router-dom"
import { About, Contact, ErrorPage, Footer, Navbar, Services } from "./component"




const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroSection/>
      <About/>
      <Banner/>
      <Contact/>
      <Services/> */}
      <Routes>
        <Route path="/" element={<><About /><Services /><Contact /></>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<ErrorPage/>}/>

        

      </Routes>

      <Footer/>
      
    </div>
  )
}

export default App
