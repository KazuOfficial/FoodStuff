![example workflow](https://github.com/KazuOfficial/FoodStuff/actions/workflows/ci.yml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h1 align="center">FoodStuff</h1>

  <p align="center">
    A food delivery application
    <br />
    <br />
    <a href="https://github.com/KazuOfficial/FoodStuff/issues">Report Bug</a>
    ·
    <a href="https://github.com/KazuOfficial/FoodStuff/pulls">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

![alt text](https://github.com/KazuOfficial/FoodStuff/blob/master/images/menu.png)
<br/>
![alt text](https://github.com/KazuOfficial/FoodStuff/blob/master/images/cart.png)
<br/>
![alt text](https://github.com/KazuOfficial/FoodStuff/blob/master/images/manager.png)

* Frontend and backend run separately
* Payments handled with Stripe
* Implemented Swagger
* A shopping cart system
* The admin panel allows you to add and remove products, read sell data, and manage users
* Authentication uses JWT

### Built With

* .NET 5
* [Dapper](https://www.nuget.org/packages/Dapper/)
* [Swagger](https://swagger.io/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Stripe](https://stripe.com/docs)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

Clone the repo
   ```sh
   git clone https://github.com/KazuOfficial/FoodStuff.git
   ```
## Backend
1. Create `appsettings.json` in FoodStuffAPI folder
2. Enter your frontend URL in `appsettings.json'
   ```
   "FrontendURL": "FRONTEND_URL"
   ```
3. Enter your security key
   ```
   "Secrets": {
     "SecurityKey": "SECURITY_KEY"
   },
   ```

##Frontend
1. Install NPM packages
   ```sh
   npm install
   ```

<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the GNU License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Email - kazuofficial.contact@gmail.com

Discord - Kazu#8828

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)