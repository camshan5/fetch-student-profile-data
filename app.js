// Problem: we need a simple way to look at a user's badge count, and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

// 1. Create a web server

// 2. Handle HTTP route GET / and POST / i.e. Home (searching side of things)
  // if url === "/" && GET
    // show search
  // if url === "/" && POST
    // redirect to /:username

// 3. Handle the HTTP route for GET /:username i.e. /camshan5, etc.
  // if url == "/...any thing..."
    // get json from Treehouse
      // on "end"
        // show profile
      // on "error"
        // show error

// 4. Function that handles the reading of files and merge in values
    // read from file and get a string
      // merge values in to a string.