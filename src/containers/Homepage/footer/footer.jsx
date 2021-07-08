import React from "react";

import { FaFacebookSquare,FaTwitterSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";

import classes from "./footer.module.css";

const Footer = () => {
  return (
      <footer className={classes.sitefooter}>
        <div className={classes.container}>
          <div className={classes.row1}>
            <div className={classes.columns}>
              <h6>About Us</h6>
              <p className={classes.textjustify}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                dignissimos voluptatum facere maxime fugiat consequuntur quidem.
                Et laborum, nihil quidem repellat quisquam dicta consectetur
                dolores sequi assumenda nostrum! Ab, sapiente.
              </p>
            </div>

            <div className={classes.columns}>
              <h6>Products</h6>
              <ul className={classes.footerlinks}>
                <li>
                  <a href="#">Burger</a>
                </li>
                <li>
                  <a href="#">Sandwich</a>
                </li>
                <li>
                  <a href="#">Coffe</a>
                </li>
              </ul>
            </div>

            <div className={classes.columns}>
              <h6>Quick Links</h6>
              <ul className={classes.footerlinks}>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className={classes.container}>
          <div className={classes.row2}>
            <div className={classes.columns}>
              <p className={classes.copyrighttext}>
                Copyright &copy; 2021 All Rights Reserved by
                <a href="#">  Grilled^Souls</a>.
              </p>
            </div>

            <div className={classes.columns}>
              <ul className={classes.socialicons}>
                <li>
                  <a className={classes.facebook} href="#">
                    <i><FaFacebookSquare/></i>
                  </a>
                </li>
                <li>
                  <a className={classes.twitter} href="#">
                    <i><FaTwitterSquare/></i>
                  </a>
                </li>
                <li>
                  <a className={classes.linkedin} href="#">
                    <i><FaLinkedin/></i>
                  </a>
                </li>
                <li>
                  <a className={classes.github} href="#">
                    <i><FaGithubSquare/></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
