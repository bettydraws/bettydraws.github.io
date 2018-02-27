Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @bettydraws
 Sign out
0
0 8 bettydraws/imd-learning-tabris
forked from mrmccormack/imd-learning-tabris
 Code  Pull requests 0  Projects 0  Wiki  Insights  Settings
imd-learning-tabris/ 
dice-advanced.js
  or cancel
    
 
1
// This is a simple Tabris.js app. by MR. M. -  Feel free to modify as you please.
2
​
3
const {
4
  Button,
5
  TextView,
6
  ui,
7
  ImageView,
8
  AlertDialog,
9
  app, TextInput
10
} = require('tabris');
11
​
12
const IMAGE_PATH = 'https://bettydraws.github.io/imd-learning-tabris/images/';
13
const MY_GITHUB_REPO = 'https://github.com/bettydraws/imd-learning-tabris'
14
​
15
// global variables
16
let numWins = 0;
17
​
18
// Create a text input field with input finished listener
19
​
20
let userText = new TextInput({
21
  top: 20, left: '20%', right: '20%',
22
  message: 'Your name: '
23
}).on('accept', ({text}) => {
24
  new TextView({
25
    top: 'prev() 20', left: '20%',
26
    text: text
27
  }).appendTo(ui.contentView);
28
}).appendTo(ui.contentView);
29
​
30
let casinoimage = new ImageView({
31
  top: 'prev() 10',
32
  centerX: 0,
33
  image: IMAGE_PATH + 'casino.jpg'
34
}).appendTo(ui.contentView);
35
​
36
let button = new Button({
37
    centerX: 0,
38
    top: 'prev() 10',
39
    text: 'Roll Dice'
40
  })
41
  .on('select', () => {
42
    casinoimage.height = 1;
43
    var rand = 1 + Math.floor(Math.random() * 6);
44
​
45
    image1.image = IMAGE_PATH + rand + '.png';
46
​
47
    if (rand == 6) {
48
      label.text = userText.text + '- WINNER, you got a 6';
49
      numWins = numWins + 1 ;
@bettydraws
Commit changes

Update dice-advanced.js

Add an optional extended description…
  Commit directly to the master branch.
  Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
