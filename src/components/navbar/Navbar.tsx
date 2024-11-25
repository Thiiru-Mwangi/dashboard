import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/log0.png" alt="logo" width={36} height={36} />
        <span>Bisque media</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon" />
        <img src="/app.svg" alt="icon" />
        <img src="/expand.svg" alt="icon" />
        <div className="notifications">
          <img src="notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/square.jpeg" alt="profile-picture" width={48} height={48} />
        </div>
        <img src="settings.svg" alt="icon" />
      </div>
    </div>
  );
};
export default Navbar;
