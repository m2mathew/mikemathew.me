---
title: "Use a Pull Request Template in GitHub"
permalink: "/blog/use-a-pull-request-template-in-github/index.html"
date: 2020-10-14T00:00:00.500Z
tags:
  - Coding
  - Productivity
---

GitHub templates are all the rage!

If you are working on a team of > 1 and want to maintain a consistent approach to pull requests (a.k.a. PRs), I highly suggest adding a template to your repositories. This will not _guarantee_ consistency on your team's PRs since an individual can delete the text, but it will encourage more thorough documentation. Hopefully this leads to fewer bugs in production!

## How to add a template

1. Create a folder in the root of your project named `.github`.
1. Add a file named `pull_request_template.md`.
    - This file will use [GitHub-flavoured Markdown](https://guides.github.com/features/mastering-markdown/).
1. Commit this file to the repository's "main" branch.
1. All new pull requests will have the template show up automatically. Devs can add/subtract around the template's text as desired.

## drumsensei's basic template

Here is a template I use for a basic web application repository:

```
### Completes [Trello/Jira Story]()

--------------
# The issue

Title of Trello Card, e.g. As a user, I should be able to click the fancy button 🤓

# The solution

How did you solve the issue? Include what you changed to fix the glitch.

# Visuals

Before | After
----- | -----
A | B

# Test cases

How can we thoroughly test this? Include sign-in information, if needed.

- Get this code.
-
```

### Break it down

> Completes

Link to the original ticket here. It's good to give a reviewer context while looking over the proposed changes in the pull request.

> The issue

Provide a brief description of the issue. I usually copy over the title of the card like "As a user, I should be able to click the fancy button".

> The solution

Explain the approach being used in the proposed changes. Provide useful links to library documentation, GitHub issues, stack overflow posts, etc. to back up your research. Be thorough.

> Visuals

If necessary, provide before and after images/gifs. Future-you will appreciate this when searching back through older pull requests to quickly find when a change was made.

> Test cases

Give the reviewer sign in information and scenarios needed to test the proposed changes. Writing this section should make the developer think through every scenario. More than once I have gotten to this point of my draft pull request only to realize that I left off my own testing for a scenario. Be as thorough as possible.

### Wrapping up

If you want to increase consistent documentation on your team's pull requests, please consider adding a template. I have found it to be helpful on the projects where I work with other people.
