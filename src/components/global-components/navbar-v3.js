import React, { Component } from "react";

import { Lnk } from "./lnk";

class Navbar_v3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div>
        <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <div className="logo-wrapper mobile-logo">
                <a href={anchor} className="logo">
                  {/* <img
                    className="main-logo"
                    src={publicUrl + "assets/img/sticky-logo.png"}
                    alt={imgattr}
                  />
                  <img
                    className="sticky-logo"
                    src={publicUrl + "assets/img/logo.png"}
                    alt={imgattr}
                  /> */}
                  <p className="h5">Devsmart</p>
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggle-icon">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="main_menu">
              <div className="logo-wrapper desktop-logo">
                <a href="#" className="logo">
                  <img
                    className="main-logo"
                    src={publicUrl + "assets/img/devsmart_logo_light.png"}
                    alt={imgattr}
                  />
                  <img
                    className="sticky-logo"
                    src={publicUrl + "assets/img/devsmart_logo.png"}
                    alt={imgattr}
                  />
                  {/* <p className="h5 text-warning">Devsmart</p> */}
                </a>
              </div>
              <div className="navbar-nav">
                <ul className="d-inline ml-auto">
                  <Lnk to="/" activeOnlyWhenExact={true} label="Home" />
                  <Lnk to="/about" label="About" />
                  <Lnk to="/services" label="Services" />
                  <Lnk to="/contact" label="Contact" />
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="body-overlay" id="body-overlay"></div>
        <div className="search-popup" id="search-popup">
          <form action="index.html" className="search-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search....."
              />
            </div>
            <button type="submit" className="submit-btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar_v3;
