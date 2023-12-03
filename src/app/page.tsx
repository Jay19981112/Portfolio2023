import SideMenubar from './components/sideMenubar';
import About from './components/about';
import Skill from './components/skill';
import Contact from './components/contact';
import Main from './components/Main';

export default function Home() {
  return (
    <div>
            <SideMenubar />
            <Main />
            <About />
            <Skill />
            <Contact />
    </div>
  )
}
