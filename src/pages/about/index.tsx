import city from "../../assets/city.jpg";

export const About = () => {
  return (
    <div className="about-page">
      <div className="title">
        <h1 className="text-2xl font-medium">About Me</h1>{" "}
        <div className="about-img-container">
          <img className="img" src={city} alt="JJC Logo" />
        </div>
      </div>
      <h1 className="text-2xl">Who I Am</h1>
      <p className="text-base font-light leading-7">
        As a recent graduate with a BS in Computer Science and Information
        Security, I blend software development expertise with a strong
        foundation in cybersecurity principles. I thrive on creating intuitive,
        secure applications that make a real difference in users' lives.
      </p>
      <h1 className="text-2xl">What Drives Me</h1>
      <p className="text-base font-light leading-7">
        My fascination with technology goes beyond just writing code. I'm
        constantly exploring new ways to solve real-world problems through
        innovative solutions. Take my home server project, for example: Using a
        Raspberry Pi, I built a seamless note-synchronization system that kept
        my academic materials in sync across all my devices. This project not
        only solved a practical need but also deepened my command-line expertise
        and introduced me to the power of Emacs for efficient note-taking.
      </p>

      <h1 className="text-lg font-light">Technical Toolkit:</h1>
      <p className="text-base font-light leading-7">
        <ul>
          <li>Frontend: React, TailwindCSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Infrastructure: Linux, Raspberry Pi</li>
          <li>Tools: Git, Terminal, Emacs</li>
        </ul>
      </p>
      <h1 className="text-2xl">What I'm Looking For</h1>
      <p className="text-base font-light leading-7">
        I'm currently seeking a full-time Software Engineering role where I can
        leverage my full-stack development skills and security background. I'm
        particularly excited about opportunities that will challenge me to grow
        while contributing to meaningful projects.
      </p>
      <h1 className="text-2xl">Let's Connect!</h1>
      <p className="text-base font-light leading-7">
        I'm always eager to connect with fellow tech enthusiasts and potential
        collaborators. Find me on{" "}
        <a
          href="https://www.linkedin.com/in/caesar001/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          LinkedIn
        </a>{" "}
        to start a conversation about technology, development, or potential
        opportunities.
      </p>

      {/* <p>
        My name is Caesar and I am recent grad with a Bachelor's of Science
        Degree in Computer Science and Information Security. I have experience
        in web development, software engineering, and cybersecurity. I am
        passionate about creating software that is user-friendly and accessible
        to everyone. I am a quick learner and I am always looking for ways to
        improve my skills.
      </p>
      <p>
        My tech stack consists of React, Node.js, Express, TailWind, and more. I
        am currently looking for a full-time position as a Software Engineer.
        Feel free to reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/caesar001/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          LinkedIn
        </a>
      </p>
      <p>
        My interest and curiousity in technology has led me to explore various
        avenues in the tech industry. One of a recent ongoing projects is a
        homeserver that involves a RaspberryPi. I used this RaspberryPi setup to
        sync college lecture and notes between my laptop and desktop. I found
        this very useful becuase all my notes would be available on all my
        devices with ease. In the process I became well aquinted using the
        terminal and Emacs (for notetaking).
      </p> */}
    </div>
  );
};
