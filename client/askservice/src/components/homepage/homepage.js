import React from "react";
import Img from './homepage.jpg';

const Homepage = () => {
  return (
    <div>
      <div class="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
       <div>
         <a class="navbar-brand" href="#">
          AskService
        </a>
        </div>

        <div id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto my-2 my-lg-0 ">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Client
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Worker
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login/Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img src={Img} alt="image" className="w3-opacity w3-grayscale-max" id="home_image" />
    </div>
  );
};

export default Homepage;
