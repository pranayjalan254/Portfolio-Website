const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-analytics"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">0-1 Year</span>
      </div>
      <div className="about__box">
        <i class="uil uil-github-alt"></i>
        <h3 className="about__title">
          <a href="https://github.com/pranayjalan254" target="_blank">
            GitHub
          </a>
        </h3>
        <span className="about__subtitle">pranayjalan254</span>
      </div>
      <div className="about__box">
        <i class="uil uil-envelope-question"></i>
        <h3 className="about__title">
          <a href="mailto:pranayjalan.work@gmail.com">Contact</a>
        </h3>
        <span className="about__subtitle">Email 24/7</span>
      </div>
    </div>
  );
};
export default Info;
