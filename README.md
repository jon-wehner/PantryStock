<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** jon-wehner, repo_name, twitter_handle, jonjwehner@gmail.com, project_title, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/jon-wehner/PantryStock">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center">Pantry Stock </h3>

  <p align="center">
    PantryStock is a shopping list and and kitchen inventory solution the helps users reduce their food waste at home. 
    <br />    
    <br />
    <a href="https://pantrystock.herokuapp.com">View Demo</a>    
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tech Stack</a></li>
      </ul>
    </li>    
    <li><a href="#Frontend Technologies">Frontend Technologies</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href=">
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
PantryStock is a fullstack application that assists users with managing the ingredients in their kitchen, making shopping lists, and reducing their food waste. 
I made this application both as a learning experience and to create something I could personally use to take control of my pantry.

### Tech Stack

- Postgres[]()
- Python[]()
- Flask[]()
- React[]()
- Redux[]()

<!-- ## Application Architecture Overview -->
<!-- CHART GOES HERE -->
## Frontend Technologies

### React
PantryStock is a React heavy application. The application makes heavy use of React's component tree and virtualDOM features to update components without page refreshes. The app was conceived to be equally usable on mobile devices and desktops. Using React's virtualDOM, only the elements that have changed need to be re-rendered, saving mobile user's bandwidth, and most importantly, their time. 
### Redux
PantryStock relies on the redux library for app-wide state management. Redux-thunk is used for making API calls to the backend. As the app needs queries user data, it is put into the store to be made available to all components. This reduces the total API calls that the client needs to make and improves overall application performance. 

### CSS
The UI was styled with CSS3. This was purely a personal choice, I wanted to further my understanding of vanilla CSS. 

## Backend Technologies

### Postgres
PantryStock uses the PostgreSQL database to store application data. Postgres is an open-source and highly regarded relational database system. The system is very well document and has an active development community. I chose a relational database because I felt it was right for the scale of the application, and the enforced schema validation of relational databases helps reduce data anamolies. 

### Flask
Flask is a powerful but unopinionated framework. Flask doesn't include anything that it doesn't, allowing developers which database to use, which user auth libraries to use. I decided to use flask_sqclachemy and SQLalchemy to setup my database abstraction layer. These tools automate a lot of the repetitive SQL and reduce development time. 

## CI/CD, Testing, Deployment

The app has a ci/cd pipeline setup on CircleCI to automate testing and deployment. This greatly streamlines the development and makes it easier to collaborate with multiple coders. The app is deployed to the Heroku platform on any successful merge to the main branch.

For testing, the pytest assertion library is used on the backend. Pytest simplifies writing unit tests to verify that the backend functions are still performing as expected. React Testing Library and jest have been implemented for front end testing. Jest is a popular JavaScript testing framework that comes standard with a create-react-app build. React Testing Library was recently added to test front end components. React Testing Library encourages developers to test components as users will use them, improving the user experience and accessibility of the app. 

<!-- ROADMAP -->

## Roadmap
This was a fun app to build. I feel that developing this really helped me solidify my understanding of the React Library, and I greatly expended my knowledge of CI/CD and testing. The next steps will be a minor UI overhaul to improve user experience on all types of devices. I also hope to implement a recipes feature that will allow users to better understand the flow of items through their kitchen. 
See the [open issues](https://github.com/jon-wehner/repo_name/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact

Jon Wehner - jonjwehner@gmail.com

Project Link: [https://pantrystock.herokuapp.com](https://pantrystock.herokuapp.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jon-wehner/PantryStock.svg?style=for-the-badge
[contributors-url]: https://github.com/jon-wehner/PantryStock/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jon-wehner/PantryStock.svg?style=for-the-badge
[forks-url]: https://github.com/jon-wehner/PantryStock/network/members
[stars-shield]: https://img.shields.io/github/stars/jon-wehner/PantryStock.svg?style=for-the-badge
[stars-url]: https://github.com/jon-wehner/PantryStock/stargazers
[issues-shield]: https://img.shields.io/github/issues/jon-wehner/PantryStock.svg?style=for-the-badge
[issues-url]: https://github.com/jon-wehner/PantryStock/issues
[license-shield]: https://img.shields.io/github/license/jon-wehner/PantryStock.svg?style=for-the-badge
[license-url]: https://github.com/jon-wehner/PantryStock/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jon-wehner
