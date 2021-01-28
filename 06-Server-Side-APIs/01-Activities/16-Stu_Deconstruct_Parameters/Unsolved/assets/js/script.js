fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)

//issues - 10 per Page
//state - currently opened
//sort - what to sort results by. (can either be created, updated, and comments)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.



// https://www.w3schools.com/test/names.asp?name=John&age=30
// after the ? is the query string value => name=John&age=30 is the query string if you don't specify the query string.