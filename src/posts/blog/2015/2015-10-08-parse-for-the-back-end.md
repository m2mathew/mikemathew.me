---
title: "Parse for the Back End"
permalink: "/blog/parse-for-the-back-end/index.html"
date: 2015-10-08T00:00:00.500Z
tags:
  - Coding
  - Learning
---

## Authentication for Beginners

Note: (Sadly, Parse was acquired by Facebook and shut down their services in February 2017. The link to my exquisite project is therefore quite broken.)

As we are compiling a lexicon of components from our adventures in React.js, we have also ventured into server territory. The thoughtful reader will recall that Facebook came up with React in order to more easily build components that can be used across their vast website (and yes, using Facebook is still using the internet - that seems to be a somewhat common misconception). The React library allows those fancy Facebook engineers to show a birthday event in multiple places using the same data and nearly the same code. This next leg of the journey is brought to us by the same team.

Parse is a server that allows software developers to use the common features of saving users and data structures to "the cloud" and then manipulating that data. Parse is based in Menlo Park, CA (in the digital hub that we call San Francisco). The group was acquired by Facebook in 2013. It is free to use unless the site being built is getting more than thirty requests per second. Because of this, most developers only use this for prototyping, opting to build out the back-end in-house once the project is ready to deploy.

Below is a functional register-login page that I put together using Parse, React, and the grid system called Materialize (built by a Google team). I enjoy using Materialize right out of the box as it has a very streamlined feel to it. The artwork on the linked page is lovingly borrowed from some amazing artists at [dribbble.com](https://dribbble.com/) - go check out that site for a while! Once a user is registered and logged-in, the dashboard becomes available to them. The options in the navigation menu at the top change, depending on the logged-in status of the user. There is not a lot here, but it was fun to build!

Also, I did not really optimize it for mobile, so the navigation menu does not render properly on mobile yet. I know, I KNOW, that I should have done this first! Anyhow, do check it out if you are out and about on a desktop or laptop computer, and let me know what you think!

![millennium-falcon](https://res.cloudinary.com/drumsensei/image/upload/v1515697324/mill-falcon-dribble_ow38pc.jpg)

##### Image created by reddit.com user Charlie
