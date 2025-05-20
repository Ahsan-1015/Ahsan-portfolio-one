// components/Skills.js

function Skills() {
  return (
    <section id="skills" className="p-12">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <img
            src="/assets/images/html5.png"
            alt="HTML5"
            className="mx-auto mb-2"
          />
          <p>HTML5</p>
        </div>
        <div className="text-center">
          <img
            src="/assets/images/css3.png"
            alt="CSS3"
            className="mx-auto mb-2"
          />
          <p>CSS3</p>
        </div>
        <div className="text-center">
          <img
            src="/assets/images/js.png"
            alt="JavaScript"
            className="mx-auto mb-2"
          />
          <p>JavaScript</p>
        </div>
        <div className="text-center">
          <img
            src="/assets/images/react.png"
            alt="React"
            className="mx-auto mb-2"
          />
          <p>React</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
