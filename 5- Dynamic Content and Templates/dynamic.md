### Templating engines

We can use templating engines along with Express such as EJS, PUG and Handlebars which create a skeleton for HTML and then allow us to write the HTML code that we want to on top of that. All that changes between these three is the placeholders (which is the way the code is to be written, between paranthesis etc.). PUG is the most minimal one which works along with Express.

### Installing the template in Express

If we were using NodeJS alone to host our server, we would need to manually do a lot of work to implement these templates. But because of the ease that Express provides, we can simply plug it in using the **app.set()** function. This allows us to set values globally throughout the application. In this we use two main functions, **view engine** and **views**. **view engine** tells Express to use these Dynamic templating engines and **views** tells Express where these Dynamic templating engines exist. This type of setup only works with templating engines which ship with Express in-built however.

### Installing PUG

If we want to install PUG, because it is already mostly built-in, in our app.js file we need to set **view engine** to **pug** and **views** to the folder which we are holding all our pug files in.

`app.set("view engine", "pug");`
`app.set("views", "views");`

### Installing Express hanlderbars

Because express handlerbars isn't built into Exrpess, we need to import it first using
`const expressHBS = require("express-handlebars");`

and then call the engine using
`app.engine("handlebars", expressHBS());`
`app.set("view engine", "handlebars");`
`app.set("views", "views");`

### Installing EJS

Just like PUG, EJS comes in-built with Express JS.

So to set it up, we

`app.set("view engine", "ejs");`
`app.set("views", "views");`
