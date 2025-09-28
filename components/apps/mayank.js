import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutMayank extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        if (process.env.NEXT_PUBLIC_TRACKING_ID) {
            ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });
        }

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about mayank" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="mayank's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        )
    }
}

export default AboutMayank;

export function displayAboutMayank() {
    return <AboutMayank />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Mayank's Profile" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Mayank</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Software Developer</span> with experience in building web applications. I'm passionate about creating efficient and user-friendly software solutions.</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I'm not coding, I like to spend my time exploring new technologies, contributing to open source, and learning new skills.</li>
                <li className=" mt-3 list-star"> I'm particularly interested in Full Stack Development and Cloud Technologies!</li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Education</div>
            <div className="mt-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">Your University Name</div>
                        <div className="text-sm md:text-base text-gray-300">Degree in Computer Science</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">Year - Year</div>
                </div>
                <div className="mt-2 text-sm md:text-base">
                    <p>Relevant coursework: Data Structures, Algorithms, Web Development, etc.</p>
                </div>
            </div>
            {/* Add more education entries as needed */}
        </div>
    )
}

function Skills() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Skills</div>
            <div className="mt-4">
                <div className="text-lg md:text-xl font-semibold mb-2">Programming Languages</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Java</span>
                    {/* Add more skills as needed */}
                </div>
                
                <div className="text-lg md:text-xl font-semibold mt-4 mb-2">Frameworks & Libraries</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Express</span>
                    {/* Add more frameworks as needed */}
                </div>
                
                <div className="text-lg md:text-xl font-semibold mt-4 mb-2">Tools & Technologies</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Git</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Docker</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">AWS</span>
                    {/* Add more tools as needed */}
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Projects</div>
            <div className="mt-4 space-y-6">
                <div className="border border-gray-700 rounded p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">Project Name 1</div>
                            <div className="text-sm text-gray-400">Tech Stack: React, Node.js, MongoDB</div>
                        </div>
                        <a href="#" className="text-ub-orange hover:underline text-sm">View Project</a>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        A brief description of the project and its key features. What problem does it solve? What technologies did you use?
                    </p>
                </div>
                
                <div className="border border-gray-700 rounded p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">Project Name 2</div>
                            <div className="text-sm text-gray-400">Tech Stack: Python, Flask, PostgreSQL</div>
                        </div>
                        <a href="#" className="text-ub-orange hover:underline text-sm">View Project</a>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        Another project description highlighting your skills and contributions.
                    </p>
                </div>
                
                {/* Add more projects as needed */}
            </div>
        </div>
    )
}

function Resume() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-ub-orange text-white rounded hover:bg-opacity-90 transition-colors">
                Download Resume
            </a>
        </div>
    )
}
