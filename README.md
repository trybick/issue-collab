# Issue Collab

> Find open source projects on GitHub by searching with labels, languages, or search terms

## Usage & Demo
* Click the toggle switches to narrow down search results by labels or language
* Optionally add search terms to the text input
* Click a title to open an issue on GitHub in a new tab.

![demo gif](https://user-images.githubusercontent.com/39889198/58373516-62beae00-7efd-11e9-940d-83109f260e4f.gif)


## Background
The idea for this project comes from wanting to find cool projects on GitHub but not being satisfied with GitHub's native search.

I began searching issues during [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (an annual event sponsored by Digital Ocean which encourages developers to get involved with open source. Make 5 PRs in a month and get a FREE T-shirt 👕).



## Technologies used
* This is a React project initialized with create-react-app
* GitHub corner icon from [GitHub corners](http://tholman.com/github-corners/)
* Packages used:
  * moment
  * eslint and prettier
  * [react-toggle](http://aaronshaf.github.io/react-toggle/)
  * [react-spinner](https://www.react-spinners.com)



## Future Development
Potential ideas for further development:
* Add pagination to search results
* Create the ability for a user to search with custom labels/languages
* Add a debounce to the `Get Issues` button
* Refine styling for search results/entire app



## Personal Highlights

My goal it to have a fun side project that will also be useful. My favorite part has been creating the logic for the [formatting utils](https://github.com/trybick/issue-collab/blob/master/src/utils/formatting.js) functions.



## Local development
To run this project for local development follow these steps in a terminal. The app will run on port 3000.
```
npm i
npm start
```


## Contributing
### Step 1
- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/trybick/issue-collab.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/trybick/issue-collab/compare/" target="_blank">`https://github.com/trybick/issue-collab/compare/`</a>



---
#### Setup with Netlify Continuous Delivery
[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)
