// import image from assest folder
import image from "../../assets/profileImage.jpg";

export const Home = () => {
  return (
    <div className="about-page">
      <div className="title">
<<<<<<< HEAD
        <h1 className="text-2xl font-medium">Software Engineer & Security</h1>
=======
        <h1>Software Engineer</h1>
>>>>>>> f6fe7f4e5d8f0bd72337acf9379fafe64d13b60c
      </div>
      <div className="home-img-container">
        <img
          className="profile-image shadow-[6px_2px_8px_0px_#00000038;]"
          //link image in assest folder
          src={image}
          alt="Profile Image"
        />
      </div>

<<<<<<< HEAD
      <p className="text-2xl font-light">Hi, I'm Caesar 👋🏽</p>
      <p className=" text-base font-light leading-7">
        I'm a full-stack developer and Computer Science graduate specializing in
        secure web applications. With a background in Information Security and a
        passion for clean code, I create robust solutions that prioritize both
        user experience and data protection.
=======
      <p>Hi, I'm Caesar 👋🏽</p>
      <p>
        A full-stack developer with a background in Computer Science.
        Specializing in web application development. I create robust solutions
        that prioritize both user experience and data protection.
>>>>>>> f6fe7f4e5d8f0bd72337acf9379fafe64d13b60c
      </p>
      <p>
        <span className="text-lg font-extralight">Technical Expertise:</span>
        <ul className="text-base font-light leading-7">
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
