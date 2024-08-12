export const About = () => {
  return (
    <div className="about-page">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <p>
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
      </p>
    </div>
  );
};
