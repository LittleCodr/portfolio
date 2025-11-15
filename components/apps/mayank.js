// Repo refreshed on 2025-11-15
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
            <div className="w-20 md:w-28 my-4 bg-white rounded-full overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src="https://avatars.githubusercontent.com/u/121036421" 
                    alt="Mayank Agrawal's Profile" 
                />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hello, I'm <span className="font-bold">Mayank Agrawal</span></div>
                <div className="font-normal">
                    <span className="text-ub-orange font-bold">iOS & Android Developer</span> | 
                    <span className="text-blue-400"> Full Stack Engineer</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">Microsoft Learn Ambassador</div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    I'm a <span className="font-medium">Mobile & Full Stack Developer</span> with expertise in building cross-platform applications. 
                    Passionate about creating efficient and user-friendly software solutions.
                </li>
                <li className="mt-3 list-building">
                    I specialize in iOS (Swift) & Android (Java) Development, with strong skills in React and Node.js for full-stack applications.
                </li>
                <li className="mt-3 list-time">
                    As a Microsoft Learn Ambassador, I enjoy sharing knowledge and contributing to the developer community.
                </li>
                <li className="mt-3 list-star">
                    I'm particularly interested in building scalable and performant applications with clean architecture and best practices.
                </li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Education</div>

            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">GLA University</div>
                        <div className="text-sm md:text-base text-gray-300">Bachelor's of Technology</div>
                        <div className="text-sm md:text-base text-gray-300">Artificial Intelligence & Machine Learning</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">August 2024 - September 2028</div>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">Babu Daudayal Saraswati Vidhya Mandir</div>
                        <div className="text-sm md:text-base text-gray-300">All India Senior School Certificate Examination</div>
                        <div className="text-sm md:text-base text-gray-300">Class 12th (Science)</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">April 2023 - February 2024</div>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">Shriji Baba Saraswati Vidya Mandir</div>
                        <div className="text-sm md:text-base text-gray-300">All India Senior Secondary Examination</div>
                        <div className="text-sm md:text-base text-gray-300">Class 10th</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">April 2017 - March 2023</div>
                </div>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Technical Skills</div>
            
            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Mobile Development</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">iOS (Swift)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Android (Java/Kotlin)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">React Native</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Flutter</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">SwiftUI</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Core Data</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Firebase</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Frontend Development</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">React.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">JavaScript (ES6+)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">HTML5 & CSS3</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Redux</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Backend & Databases</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Express.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">RESTful APIs</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">GraphQL</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Tools & Technologies</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Git & GitHub</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Docker</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">CI/CD</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Postman</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">VS Code</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Xcode</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Android Studio</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Soft Skills</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Problem Solving</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Team Collaboration</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Agile Development</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Technical Writing</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Public Speaking</span>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Featured Projects</div>
            <p className="text-gray-400 text-sm mt-1 mb-4">More projects check : <a href="https://mayank1406.pro/projects" target="_blank" rel="noopener noreferrer" className="text-ub-orange hover:underline">https://mayank1406.pro/projects</a></p>

            <div className="mt-4 space-y-6">
                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">GestureVoice-Automation</div>
                            <div className="text-sm text-gray-400">🚀 Control your PC using hand gestures, face movements, and voice commands!</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        Move your cursor with hand tracking, adjust brightness with gestures, and control volume by nodding.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Hand Tracking</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Computer Vision</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Voice Commands</span>
                    </div>
                </div>

                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">AI Travel Itinerary Generator</div>
                            <div className="text-sm text-gray-400">Tech Stack: React, TypeScript, Google's Gemini AI</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        A modern, AI-powered travel itinerary generator that creates personalized trip plans using Google's Gemini AI. Built with React, TypeScript, and featuring a unique Neobrutalism design aesthetic.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">React</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">TypeScript</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Gemini AI</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Neobrutalism</span>
                    </div>
                </div>

                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">AI Article Generator</div>
                            <div className="text-sm text-gray-400">Tech Stack: GPT-4, Puter.ai SDK, JSON/HTML Processing</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        AI Article Generation works by: Collecting the keyword, Sending a prompt to GPT-4 through Puter.ai's SDK, Strictly requiring valid JSON/HTML output from the model, Parsing and displaying the output with custom formatting.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">GPT-4</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Puter.ai SDK</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">JSON Processing</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">HTML Parsing</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Resume() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold mb-4">My Resume</div>
            
            <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Mayank Agrawal</h2>
                            <p className="text-gray-300">iOS & Android Developer | Full Stack Engineer</p>
                        </div>
                        <a 
                            href="https://mayank1406.pro/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-ub-orange text-white rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Full Resume (PDF)
                        </a>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Professional Experience</h3>
                        
                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">iOS Developer</h4>
                                    <p className="text-gray-300">Tech Company • Full-time</p>
                                </div>
                                <span className="text-gray-400 text-sm">2022 - Present</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Developed and maintained iOS applications using Swift and SwiftUI</li>
                                <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
                                <li>Implemented clean architecture and best practices for mobile development</li>
                                <li>Optimized app performance and reduced crash rates by 40%</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Full Stack Developer</h4>
                                    <p className="text-gray-300">Startup • Internship</p>
                                </div>
                                <span className="text-gray-400 text-sm">2021 - 2022</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Built responsive web applications using React, Node.js, and MongoDB</li>
                                <li>Implemented RESTful APIs and integrated third-party services</li>
                                <li>Participated in code reviews and team meetings</li>
                                <li>Contributed to the development of new features and bug fixes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Education</h3>
                        <div className="mb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">GLA University, Mathura</h4>
                                    <p className="text-gray-300">Bachelor of Technology in Computer Science & Engineering</p>
                                </div>
                                <span className="text-gray-400 text-sm">2020 - 2024</span>
                            </div>
                            <p className="mt-1 text-gray-300 text-sm">CGPA: [Your CGPA] / 10.0</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Mobile Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Swift</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">SwiftUI</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React Native</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Java</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Kotlin</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Web Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Next.js</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Express</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
