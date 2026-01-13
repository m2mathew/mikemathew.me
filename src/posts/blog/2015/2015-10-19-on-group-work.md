---
title: "On Group Work"
permalink: "/blog/on-group-work/index.html"
date: 2015-10-19T00:00:00.500Z
tags:
  - Coding
  - Learning
  - Teamwork
---

## or Avoiding Merge Conflicts in Version Control

Week 8 at The Iron Yard found our Front-End Engineering class heading into a group project. No big deal, we should all know how to work together. I mean, we are all adults and have gotten through high school and other jobs and stuff. Oh, yeah...there are 16 people in our class. This could quickly have been a formidable challenge unless we were careful about how to divide the planning and workload.

![the-iron-yard-areas-of-study](https://res.cloudinary.com/drumsensei/image/upload/v1515808787/the-iron-yard_areas-of-study_rd0wdu.png)

##### The Iron Yard areas of study

Our user story was from a teacher named Gill Bates (hmmm...seems like a familiar name). Gill needed an application that can create quizzes and then have the students take them. We were given some core functionality that should be present, including a set of needed analytics. Our instructor Aaron helped us break down things into a usable workload using Trello. After one student created the main GitHub repository, we then spent the rest of the day in pair programming.

I was paired up with Mike D. (not the same as the Beastie Boys fella), and we decided to tackle the Class Analytics that would allow a teacher to select a quiz and then see the class average for each question. The class was using a Parse account that Aaron set up to allow us to access data on the server. Mike set up some dummy data while we took turns getting our basic React component set up. The largest hurdle for us to overcome was the querying of three of our four Parse Objects. We used inner queries and some other logic to gain access to our needed data and manipulate it. Working to understand the relations between the data models definitely took some time, but we ended up being able to talk through our process and get the code written.

### Planning

We did not spend enough time here. We should have mapped out all functionality first. We discussed the code standards, but we should have been even more specific. Some people were not indenting the sass nesting very well which made it very difficult for others to use later on. Other people would use inconsistent spacing between different code blocks. I now have a better understanding of technical debt, alas.

### Style

We discussed zero things about the layout and style of the site except to base it on the "get skeleton" CSS layout. When we got into day two of the group project, we finally had a group discussion about which colors to include, but little to no discussion about how to use the colors (which color is the background?, which is the button color?, et cetera). At this point several people had split up and started working independently of each other on styling each component. Since we did not have a definitive style guide established, it became noticeable very quickly that we needed to rethink this.

Thursday afternoon we hosted the design class as they reviewed our design. As we prepared for the review, front-end volunteers were scarce to be the person to present our project to the design class. I was barely paying attention, figuring that someone with less public-speaking experience would really need the practice of getting up in front of seven people we all know to talk for a few minutes. Guess what, they picked me and told me as I was gazing into my Sublime Text editor. Sounds good. I did not really agree with our color palette (at least the way we were implementing it), and knew that the styling and UI/UX of some of the site was a big issue. This helped me guide the designers through our site to seek out their help on our problem spots. They had some great insights to help us reconfigure our color scheme and our general approach to several aspects of the layout. Afterwards they provided some style tiles that we used to shore up some design issues.

### Git

We had a surprisingly low number of git issues. I really think that our class is doing a great job with using git and GitHub for version control. We ended up with 829 commits on 53 branches. The 192 pull requests all went pretty well with most people putting up code that really was ready to merge into the master branch.

![group-project-github-branches-layout](https://res.cloudinary.com/drumsensei/image/upload/v1515808789/branches-hackathon_tshxdy.png)

##### A small snippet of how many branches our group had going at once.

### Teamwork

This project put teamwork into focus for me. We didn't really assign a leader other than the de facto teacher and teaching assistant. Due to this, it was a bit of an issue with getting the group to fall in line with guidelines and communication standards. I have spent my career as a music educator getting young people not only to achieve greatness but to do that as a unit. I am used to gauging the team sprit and creating a positive culture and vibe. I certainly tried to apply that to this project, too. Leadership in a team or organization revolves around influence. I do not take for granted the years of training and experience I have had as a leader. Though many of my classmates may not have been blessed to work on great teams with great leaders in the past, a lot of them will get better at this through projects like ours and future work. No one was extremely difficult to work alongside, but it was obvious that some people were not used to working with others. They have a great opportunity for improvement, and people with experience as leaders can help move them along more quickly.

I think our project ended up fairly well-styled. All aspects of the desired functions were implemented very well. The user should be satisfied. Aaron is going to use our project with the next cohort to make quizzes and have the class take them. We will get real-world feedback on our project in two or three months!

Check out the live site and poke around for a while: [tiy-austin-front-end-engineering.github.io/](https://tiy-austin-front-end-engineering.github.io/)

Ciao!

**Update 2018-01-12:** The linked site died at some point. The backend must have been built in Parse, RIP.
