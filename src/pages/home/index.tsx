// import image from assest folder
import image from "../../assets/profileImage.jpg";

export const Home = () => {
  return (
    <div className="about-page">
      <div className="title">
        <h1>Caesar's Portfolio 🙋🏽‍♂️</h1>
      </div>
      <div className="home-img-container">
        <img
          className="profile-image"
          //link image in assest folder
          src={image}
          alt="Profile Image"
        />
      </div>
      <h2>Software Developer</h2>
      <p>Hello!</p>
      <p>
        Welcome to my portfolio. Here you can read about my skills, technologies
        and more.
      </p>
      <p>
        I have experience developing websites using frameworks and libaries such
        as Node, React, API's, Firebase.
      </p>
    </div>
  );
};
