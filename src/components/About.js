function About() {
  return (
    <div id="about" style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>About Me</h2>
      <p>I made this</p>
      <img
        src="./images/demo.png" // Image not loading because React restricts access to files outside the `src/` or `public/` directories.

        alt="I made this"
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
}
export default About;