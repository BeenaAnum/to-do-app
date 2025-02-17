<link rel="stylesheet" href="style.css" />
export default function Profile(){

    return(
      <div className="contianer">
          
                <header>
                    <h1>Beena Anam</h1>

                    <nav className="navbar">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#about">About</a></button>
                        <button><a href="#skills">My Skills</a></button>
                        <button><a href="#projects">My Projects</a></button>
                        <button><a href="#contact">Contact</a></button>

                    </nav>
                </header>
        
            <section id="home">
                <img src="./images/Profile-Picture.webp" alt="profile-pic"></img>
                <p>
                    <strong>Welcome to My Portfolio</strong><br></br>
                    Hello! I'm Beena Anam, a dedicated and passionate web developer with a focus on creating modern,
                    responsive, and user-friendly websites. My mission is to help businesses and individuals establish
                    a strong online presence. Take a look at my skills, projects, and experience, and feel free to get
                    in touch if you'd like to collaborate on a project.
                </p>
            </section>
          
    
                <section id="about">
                    <h2>About Me</h2>
                    <header> <nav className="navbar">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#about">About</a></button>
                        <button><a href="#skills">My Skills</a></button>
                        <button><a href="#projects">My Projects</a></button>
                        <button><a href="#contact">Contact</a></button>
                        <button><a href="https://vercel.live/link/static-resume-olive.vercel.app?via=project-dashboard-alias-list&p=1">Cv</a></button>
                    </nav> </header>
                    <img src="./images/Profile-Picture.webp"
                        alt="profile-pic" className="profile-pic"> </img>img

                    <p>
                        My name is Beena Anum,I am Web Developer Specializing in building responsive and functional websites.
                        I specialize in front-end technologies such as HTML, CSS, JavaScript, TypeScript,
                        and have a strong interest in UX/UI design. I'm always eager to learn new technologies
                        and improve my skills to stay up-to-date with industry trends.
                        you can find me via email beenaanum@gmail.com and other at LinkedIn.
                    </p>
                </section>
           
                <section id="skills">
                    <h2>My Skills</h2>
                    <header> <nav className="navbar">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#about">About</a></button>
                        <button><a href="#skills">My Skills</a></button>
                        <button><a href="#projects">My Projects</a></button>
                        <button><a href="#contact">Contact</a></button>
                    </nav> </header>
                    <ul> <br></br>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                    </ul>
                </section>
    
                <section id="projects">
                    <h2>My Projects</h2>
                    <header> <nav className="navbar">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#about">About</a></button>
                        <button><a href="#skills">My Skills</a></button>
                        <button><a href="#projects">My Projects</a></button>
                        <button><a href="#contact">Contact</a></button>
                    </nav> </header>

                    <div className="project">
                        <h3>Static Resume</h3>
                        <a href="https://static-resume-olive.vercel.app/"><img src="./images/download(1).png" alt="mileston1&2"></img></a>
                        <h3>Milestone 1 & 2</h3>
                    </div>

                    <div className="project">
                        <h3>Dynmic Resume</h3>
                        <a href="https://dynamic-resume-self.vercel.app/"><img src="./images/download (2).png" alt="mileston3"></img></a>
                        <h3>Milestone 3</h3>
                    </div>

                    <div className="project">
                        <h3>Editable Resume</h3>
                        <a href="https://4th-milestone-editable-resume.vercel.app/"><img src="./images/download (3).png" alt="mileston4"></img></a>
                        <h3>Milestone 4</h3>
                    </div>
                    <div className="project">
                        <h3>Editable Resume</h3>
                        <a href="https://5th-milestone-shareable-resume-five.vercel.app/"><img src="./images/download(4).png" alt="mileston5"></img></a>
                        <h3>Milestone 5</h3>
                    </div>
                    <div className="project">
                        <h3>Next.js Dynamic-Country-App</h3>
                        <a href="https://next-js-dynamic-country-qnzpke232-beena-anums-projects.vercel.app"><img src="./images/country-app.png" alt="mileston6"></img></a>
                        <h3> Milestone 6</h3>
                    </div>
                </section>
           
                <section id="contact">

                    <header> <nav className="navbar">
                        <button><a href="#home">Home</a></button>
                        <button><a href="#about">About</a></button>
                        <button><a href="#skills">My Skills</a></button>
                        <button><a href="#projects">My Projects</a></button>
                        <button><a href="#contact">Contact</a></button>
                    </nav> </header>
                    <h2>Contact Me</h2>

                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required></input><br></br>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required></input><br></br>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows={5} required></textarea><br></br>

                        <button id="btn" type="submit">Send</button>
                    </form>
                </section>
      
                <footer>
                    <p> &copy; 2024 My Portfolio. All Right Reserved.
                        <a href="https://beenaanum@gmail.com" target="_blank">Gmail</a>
                        <a href="https://www.linkedin.com/in/beena-anum-2b2963254" target="_blank">LinkedIn</a></p>
                </footer>
            
    </div>
    
 )
}
