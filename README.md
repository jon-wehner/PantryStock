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
*** TODO: RUN THROUGH CODE AND FIND A GOOD SNIPPET
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
    <li><a href="#Frontend-Technologies">Frontend Technologies</a></li>
    <li><a href="#Backend-Technologies">Backend Technologies</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href=">
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>    
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
PantryStock uses the PostgreSQL database to store application data. Postgres is an open-source and highly regarded relational database system. The system is very well document and has an active development community. One reason that I chose to use a relational database over a NoSQL databse is that I felt it was right for the scale of the application, and the enforced schema validation helps reduce data anamolies. 

### Flask
Flask is a powerful but unopinionated framework. Flask doesn't include anything that it doesn't, allowing developers which database to use, which user auth libraries to use. I decided to use flask_sqclachemy and SQLalchemy to setup my database abstraction layer. These tools automate a lot of the repetitive SQL and reduce development time. 

## CI/CD, Testing, Deployment

The app has a CI/CD pipeline setup on CircleCI to automate testing and deployment. This greatly streamlines the development and makes it easier to collaborate with multiple coders. The app is deployed to the Heroku platform on any successful merge to the main branch.

For testing, the pytest assertion library is used on the backend. Pytest simplifies writing unit tests to verify that backend functions are still performing as expected. React Testing Library and jest have been implemented for front end testing. Jest is a popular JavaScript testing framework that comes standard with a create-react-app build. React Testing Library was recently added to test front end components. React Testing Library encourages developers to test components as users will use them, improving the user experience and accessibility of the app. 

<!-- ROADMAP -->

## Conclusion and Roadmap
The next steps will be a minor UI overhaul to improve user experience on all devices. I also hope to implement a recipes feature that will allow users to better understand the flow of items through their kitchen. A long term goal is to port the front end to React Native and create a mobile app. Mobile development is something that I have been interested in for awhile. I think this app is responsive for mobile devices, but releasing on the app store would really take the user experience to the next level.  
See the [open issues](https://github.com/jon-wehner/repo_name/issues) for a list of proposed features (and known issues).

I greatly enjoyed building this application and can't wait to add to it. This was my first time developing a project by myself using Python/Flask on the backend and I greatly improved my understanding of the language. I really started to enjoy using the React library when creating this application. React is an awesome thing that was given to the JavaScript community and I can't wait to keep learning even more about it. I also had a lot of fun integrating the CI/CD and testing tools that are now part of the project. I have a much better idea of what it takes to ship a production grade application after developing this application.

Thanks for stopping by, I hope you enjoyed learning about this application.
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
[license-url]: https://github.com/jon-wehner/PantryStock/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jon-wehner
