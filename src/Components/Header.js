import React,{useState} from 'react'

const Header = () => {
    const [isopen, setIsOpen] = useState(false);

    return (
        <header>   	
            <div className="row">
                <div className="top-bar">
                    <a className="menu-toggle" onClick={() => {!isopen ? setIsOpen(true) : setIsOpen(false)}} href="#"><span>Menu</span></a>
                    <div className="logo">
                        <a href="#">Arian</a>
                    </div>		      
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation" style={isopen ? {display:'block'} : {display:'none'} }>
                            <li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
                            <li><a className="smoothscroll"  href="#about" title="">About</a></li>
                            <li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
                            <li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
                            <li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>	
                            <li><a href="styles.html" title="">Style Demo</a></li>				
                        </ul>
                    </nav>    		
                </div>
                
            </div>		
        </header>
    )
}

export default Header
