---
title: "Backbone Basics"
permalink: "/blog/backbone-basics/index.html"
date: 2015-09-22T00:00:00.000Z
tags:
  - JavaScript
  - Backbone
---

## Backbone makes it easier

Our front end engineering class has brought us to the point where we know enough book information to make a desirable number of features on a website. We have learned a good deal of HTML and CSS for basic, good-looking website content. To increase the power and ease of using CSS, we learned Sass which is a pre-compiler for CSS. All of this knowledge brings us to the point where we can talk to designers and get a basic page built fairly well.

From near the beginning, we learned vanilla JavaScript in node in the terminal (or in Sublime Text, if you are fancy). Next we learned how to link the HTML/CSS into the JavaScript to provide functionality to our websites. We then learned some jQuery, a JavaScript library, to quickly target areas of a webpage for interaction. Just as soon as we were getting comfortable with mixing JavaScript and jQuery we discovered that AJAX lets us deal with a server to store information in a place other than the client's computer. This allows us to work arm-in-arm with our back-end brethren and opens us up to the world of [Backbone.js](http://backbonejs.org/).

![backbone-logo-on-a-book](https://res.cloudinary.com/drumsensei/image/upload/v1515646799/backbone_1x_k1nidw.png)

##### Humbly borrowed from [Kevin Ports on dribbble](https://dribbble.com/shots/1475794-Dribble-47)

Backbone is a library that is written in JavaScript and also incorporates jQuery and Underscore. This particular library uses the MVC architectural pattern that stands for Model-View-Controller, some of the main ingredients that make this approach attractive to many. I certainly have a freshman-level view of these concepts, but I can already see the appeal of having the page updated in a dynamic way. The main basic idea of the Backbone (or another MVC framework) approach is to have the internal use of data separated from the user's computer. Backbone code will be set up to listen for changes to the website and then will interact with the server behind the scenes to initiate and carry out those changes.

While somewhat easy to explain in those terms, the code is already sometimes becoming rather large. When the lines of code begin to pile up, it is best to step back and remember the bigger picture. We will set up a **model** that will exist between the user's page and the server. This model will be our "single source of truth," as our instructor Aaron likes to say. When a change is made, the model is consulted and then it interacts with the server behind the scenes to make changes. Backbone is also smart enough to carry out changes that are needed. In other words, it will not refresh your entire profile on your social media site if you only change your picture. Backbone will just change your picture and be done.

Without a doubt, there is a long road ahead to grasp all of these concepts. Thankfully we have our **hackathon** this weekend where we pair up with the design and back-end cohorts to create and implement a project of our choosing. This will be a great way to learn how to work with these other two elements of web development to realize a project. I am really excited to work with these folks!

To infinity and beyond,

Mike
