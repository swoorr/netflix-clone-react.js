const Headers = () => {
  return (
    <div id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <a className="logo">
              <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            </a>
            <ul className="tabbed-primary-navigation">
              <li className="navigation-menu">
                <a
                  className="menu-trigger"
                  role="button"
                  aria-haspopup="true"
                >
                  Gözat
                </a>
              </li>
              <li className="navigation-tab">
                <a className="current active" __href="/browse">
                  Ana Sayfa
                </a>
              </li>
              <li className="navigation-tab">
                <a __href="/browse/genre/83">Diziler</a>
              </li>
              <li className="navigation-tab">
                <a __href="/browse/genre/34399">Filmler</a>
              </li>
              <li className="navigation-tab">
                <a __href="/latest">Yeni ve Popüler</a>
              </li>
              <li className="navigation-tab">
                <a __href="/browse/my-list">Listem</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
