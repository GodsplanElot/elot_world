import { useEffect, useState } from "react"
import { motion } from "motion/react"

function Navigation(){
    return <ul className="nav-ul">
            <li className="nav-li">
                <a className="nav-link" href="#home" onClick={() => window.dispatchEvent(new Event("close-mobile-nav"))}>Home</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#about" onClick={() => window.dispatchEvent(new Event("close-mobile-nav"))}>About</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#work" onClick={() => window.dispatchEvent(new Event("close-mobile-nav"))}>Work</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact" onClick={() => window.dispatchEvent(new Event("close-mobile-nav"))}>Contact</a>
            </li>
        </ul>
}

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
      const closeMenu = () => setisOpen(false);
      window.addEventListener("close-mobile-nav", closeMenu);
      return () => window.removeEventListener("close-mobile-nav", closeMenu);
    }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full border-b border-white/5 backdrop-blur-lg bg-primary/70">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
            <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white" >ELOT</a>
            <button
              type="button"
              onClick={ () => setisOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
                <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
            </button>
            <nav className="hidden sm:flex"> <Navigation /> </nav>
        </div>
      </div>
      {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden" initial={{ opacity:0, x: -10 }}
      animate={{ opacity:1, x: 0 }}
      style={{ maxHeight: "100vh" }}
      transition={{duration: 1 }}
      >
        <nav className="pb-5">
            <Navigation />
        </nav>
      </motion.div>
    )}
    </div>
  )
}

export default Navbar
