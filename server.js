const http = require("http");
const port = process.env.PORT || 5000;


const slackUsername = 'John Raphael'
const backend = true
const age = 18
const bio = 'I am a backend engineer, skilled in building and creating high standard, accessible and apealing web application. I collaborate with other developers and use git for version control. I love being in a team where the development of everyone is important and essential and where everyone is understood and has the right attitude to work. During my free time i live to play chess, solve the rubik\'s cube and stay around my family '

const userDetails = {
  slackUsername,backend,age,bio
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(userDetails));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ "info": "you have entered a wrong route" }));
  }
});

server.listen(port, () => console.log(`server listening on port ${port}`));
