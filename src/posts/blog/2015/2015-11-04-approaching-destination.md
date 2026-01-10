---
title: "Approaching Destination"
permalink: "/blog/approaching-destination/index.html"
date: 2015-11-04T00:00:00.000Z
tags:
  - Coding
---

## or Catching Up

I now find myself in week 11 out of 12 in my studies at The Iron Yard-Austin. Much has happened recently, so what follows is a quick recap of the past few weeks since last I updated the web log.

![jake-from-adventure-time](https://res.cloudinary.com/drumsensei/image/upload/t_blog-post-image/v1515821681/adventure-time-jake_dvlyaw.png)

### Whiteboarding

We began to practice whiteboarding in class in front of the entire group. I went first and was charged with this task: create a function using vanilla JavaScript that, given two integers, returns the greater of the two. All went smoothly and quickly. I wrote down some test cases like `[1, 2]` or `[2, 20]` or `[a, 3]` and made my way through it fine.

Then I realized that I had not named my function...and I thought about it with everyone watching me...and I could not remember how to name a function, how to declare a function in JavaScript - which I have done for MONTHS now dating back to last March when I began studying this wonderful language. ME - a person who has used a whiteboard as an extension of my teaching brain for many, many years. I froze when confronted with that small task. So weird.

To work on this, I started staying later than my peers and erasing the board and going through similar problems while muttering (sometimes even incoherently) to myself. I am getting better at whiteboarding (and muttering, I suspect).

### Prototypes

We talked about prototypes in JavaScript, and I recalled this from the dingy corner of my mind. A Codecademy lesson seemed to linger there in the shadows. Prototypes are essentially the perfect Platonic form of a function that exists under the layers of what the programmer is manipulating. The attributes and methods can be accessed under the "skin" of the machine.

### ES2015

This is the latest version of the JavaScript language. It has gone through a handful of name changes, but it seems like the consensus now is to update it every year with that year in the name. We then talked about Babel which transpiles our fancy new shiny JavaScript into the grimy old JavaScript that the browsers are used to dealing with (that JavaScript is called ES5...yeah, it gets strange).

In the ES2015 newness we discussed a few nuggets that we could use quickly. The "fat arrow" (their words, not mine) lets `this` be what one would expect when inside of something like a React component's `componentWillMount` method. We were already using the "fat arrow" (at least I was!) to be able to use `this` as we expected in React. We also learned the new keywords `let` and `const` which have been very useful. `let` is to become the new `var` and will not be affected by hoisting in the same way that `var` was. `const` is a way to declare constants (think gravity and pi) that will be initialized then left alone to be used throughout a program without fear of accidentally mutating the value. I used this in a tax-rate homework assignment because the tax rate was not a changing variable.

### Node.js

JavaScript and the browser go hand-in-hand, for without the browser, JavaScript is want to thrive.

That is all gone now. The good people who figured out the node.js way of doing things have made it possible to use JavaScript in different ways, especially on the server-side of programming. This system is said to make security and especially speed much better. I have limited experience with it so far, but I did attend a meetup at the Capital Factory for the Bleeding Edge Web where many interesting notes were taken by me about this node.js system. More to come about this as I learn more.

### Google Maps API

Aaron went over how to find the Google Maps API information and how to build a basic map with some markers and messages. I used this to build a map of the city where my family lives complete with markers and messages custom-made about our city and house. The kids loved it, and I had fun making it!

### Big O Notation

As with most things in computer science, I dig learning how the computers work. Aaron mentioned how nested `for` loops related to the estimated time it takes to complete them and how mathematicians/computer scientists use "Big O Notation." On my own I went [here](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation) and did further study to learn more about the way algorithms relate to the estimated length of time needed to complete them. Supremely interesting to me. Logarithms and binary searches follow closely in this area.

### TED Talks

As a former co-worker of Frank Troyka, the venerated teacher and leader of young people, and a lifelong learner, I have been watching TED talks for many years. The [talk with Simon Sinek](https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action) about "How great leaders inspire action" is definitely a good one. The golden circle principle is well-explained and instantly makes sense with his illustrations and examples. TL;DR know **WHY** you are doing what you are doing.

### Angular

This is a MVC framework created by people working at Google. We have used Backbone, which is a MV\* framework. We have used React, which is mostly the V of the previous examples. Angular is huge and does a lot of things. Aaron walked us through some models, controllers, and modules, and we discussed two-way data-binding. I had done a very small "to-do list" tutorial before, so some of this was not foreign to me. However, it is a good deal different than the ways that we have approached similar problems. I feel confident that I could pick it up, if needed. I do find it odd that Google doesn't actually use this in production (at least, to my knowledge).

### User Stories

We definitely talked about this during our hackathon several weeks back as well as our group project. It is useful to bring up again since this is the WHY of programming. We need to know what it is we are needing to solve and how the program is being used, etc., etc. I feel like our final project preparation was most difficult for me because of getting the user stories on paper and articulating certain issues that needed attention. But, like with most things, once I got the words on the page and started rearranging them, the user stories became much more clear.

### Et cetera

Several other great things happened in these weeks since I last wrote in this space. I figured out how to pass data and methods up and down through React components. It is not 100% in my brain yet, but I am inching ever closer.

I also attended an "Open House" held by our campus. I met several people who are possibly entering the next The Iron Yard-Austin cohort in February. A really cool benefit was meeting the new campus director of The Iron Yard-Dallas, Caitlin, and getting to talk to her for a good long while about life, the universe, and everything. She is good people, and I am really excited for the Dallas students coming soon. I know that I will certainly be on-deck whenever needed to help the next generation of The Iron Yard students get their feet wet!

Speaking of, we also had a ton of rain last week and massive flooding in ATX. I drove to Dallas and it took about seven hours (that is 2x longer than usual). Halloween apparently happened...that escalated quickly. We talked to Travis about cover letters and résumés. I made my app for the final project pretty much do what I wanted (after much consternation and rending of garments, followed by proclamations of joy and triumph). Lastly, I learned that Twitter was launched here in Austin at SXSW in 2007.

Wow! What a busy time! More to come soon about my final project. Stay tuned...
