import collegeLogo from "../../assets/jjc-blue-logo.png";
import gsaLogo from "../../assets/gsa-logo.svg";
import codePathLogo from "../../assets/codepath-logo.webp";
import rfcunyLogo from "../../assets/rfcuny-logo.png";

export const Experience = () => {
  return (
    <div className="about-page">
      <h1>Experience</h1>
      <h1> Education</h1>
      <div className="about-img-container">
        <img className="img" src={collegeLogo} alt="JJC Logo" />
      </div>
      <br />
      <h1>Bachelor of Science in Computer Science and Information Security,</h1>
      <i>John Jay College of Criminal Justice, City University of New York</i>
      <ul>
        Core Focus Areas:
        <li>Digital Forensics & Cybersecurity</li>
        <li>Cryptography</li>
        <li>Object-Oriented Programming</li>
        <li>Data Structures & Algorithms</li>
        <li>Software Engineering</li>
      </ul>

      <br />
      <br />

      <h1>Professional Experience</h1>
      <div className="about-img-container" style={{ width: "400px" }}>
        <img className="img" src={rfcunyLogo} alt="JJC Logo" />
      </div>
      <h1>Department of Education | Research Foundation IT Intern</h1>
      <i> Oct 2022 – Aug 2024</i>
      <ul>
        Led technical initiatives focusing on infrastructure enhancement and
        user support:
        <li>
          Streamlined software deployment processes and hardware configurations
        </li>
        <li>
          Provided comprehensive technical support, improving department
          workflow efficiency
        </li>
        <li>Contributed to database management and optimization</li>
        <li>Assisted in maintaining and securing network infrastructure</li>
      </ul>

      <br />
      <br />

      <div className="about-img-container">
        <img className="img" src={gsaLogo} alt="JJC Logo" />
      </div>
      <br />
      <h1>Federal AI Hackathon | Award-Winning Developer</h1>
      <i>Aug 2024</i>
      <h2>Achievements: Second Place Overall & People's Choice Award Winner</h2>
      <ul>
        <li>
          Developed an innovative AI-powered solution for federal website
          optimization using OpenAI's API and Python
        </li>
        <li>
          Created an intelligent assistant that generates concise summaries of
          USDA's content hub articles
        </li>
        <li>
          Successfully balanced AI integration with human-centric design
          principles
        </li>
        <li>
          Collaborated in a team of two to deliver a working prototype within
          hackathon constraints
        </li>
      </ul>

      <br />
      <br />

      <div className="about-img-container">
        <img className="img" src={codePathLogo} alt="JJC Logo" />
      </div>
      <h1>CodePath | Technical Fellow</h1>
      <i>2020</i>
      <ul>
        Mobile Development Focus:
        <li>Mastered iOS development using Swift and XCode</li>
        <li>Built a full-stack social media application integrating:</li>
        <ol>
          <li>SwiftUI for modern, responsive interfaces</li>
          <li>CocoaPods for dependency management</li>
          <li>Back4App for backend infrastructure</li>
        </ol>
        <li>
          Completed multiple hands-on projects emphasizing mobile development
          best practices
        </li>
      </ul>
      {/* <h1>Computer Science and Information Security, Bachelor of Science</h1>
      <div className="about-img-container">
        <img className="img" src={collegeLogo} alt="JJC Logo" />
      </div>
      <p>
        My degree consists of Digital Forensics, Cryptopgraphy, Object-Oriented
        Programming, Data Structures & Algorithms and Software Engineering.
      </p>
      <h1>Federal AI Hackathon</h1>
      <div className="about-img-container">
        <img className="img" src={gsaLogo} alt="JJC Logo" />
      </div>
      <p>
        At the{" "}
        <a
          href="https://www.gsa.gov/blog/2024/08/01/gsa-aithemed-hackathon-reimagines-user-experience-for-federal-websites"
          target="_blank"
          rel="noreferrer"
        >
          Federal AI Hackathon
        </a>
        , my partner and I designed a{" "}
        <a
          href="https://github.com/caesarc6/Easy-Read-Hackathon-Submission"
          target="_blank"
          rel="noreferrer"
        >
          program
        </a>{" "}
        that can analyze and optimize federal websites for AI while enhancing
        human usability. With the use of OpenAI's API and Python, we won the
        "People's Choice Award" and Second Place overall for designing and
        building an AI-powered assistant returning easy-to-understand article
        summaries from USDA’s content hub.
      </p>
      <h1>Research Foundation IT Internship @ Department of Education</h1>
      <div className="about-img-container" style={{ width: "400px" }}>
        <img className="img" src={rfcunyLogo} alt="JJC Logo" />
      </div>
      <p>
        As a IT Intern at the Department of Education, I was responsible for the
        following:
      </p>
      <ul>
        <li>
          Assisted in the installation and configuration of software and
          hardware
        </li>
        <li>Provided technical support to users</li>
        <li>
          Assisted in the development and maintenance of the department's
          database
        </li>
        <li>
          Assisted in the development and maintenance of the department's
          network
        </li>
      </ul>

      <h1>CodePath Fellow</h1>
      <div className="about-img-container">
        <img className="img" src={codePathLogo} alt="JJC Logo" />
      </div>
      <p>
        At CodePath, I learned how to build multiple projects using XCode and
        Swift. I also learned how to build a social media app with a databse
        using SwiftUI, CocoaPods and Back4App.
      </p> */}
    </div>
  );
};
