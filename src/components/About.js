function About() {
  const demoImage = "/images/demo.png"; // pretend it's imported

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building UIs</p>
      <img src={demoImage} alt="I made this" />
    </div>
  );
}

export default About;
