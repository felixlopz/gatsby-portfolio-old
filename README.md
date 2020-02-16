# Gatsby Portfolio
This is my personal portfolio powered by gatsby an contenful

![thumbnail](thumbnail.png)

## Configuration and Installation

### Config
Add a `.env` file to the root folder with  `CONTENTFUL_ACCESS_TOKEN`  and `SPACE_ID` tokens provided by the contentful API, you can se an example at `.env.sample` file

### install
```sh
  npm install -g gatsby-cli
  git clone https://github.com/felixlopz/gatsby-portfolio.git
  cd gatsby-portfolio
  npm install
  # IN CASE OFF ERROR INSTALLING: make sure that you have installed windows build tools https://github.com/felixrieseberg/windows-build-tools 
```

### Available commands
```sh
  gatsby develop #runs development server on http://localhost:8000/
  gatsby build #builds your app
  # for more commands check package.json file
```
