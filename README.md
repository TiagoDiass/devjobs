
<h1 align="center">
  💼 DevJobs 👨‍💻
</h1>

<h4 align="center">
  A front-end challenge developed by <a href='https://github.com/TiagoDiass'>@TiagoDiass</a> where people can look for technology related Jobs
</h4>

<p align="center">
  <img alt="Repo's top languages" src="https://img.shields.io/static/v1?label=Main%20technologies&message=React%2FNext.js%2FTypeScript&style=for-the-badge&color=2b7489&labelColor=000000">
</p>

<p align="center">
  <a href="#final-result">Final result</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Used technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to run</a>
</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;![](screenshots/devjobs.gif)

<h2 align="center">
  <a href="https://south-frontend-challenge.vercel.app/" target="_blank">
    Demo on Vercel
  </a>
</h2>

<h2 id="final-result" name="final-result">
  :clipboard: Final result
</h2>

### [Click here to check the application running on Vercel](https://south-frontend-challenge.vercel.app/)

<h2 id="techonologies" name="technologies">
  :rocket: Used technologies
</h2>

- [Next.js](https://nextjs.org/)- Next.js is a framework built on top of React. It was used to build the app in general. 
- [TypeScript](https://www.typescriptlang.org/) - Typescript is a superset of the common JavaScript. With that, we can type and maintain our code easier.
- [Styled Components](https://styled-components.com/) - Styled components is a CSS-in-JS library. It was used to style the whole app.

<h2 id="deploy" name="deploy">
  :rocket: Deploy
</h2>

I have deployed this application on [Vercel](https://vercel.com/). It's configured with a continuous deployment with this Github repository, that is, everytime the codebase from the `main` branch of this repository gets updated, Vercel will trigger a build of the project and will put it in production.
[Click here to check the application running on Vercel](https://south-frontend-challenge.vercel.app/)

<h2 id="features" name="features">
  :clipboard: Features
</h2>

- [x] All the pages were statically generated, which improves the user experience since the page will load and be available to use very quickly.
- [x] All the pages were developed using the [Mobile First](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) concept, that is, all pages were firstly developed to the screen sizes of mobile devices, and then had their styles adapted to larger screen sizes. In short, the application is responsive.
- [x] User can see a list of job positions
- [x] User can enter in each job position page to check its details
- [ ] User can filter jobs
- [ ] User can change the application's theme, choosing between a light or a dark theme

<h2 id="how-to-run" name="how-to-run">
  :arrow_forward: How to run
</h2>

### First steps
If you want to run the application in your computer, follow these steps;
First of all, you'll need to clone the repository and install the dependencies. Assuming you have [Yarn](https://yarnpkg.com/) installed in your computer, follow the steps bellow:

```
# Clone the repo
$ git clone https://github.com/TiagoDiass/devjobs.git

# Enter the repo's folder
$ cd devjobs

# Install the dependencies
$ yarn install

# Start the application
$ yarn dev
```

After following these steps, the terminal will show you in which port it's running, it's on the port 3000 usually, so, you'll just need to enter in your browser and
type `localhost:3000`, then you'll be able to check the app running. When you want to stop it, go to the terminal that you used to start the app, and type <kbd>CTRL</kbd>+<kbd>C</kbd>,
this way you'll stop the app

---

Hope you enjoyed this project :smiley:<br>
:wave: [Get in touch!](https://www.linkedin.com/in/tiagodiass)

### Author: [Tiago Dias](https://tiagodiass.github.io)


