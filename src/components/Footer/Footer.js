import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span className="text-primary font-weight-bold">Home</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span className="text-primary font-weight-bold">Company</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span className="text-primary font-weight-bold">About</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <span className="text-primary font-weight-bold">Contact</span>
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://kanishkasoftware.com/">Ashikur Rahman</a>,
              Kanishka Software Private Limited
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
