# containers-communication
###### Nodejs application containing two nodejs servers. `Server a` makes a post request
###### with a message to `server b` and it adds more text to the message and returns
###### the altered message in response body to `server a`. `Server a` then returns 
###### the message in its response.

### Topics
* [Dependencies in your machine](#dependencies-in-your-machine)
* [Installation](#installation)
* [Running the application](#running-the-application)

### Dependencies in your machine
- Nodejs
- Docker
- Some application for making requests (Postman, Insomnia, Curl or others)

### Installation
1. Clone project with
```git clone https://github.com/arthurgithub123/containers-communication.git```

### Running the application
1. Start Docker
2. Go to project root folder
3. Execute `npm` to download project dependencies
4. Execute `docker compose up` to create the containers
5. Once the containers are running, make a request,
with `post` verb, for
`http://localhost:11111/api/send_message_to_server_b`
with no request body or
with a request body being:
`{ "message": "Your message here" }`
