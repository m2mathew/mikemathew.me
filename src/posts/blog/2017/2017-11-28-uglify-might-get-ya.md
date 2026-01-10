---
title: "Uglify Might Get Ya"
permalink: "/blog/uglify-might-get-ya/index.html"
date: 2017-11-28T00:00:00.000Z
tags:
  - JavaScript
  - Webpack
  - Uglify
---

I still code almost every day. [My GitHub commits](https://github.com/m2mathew) don't tell the whole story, but I have taken _very_ few days off this year. Most of my work is in private repositories, but I have a few "learning" projects out there, too. Not burned out at all; definitely working hard and learning lots every day, every week!

![mike's-commit-chart-from-the-past-year](https://res.cloudinary.com/drumsensei/image/upload/v1517119461/github-commits-2017_i7zxep.png)

##### Looks like I took at least two weeks off, kinda! 😜

I recently ran into a snag with an app we are building at my workplace. This is the desktop "single page app," as the kids say these days. We use React for the front end alongside our favorite open source library [Material-UI](https://www.material-ui.com). Like most modern web apps, we jumped on the webpack train. This useful tool helps us build our app for a development or production environment. Webpack is flexible enough to allow many customizations through plug-ins and other fiddling with the code.

We use handy webpack plug-ins that do tasks like:

-Removing any comments in the app (not useful when the app is in production)

* e.g. `// TODO: Don't ship comments`
* Generating HTML files directly from the JavaScript
* Removing all unused files from the bundle
  * No reason to ship any files to production that are unused by the user
* Making a [nyan-cat](https://www.youtube.com/watch?v=QH2-TGUlwu4&t=46s) fly across the screen while the project is building on our local machine

![nyan-cat-by-Ola-Tandstand-from-dribbble.com](https://res.cloudinary.com/drumsensei/image/upload/v1517119656/catdribblegif2_bbmyfe.gif)

##### Nyan Cat by Ola Tandstand from [dribbble.com](https://dribbble.com)

Maybe our most important plug-in reduces the size of our bundle.js file—the single JavaScript file sent to the client that makes the app run. This plug-in will ["minify" or "uglify"](https://davidwalsh.name/compress-uglify) our app. Here's a real-world example of why this will be important. About a year ago I was fiddling with some code and accidentally un-applied the uglify process our our production code. I went to check out why the production app was taking **so long** to load. Turns out, the JavaScript bundle.js file that we were shipping in production was over 15MB! That's HUGE! When we corrected the error, it went back down to its normal size of about 400KB. If you are unsure about those MB and KB numbers think about it like this. Our development JavaScript file was over 15,000,000 bytes, but the production JavaScript file that we ship to customers is only 400,000 bytes. Since that time we have made even better progress to keep the size small while the app continues to grow.

Under the hood, webpack reduces the size of the files so much by doing some pretty creative things. This example might make it pretty clear how much it reduces the file size.

We might have a function like this to find the sum of two numbers:

![function-named-sum-before-uglification](https://res.cloudinary.com/drumsensei/image/upload/v1517119999/uglify-code-1_jkbsnm.png)

When we uglify the code, we might get something similar to this (but with even less whitespace than this):

![function-named-sum-after-uglification](https://res.cloudinary.com/drumsensei/image/upload/v1517119775/uglify-code-2_qne0qq.jpg)

If you multiply this reduction in character size across 1,000 functions, you can imagine why this is an important process to add to any production-facing application.

Now, the issue we faced was pretty funny and certainly a product of our own doing. When we are sending requests for data from our app, there is a process to handle both a successful request or an error. According to the error, we display a helpful message to the user to let them know something fairly specific about what happened.

For instance, you spin up the app, and your account information never gets loaded. In that circumstance one of several different types of errors might have occurred. We don't just say `"There was an error"`. We try to provide something more concrete like `"We were unable to load your account information"`.

In the case of a credit card transaction, there are MANY different possible errors that occur: invalid CVN, invalid Postal Code, et al. We handle those specific types of errors by constructing a new object and labeling it with the new **name** "HttpError". When we checked for this error to display a specific credit card error message on our local machines everything worked great! We shipped it to a production test environment, and it always failed…not just wrong error, but entire app crashes and burns.

![crash-bandicoot](https://res.cloudinary.com/drumsensei/image/upload/v1517121162/crash-bandicoot-dribbble_kn2q8z.jpg)

##### Oops—wrong kind of crash

##### Credit: "Bandicoot" by [Lic Pollito from dribbble.com](https://dribbble.com/licpollito)

Turns out, our newly constructed HttpError object was renamed to `r` in production. We kept seeing the error `"r.isCcError" is undefined`. After several moments of panic, we realized that webpack's extremely useful plug-in was crashing our app by renaming our HttpError object to one simply called `r`.

So, this little line of code:

![throw-error-code-v1](https://res.cloudinary.com/drumsensei/image/upload/v1517121169/uglify-code-3_pvh30c.jpg)

Became this line of code:

![throw-error-code-v2-and-final](https://res.cloudinary.com/drumsensei/image/upload/v1517121172/uglify-code-4_jekmpw.jpg)

And we lived happily ever after.

![dancing-nutella](https://res.cloudinary.com/drumsensei/image/upload/v1517121179/dancing_nutella_ejrihe.gif)

Webpack and its surrounding orbit of tools makes modern app development very efficient and better for developers/users. BUT, one must be ever steadfast in understanding the "in"s and "out"s and "what-have-you"s of the what the tool is doing behind the scenes.
