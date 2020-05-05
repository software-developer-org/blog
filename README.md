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

# Creating local server

- After installing Node.js, go in the blog directory to create a package.json by  using:

```
> npm init

```
	- Hit RETURN to accept the suggested default name.

- Now install Express in blog directory and save it in the dependencies list using:

```
> npm install express --save

```
- In our JavaScript file server.js post the code to create a local server:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

```
- After saving the file, we can run it locally using this command: 

```
> node server.js
```
Then, load http://localhost:3000/ in a browser to see the output.


 

