import Link from 'next/link';

const Headers = () => {
  return (
    <div id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto">
            <Link href="/">
              <a className="logo">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
              </a>
            </Link>
            <ul className="tabbed-primary-navigation">
              <li className="navigation-tab">
                <Link href="/">
                  <a className="current active">
                    Ana Sayfa
                  </a>
                </Link>
              </li>
              <li className="navigation-tab">
                <Link href="/series">Diziler</Link>
              </li>
              <li className="navigation-tab">
                <Link href="/movies">Filmler</Link>
              </li>
              <li className="navigation-tab">
                <Link href="/new-and-popular">Yeni ve Popüler</Link>
              </li>
              <li className="navigation-tab">
                <Link href="/browse/my-list">Listem</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;