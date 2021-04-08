import React from 'react'

const Intro = () => {
    return (
        <section id="intro">   
            <div className="intro-overlay"></div>	
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <h5>Hello, World.</h5>
                        <h1>I'm Arian Berisha.</h1>
                        <p className="intro-position">
                            <span>Front-end Developer</span>
                        </p>
                        <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
                    </div>  
                </div>   		 		
            </div>
            <ul className="intro-social">        
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>      	
        </section> 
    )
}

export default Intro
