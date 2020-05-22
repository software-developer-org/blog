# Getting started

- From GitHub, copy the link [blog repository](https://github.com/software-developer-org/blog)
- Open bash command and clone the blog repository
```
git clone https://github.com/software-developer-org/blog
```
- Now change the directory to local blog directory:
```
cd blog
```
- In bash command switch the branch
```
git checkout develop
```
- Run local server:
```
> node server.js
```
Then, load http://localhost:3000/ in a browser to see the output.

- To make server reload automatically, install *Node Monitor*
```
npm install -g nodemon
```
Then use it like this:
```
> nodemon server.js
```
## References:

- [Download/Install Node.js](https://nodejs.org/en/download/)

- [Express.js](https://expressjs.com/en/starter/installing.html)

- [Node Monitor](https://nodemon.io) - Node reload, automatically

# About

sharing is knowing: all about Web, APIs, functional, reactive and many more concepts

# Scope: blog app Solution
where I can post blogs and links on this site: https://taitruong.github.io/software-developer.org/

The data of this site lies here: https://github.com/taitruong/software-developer.org. 

The blog and the data must be moved to:
- https://software-developer-org.github.io/blog
- https://github.com/software-developer-org/blog

# Solution

There must be a dashboard area for members of software-developer.org:
- https://software-developer-org.github.io/blog/dashboard

Only members (user is logged in) can have access to the dashboard.

All stories (functional and technical requirements) are filed as [issues](https://github.com/software-developer-org/blog/issues).

# Folderstructure

Repo:
- index.html
- posts/
- bookmarks/
- dashboard/ (restricted access)

Blog routes:
- /
- posts/
- bookmarks
- dashboard
- login/
 

