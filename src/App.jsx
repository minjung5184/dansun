import { useState } from 'react';
import testImg from './assets/test.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  return (
    <div className="container">
      {/* Sidebar Menu */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="header-left">
            <button className="hamburger active" aria-label="Close Menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="logo-container">
              <img src={testImg} alt="Logo" className="logo" />
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <button className="nav-btn">about</button>
          </div>
          <div className="nav-item">
            <button className={`nav-btn ${isShopOpen ? 'active' : ''}`} onClick={toggleShop}>
              shop
            </button>
            <div className={`sub-nav ${isShopOpen ? 'open' : ''}`}>
              <button className="sub-nav-btn">cushion</button>
              <button className="sub-nav-btn">curtain</button>
              <button className="sub-nav-btn">textile deco</button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={`main-wrapper ${isMenuOpen ? 'shifted' : ''}`}>
        <header className="header">
          <div className="header-left" style={{ opacity: isMenuOpen ? 0 : 1, pointerEvents: isMenuOpen ? 'none' : 'auto' }}>
            <button className="hamburger" aria-label="Open Menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="logo-container">
              <img src={testImg} alt="Logo" className="logo" />
              <div className="logo-text">
                <p>ㅁㅁㅁㅁㅁㅁㅁㅁ ㅁㅁㅁㅁㅁㅁ</p>
                <p>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ ㅁㅁㅁㅁㅁ</p>
                <p className="subtitle">이 템플릿에 대한 설명</p>
              </div>
            </div>
          </div>
          <div className="header-right">
            <button className="login-btn">LOGIN</button>
          </div>
        </header>

        <main className="main-content">
          <div className="grid-layout">
            <div className="row-1">
              <div className="img-container">
                <img src={testImg} alt="Product 1" />
                <span className="img-label">Image 1</span>
              </div>
              <div className="img-container">
                <img src={testImg} alt="Product 2" />
                <span className="img-label">Image 2</span>
              </div>
            </div>
            <div className="row-2">
              <div className="img-container">
                <img src={testImg} alt="Product 3" />
                <span className="img-label">Image 3</span>
              </div>
            </div>
            <div className="row-3">
              <div className="img-container">
                <img src={testImg} alt="Product 4" />
                <span className="img-label">Image 4</span>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>주식회사</p>
            <p>사업자</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
