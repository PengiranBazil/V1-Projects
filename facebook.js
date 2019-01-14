var database = [
  {
    username: "Bruce",
    password: "12345"
  },
  {
    username: "Bazil",
    password: "123456"
  },
  {
    username: "Brandon",
    password: "1234567"
  },
  {
    username: "Bathilda",
    password: "1234578"
  },
];

var newsFeed = [
  {
    username: "Je Xun",
    timeline: "Today got zhapfan ah?"
  },
  {
    username: "Weihao",
    timeline: "I go dapao for you!"
  },
  {
    username: "Justin",
    timeline: "Fasting today!!!"
  }
];



function signIn(username, password) {
  for (var i=0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      console.log(newsFeed);
    }
  } else {
    alert ("Sorry, wrong username and password! :(");
  }
   // alert ("Sorry, wrong username and password! :(");
   // signIn(userNamePrompt, passwordPrompt)
}

// function signIn(username, password) {
//   if (database[i].username === username && database[i].password === password) {
//     console.log(newsFeed);
//   } else {
//     alert ("Sorry, wrong username and password! :(");
//     var userNamePrompt = prompt("What's your username?")
//     var passwordPrompt = prompt("What's your password?")
//   }
// }

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

// signIn(userNamePrompt, passwordPrompt)
