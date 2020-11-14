### Basics of Express

Express is a framework which contains functions and logic which allows us to create an server for an app without worrying about the details of creating one.

Express acts as a middleware, which means that whatever reqeuest is sent to the server it is taken care of by functions which are defined in the Express JS framework. Express allows us to use multiple handlers which in turn allows us to create multiple modules and split our servers functionality into different pieces.

### Understanding middleware concept in express

Express acts as a middleware which means that in between the execution process, we can run functions which will execute in between the process. This is done by using a function **.use(req,res,next)**. Here req and res are the request and response respectively. The third parameter **next()** is a function which allows us to go from one middleware to another. We can define multiple middlewares, within which one of them will have a response eventually. But to go from one middleware to another, it is important to pass next in the function that we pass to the .use() function as a parameter.

### Sending responses in Express

To send responses, we just take the response parameter and use the function **.send()** within which we can send whatever response we want. In the most common case, it will be **res.send()**

### Routing to different routes using middleware

If we want to specify what responses we get based on different routes, then in the **.use(path)** we can pass the path parameter like:
`app.use("/add-product", (req, res, next) => { console.log("In the middleware!"); res.send("<h1>The Add Product Page</h1>"); });`

This indicates that whenever we route to the path "add-product" the page will print "The Add Product Page" as a response.

### Filtering POST and GET requests

We can use app.get() and app.post() to filter out GET and POST requests respectively. They work the same as app.use() otherwise. Similary we can use .delete(), .patch() and .put() for the respective DELETE, PATCH and PUT requests.

### Using express router

You can import express router by importing **express.Router()** into a variable. This is used if you want to define your middleware for different routes in different modules.

### Using path for module routing

path() is a core NodeJS module which allows us to create the path that we want to point to. path.join() specifically concatenates the folder and file names that we insert and then helps redirect to that file. This is easier than writing the paths manually because Linux uses forward slash ("/") in its folder structure and Windows uses backward slash ("\") for its folder structure. **\_\_dirname** is used to refer to the root directory of the file we are currently in, then after that we specify the rest of the path.

For example if we take:
**res.sendFile(path.join(\_\_dirname, "../", "views", "shop.html"));**

Supposing that **shop.js** is in a folder named "routes" and we want to reach another file called **shop.html** in a folder named "views". **\_\_dirname** refers to "routes" here, **../** refers to one step out of the folder, "views" refers to the other folder we need to go into and then again within that we want to reach the file **shop.html**.

We can also use **path.dirname(process.mainModule.filename)** where "mainModule" is the root directory and "filename" is the file that it can search for and find out where it resides. This can be put in a helper function and then called in "app.js" to simplify the code.

### Exposing your code statically

By default, express doesn't show the file path of your code to the public. To do so by convention, you should create a **public** folder and then add a file path to it. Then link a reference to the file you want to expose.
