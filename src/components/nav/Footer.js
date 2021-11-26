import React from "react";
import "../../index.css";
import { GithubOutlined } from "@ant-design/icons";

const Footer = () => (
  <div className="footer">
    <div className="container-fluid">
      <div className="row ml-3">
        <div className="col-sm">
          <div>
            <strong>BFI</strong> Programmierakademie 2020/2021 -
            Abschlussprojekt
          </div>
        </div>
        <div className="col-sm">
          <div>
            <strong>B</strong>ildungs-Shopping-<strong>F</strong>reude
            <strong />
            <strong> I</strong>nklusive
          </div>
        </div>
        <div className="row mr-3">
          <i className="fab fa-github"></i>
          <div>
            <a href="https://github.com/chrisKernCode">
              {" "}
              <GithubOutlined style={{ cursor: "pointer" }} /> chrisKernCode
            </a>
          </div>
        </div>
        <div className="row mr-3">
        <div className="col-sm">© 2021</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
