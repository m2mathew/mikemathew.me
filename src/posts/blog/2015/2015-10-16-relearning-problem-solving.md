---
title: "Relearning Problem Solving"
permalink: "/blog/relearning-problem-solving/index.html"
date: 2015-10-16T00:00:00.500Z
tags:
  - Coding
  - Learning
---

## or Remembering how to learn

> Let's go to inspect element and see what that is.

> What is the type of that variable?

> And what type is the data inside of it?

> Do you remember how to iterate over that kind of data?

These are all phrases that our patient teacher Aaron has doled out repeatedly in class and one-on-ones. I will go ask for a hint on a problem that is blocking me, and these phrases (or ones like them) appear. This post is partially so I will ask myself those questions later on when an experienced programmer is not sitting 10 feet away. It is also to remind myself that problem solving from one discipline to another is similar. I should not have to re-learn everything about problem solving.

![music-by-programmers](https://res.cloudinary.com/drumsensei/image/upload/v1515698157/cd_cover_300px_oft6sp.jpg)

##### Image created by reddit.com user Charlie

In music (it always goes there with me), and especially as a music educator, I am acutely aware of the inherent problems of the activity. If you pick up a trumpet for the first time ever, making a sound at all poses a significant problem. With the help of an experienced teacher, a student (young or old!) can learn to form the face and fingers correctly to begin to make sounds. With a consistent approach to practicing, the struggles of producing sound lessen over time. Concurrently, a student should be learning to read music - to interpret all of the black and white of the page into sound. Thankfully, there are millions of people undertaking this problem-solving everyday, and we are the richer for it. Hearing a great musician, or even a group of them, remains a favorite activity of many of us for good reason; there is really nothing quite like it.

I am finding a similar approach necessary in programming. There is the hurdle of simply using the software and hardware: which program do you use to write code, how do you use the command line, git and GitHub, browser developer tools. For a long-time computer user like myself, this is mostly a non-issue. I learned to type in high school (though I still go too fast and have to use backspace way too much). I loved messing around in ms-dos back in the day, so using bash isn't terribly different. Using git and GitHub has proven to be a bit of an obstacle, but it is improving with daily practice.

The deeper issues are found in the complexity of programming. I would liken this to reading music and interpreting the notes and rhythms into sounds... not just "Three Blind Mice" and those beginner songs, but the more challenging ones that turn out to be very complex.

I recall learning the beginning of the famous song "Merlin" by Andrew Thomas. It is a solo marimba piece written in the 1980s which is very complicated and amazing to behold. Even looking at the music is daunting. This little snippet is merely the beginning of the second movement.

![sheet-music-to-merlin-by-andrew-thomas](https://res.cloudinary.com/drumsensei/image/upload/v1515698159/merlin_med_ojvnyn.jpg)

##### Image created by reddit.com user Charlie

Several issues:

* The notation is handwritten which may make it more challenging to read for some people.
* The grand staff is in use, so the performer will have to know both treble and bass clefs
* It is in 6/8 time signature, but you cannot tell that when listening to it.
* The volume changes rapidly from very soft to very loud, so the performer has to be able to control dynamics.
* In measure three the notation begins to separate the hands across the grand staff, which makes it more challenging to read.

And this is just the beginning of the piece - we didn't even discuss what it takes from the hands to perform the techniques!

In programming, we were recently presented with a similar kind of problem. We needed a framework of rules and understanding of JavaScript to begin to tackle hoisting exercises. I will readily admit that I am still not always getting these 100% figured out, but I am coming closer. Here is an example of one of our first exercises in learning about hoisting:

```javascript
var val = 'my value';

(function() {
    console.log(val);
    var val = 'local value';
})();
```

For this kind of problem, one should know what the keywords `var` and `function` mean in JavaScript. They are declaring a variable and function, respectively. This is akin to pointing at a dog and saying, "There is a dog." In the `var` declaration, everything that comes after the equal sign is like saying, "That dog is named 'Ewok'". The variable becomes useful only after it has been declared (pointed at, in my example) and then initialized (named "Ewok").

Easy enough to understand, yes? The strange part is the way that JavaScript behaves concerning these different things. The declaration of variables and functions happens before they are actually named "Ewok." In the example, the self-invoking function gets hoisted to the top. JavaScript says, "There is a function" and puts it above all other code. When the code tries to access the name of `val` inside the function, it does not know where to find it because it has not been properly named yet.

Little tricks like this are the little mental hurdles to jump in order to write effective code. We must always know how our programming is _really_ working. What kind of data lives inside `val`? Is it a string, a number? How do we deal with that data? When we combine that piece of information with another data type, then what will be the result?

The more I get into this, the more it resembles the real issue of learning a piece of music. We learn myriad ways of solving problems, then we work on using those in different ways in each piece of music we perform. Each piece of code is different, depending on which problem is meant to be solved by it. I have to do a good job of getting consistently good practice in both understanding the language's quirks and working on interesting problems.

As a side, yesterday I went to watch a rehearsal of the marching band from Vista Ridge High School in Cedar Park, Texas (to the northwest of Austin proper). There are many problems to be solved in marching band where the students are dealing with moving in different directions, performing different music, while carrying a heavy instrument (if you disagree, then go strap on a sousaphone or a bass drum for a few minutes!). As I no longer get the daily thrill of being around a group of 200 young people working in unison, I hope that my friends that experience that often do not take it for granted. The band I saw is one of the best in the state of Texas, and it was a pleasure to get to see their product and give my input to help solve any problems I noticed.
