# User: Aman Kaushal

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.4.7, npm ^2.15.8
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- Framework used: Express

### Developing

1. Run `npm install` to install server dependencies.

2. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

### APIS:

1. LOGIN THROUGH GOOGLE/GMAIL:  GET API  `http://localhost:3000/api/auth/google/login`
      [ It will login user through gmail and return on my callback uri `http://localhost:3000/api/auth/google/callback`]

    Controller Code: Directory: `./server/components/auth/google`


2. USER DETAILS APIS: GET API
    Get User Data: - `http://localhost:3000/api/users/me?access_token=ENTER USER ACCESS TOKEN`

    Get User Contacts: - `http://localhost:3000/api/users/contacts?access_token=ENTER USER ACCESS TOKEN`

3. ARTICLES AND COMMENTS API:

  a) GET API (Get all articles) `http://localhost:3000/api/articles/?access_token=ENTER USER ACCESS TOKEN`

  b) POST API (Create an article) `http://localhost:3000/api/articles/?access_token=ENTER USER ACCESS TOKEN`
      request Body Data = { "title": "","content": ""}

  c) GET API (Get All Comments Of User For Particular Article Id)`http://localhost:3000/api/articles/:article_id/comments?access_token=ENTER USER ACCESS TOKEN`

  d) POST API (To Create Comment on Particular Article) `http://localhost:3000/api/articles/:article_id/comments?access_token=ENTER USER ACCESS TOKEN`
    request Body Data {"text": "COMMENT"}

Note:

1. ALL APIS, THEIR FUNCTIONS are written in ./server/api directory.

2. All Config are written in ./server/config/environment/index.js file

3. FOR DATABASE Any SQL database can be used As I used Sequelize ORM to give support for multiple dialect of sql.

4. To Handle Asynchronous nature of NodeJS I have used promises in controller functions.

Submitted By:
Aman Kaushal
Contact: 8989673137
https://www.linkedin.com/in/amankaushaliiitm/



