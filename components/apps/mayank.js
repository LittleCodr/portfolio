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
                    <span className="text-ub-orange font-bold">Founding Developer</span> | 
                    <span className="text-blue-400"> CS Undergraduate</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">Mobile, AI/ML, and cloud-focused engineer</div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    Founding Developer and <span className="font-medium">Computer Science undergraduate</span> shipping production mobile apps end-to-end—from architecture to deployment.
                </li>
                <li className="mt-3 list-building">
                    Integrate <span className="font-medium">LLM-based features</span> into real-world products and build scalable full-stack systems.
                </li>
                <li className="mt-3 list-time">
                    Comfortable owning the stack: Flutter, native iOS/Android, cloud (Azure, Firebase, GCP), CI/CD, and analytics.
                </li>
                <li className="mt-3 list-star">
                    Enjoy mentoring and collaborating—previously a Microsoft Learn Student Ambassador delivering workshops and guidance.
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
                        <div className="text-sm md:text-base text-gray-300">Bachelor of Technology (B.Tech) – Computer Science</div>
                        <div className="text-sm md:text-base text-gray-300">Artificial Intelligence & Machine Learning</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">August 2024 - September 2028 (Expected)</div>
                </div>
            </div>

            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">Babu Daudayal Saraswati Vidhya Mandir</div>
                        <div className="text-sm md:text-base text-gray-300">Class 12th – Science Stream</div>
                        <div className="text-sm md:text-base text-gray-300">All India Senior School Certificate Examination</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">Completed 2024</div>
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
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Languages</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Dart</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">SQL</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">C++</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Mobile Development</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Flutter</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">iOS (Swift)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Android (Kotlin/Java)</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">AI / ML</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Large Language Models (LLMs)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">NLP</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Supervised Learning</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Prompt Engineering</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Cloud & Tools</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Microsoft Azure</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Firebase</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Google Cloud Platform</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Git</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">GitHub</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">CI/CD</span>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Key Projects</div>
            <p className="text-gray-400 text-sm mt-1 mb-4">More work on <a href="https://mayank1406.pro/projects" target="_blank" rel="noopener noreferrer" className="text-ub-orange hover:underline">mayank1406.pro/projects</a></p>

            <div className="mt-4 space-y-6">
                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">Financial Options Strategies Tool</div>
                            <div className="text-sm text-gray-400">Python • Pandas • NumPy</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        CLI tool to backtest options trading strategies on historical market data with statistical analysis for risk and performance comparisons.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Backtesting</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Data Analysis</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Automation</span>
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
                            <p className="text-gray-300">Founding Developer | Mobile & AI Engineer</p>
                        </div>
                        <a 
                            href="/files/resume.pdf" 
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
                                    <h4 className="text-lg font-semibold">Founding Developer</h4>
                                    <p className="text-gray-300">Rentits • Mathura, India</p>
                                </div>
                                <span className="text-gray-400 text-sm">Nov 2025 – Present</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Designed and implemented the end-to-end architecture of a sharing-economy platform from MVP to production.</li>
                                <li>Built AI-driven recommendation features to improve discovery and user engagement.</li>
                                <li>Developed and maintained cross-platform mobile apps in Flutter with a focus on performance and scalability.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Freelance Mobile Engineer (Android & iOS)</h4>
                                    <p className="text-gray-300">Remote</p>
                                </div>
                                <span className="text-gray-400 text-sm">Jun 2020 – Nov 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Built and shipped native iOS and Android applications across diverse device constraints and OS versions.</li>
                                <li>Integrated REST APIs, authentication flows, and backend services while meeting store guidelines.</li>
                                <li>Implemented offline-first architectures, background processing, and data caching for reliability.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Microsoft Learn Student Ambassador (MLSA)</h4>
                                    <p className="text-gray-300">Microsoft • Remote</p>
                                </div>
                                <span className="text-gray-400 text-sm">Apr 2025 – Nov 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Conducted technical workshops on Azure fundamentals and cloud-native development.</li>
                                <li>Mentored students on deployment, system design basics, and software engineering best practices.</li>
                            </ul>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Open Source Contributor</h4>
                                    <p className="text-gray-300">Hacktoberfest • Remote</p>
                                </div>
                                <span className="text-gray-400 text-sm">Oct 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Contributed bug fixes and performance improvements to open-source repositories.</li>
                                <li>Collaborated with maintainers through reviews and pull requests in distributed teams.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Education</h3>
                        <div className="mb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">GLA University, Mathura</h4>
                                    <p className="text-gray-300">Bachelor of Technology (B.Tech) – Computer Science</p>
                                </div>
                                <span className="text-gray-400 text-sm">Aug 2024 – Sep 2028 (Expected)</span>
                            </div>
                            <p className="mt-1 text-gray-300 text-sm">Focus: Artificial Intelligence & Machine Learning</p>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Babu Daudayal Saraswati Vidhya Mandir, Mathura</h4>
                                    <p className="text-gray-300">Class 12th – Science Stream</p>
                                </div>
                                <span className="text-gray-400 text-sm">Completed 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Dart</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">JavaScript</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">SQL</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">C++</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Mobile Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Flutter</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">iOS (Swift)</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Android (Kotlin/Java)</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">AI / ML</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Large Language Models (LLMs)</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">NLP</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Supervised Learning</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Prompt Engineering</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Cloud & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Microsoft Azure</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Firebase</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Google Cloud Platform</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Git</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">GitHub</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">CI/CD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Certifications</h3>
                        <ul className="text-gray-300 list-disc list-inside space-y-2">
                            <li>Microsoft Certified: Azure Fundamentals</li>
                            <li>Supervised Machine Learning (Regression and Classification)</li>
                            <li>Google Cloud: The Arcade Certification Zone (Oct 2024)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
