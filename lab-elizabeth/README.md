##About

This is an HTTP server set up to give back messages based on requests by the user!

you can

##Setting up a server

you need to have Node installed, of course.

You can go to https://nodejs.org/ download from there, extract the file and install.

Then, you need to go to the directory containing the server.js file and open it using node with the command `PORT=<your-port-number> node server.js` this will automatically start your server in the port you choose, you can also choose to enter just `node server.js` and it will automatically open the server on port 3000 for you.

to exit the server, you simply need to hold ctrl and press C.

##Making requests to the Server

You will need to make sure that you have HTTPie installed:

You can go to https://httpie.org/ and follow their directions.

You can make GET requests to see text from the server by typing in:
`http GET :<server port number>/cowsay text=="<whatever you want it to say here>"`

You can make POST requests by typing-in:
`http POST :<server port number>/cowsay text=="<whatever you want it to say here>"`

You will exit the server automatically each time you make a request.

##Fun Stuff!

you can have some fun with the cow in this server!

if you want to change the eyes, just add `e==<whatever two symbols you want>`
if you want to give it a "tongue", just add `t==<whatever two symbols you want>`

you can also choose to have an entirely different character saying the text!

you simply need to add `f==<one of the names listed below>`

here is a list to try-out:

bunny
doge
dragon
eyes
ghostbusters
goat
koala
moofasa
moose
sheep
small
stegosaurus
turkey
turtle
tux
vader
