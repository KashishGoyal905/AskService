import React from "react";

const Homepage = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          AskService
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto my-2 my-lg-0">
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
      </nav>
    </div>
  );
};

export default Homepage;
