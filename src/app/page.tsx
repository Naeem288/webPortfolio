import About from "./Componants/About"
import Contact from "./Componants/Contact"
import Hero from "./Componants/Hero"
import Projects from "./Componants/Projects"
import Skills from "./Componants/Skills"
export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
   </div>
  )
}
