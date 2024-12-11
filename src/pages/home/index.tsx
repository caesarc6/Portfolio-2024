// import image from assest folder
import image from "../../assets/profileImage.jpg";

export const Home = () => {
  return (
    <div className="about-page">
      <div className="title">
        <h1>Software Engineer</h1>
      </div>
      <div className="home-img-container">
        <img
          className="profile-image"
          //link image in assest folder
          src={image}
          alt="Profile Image"
        />
      </div>

      <p>Hi, I'm Caesar 👋🏽</p>
      <p>
        A full-stack developer with a background in Computer Science.
        Specializing in web application development. I create robust solutions
        that prioritize both user experience and data protection.
      </p>
      <p>
        <span>Technical Expertise:</span>
        <ul>
          <li>Frontend: React, JavaScript, HTML/CSS, TailwindCSS</li>
          <li>
            Backend: Node, Next, Express , MongoDB, Firebase Auth, Supabase
          </li>
          <li>Tools & Infrastructure: Git, RESTful APIs, Database Design</li>
        </ul>
      </p>
    </div>
  );
};
