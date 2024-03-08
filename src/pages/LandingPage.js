import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const LandingPage = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptatem, repudiandae odit voluptatum unde illo dignissimos a
            atque ducimus! Voluptatem accusamus debitis quaerat commodi est
            consequuntur quae, blanditiis ratione cum.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default LandingPage;
