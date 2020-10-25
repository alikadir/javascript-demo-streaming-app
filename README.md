
# DEMO Streaming App

**LIVE** - https://alikadir-demo.vercel.app

**React Coding Challenge** - https://github.com/StreamCo/react-coding-challenge

## Quick Start 

```shell
$ git clone https://github.com/alikadir/javascript-demo-streaming-app.git
$ cd javascript-demo-streaming-app
$ npm install
$ npm start
```
## Development Proccess
Firstly, I'm a design-obsessive person, so it must be a nice design 🤓

I've designed this project at first on [Figma](https://www.figma.com).

I've decided that which components will be when I designed on Figma,
_That was important._

![Project Design ScreenShout on Figma](http://alikadir-demo-screens.surge.sh/figma.jpg)


And then,

I've created a react project via [Create-React-App](https://create-react-app.dev) 
and cleaned all of the unnecessary files and folders in the project.
I created a folder structure according to the component structure in the design. 

```
.  
└─ src
    ├── assets
    │   └── store
    ├── components
    │   ├── app
    │   ├── auth
    │   ├── common
    │   ├── layout
    │   └── page
    ├── constants
    ├── services
    ├── styles
    │   ├── auth
    │   ├── common
    │   ├── layout
    │   └── page
    └── tests
        ├── component
        │   ├── app
        │   └── page
        └── service
```


And then,

I've created all components as primitive and I created a project layout structure also using [react-router](https://reactrouter.com) package.

**We've come to an exciting point. 
to write Test,**

I've written the test using the [TDD](https://en.wikipedia.org/wiki/Test-driven_development) approach.
I've written the content service layer test then write the service layer.
Also, I've used [Mock Service Worker](https://mswjs.io) for testing api communication.

Especially It was fun to code in the [Test Watching Mode](https://jestjs.io/docs/en/cli#--watchall) 😎


You can run the test with the following code,

```shell
$ npm test
```

Finally, I've perfected the project design by writing CSS and using [Ant Design](https://ant.design)

## Home Page
![Proje Home Page Screen Shout](http://alikadir-demo-screens.surge.sh/homepage.jpg)

## Detail Page
![Proje Detail Page Screen Shout](http://alikadir-demo-screens.surge.sh/detailpage.jpg)

## 404 Page
![Proje 404 Page Screen Shout](http://alikadir-demo-screens.surge.sh/404page.jpg)




## Q&A

### Why Ant Design?

Ant Design has a lot of components that have a nice design and easily customizable.
With these components, we can rapidly develop an enterprise-level application.

### Are there any improvements you could make to your submission?

Yes, if I have more time, I would make improvements to the following topics, 

- I would change the [react-scrips](https://create-react-app.dev/docs/updating-to-new-releases/) package to [react-app-wired](https://github.com/timarney/react-app-rewired) because more flexible that injecting configs than react-scripts

Also I would spend time for,
- SEO optimization
- Responsive design 
- Server-side rendering
- Remove Ant Design
- Reduce load time 
- PWA 



_That's all,
Thank You._


