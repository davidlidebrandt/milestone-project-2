# Milestone Project 2

<img src="assets/images/wireframes-mockups/index.png"
     alt="Index page of deployed project"
     style="height: 200px; width: 400px;" />
     
<img src="assets/images/wireframes-mockups/gamepage.png"
     alt="Game page of deployed project"
     style="height: 200px; width: 400px;" />

<img src="assets/images/wireframes-mockups/gamewon.png"
     alt="Game page when won of deployed project"
     style="height: 200px; width: 400px;" />

<img src="assets/images/wireframes-mockups/gamelost.png"
     alt="Game page when lost of deployed project"
     style="height: 200px; width: 400px;" />

This project is intended to provide an experience which is both fun and challenging. It is a memory game were you are tasked to find
pairs of cards, it tests and trains your memory but also your speed since you only have a limited time to find the next pair of cars.



[Link to the deployed project](https://davidlidebrandt.github.io/milestone-project-2/)

## UX

The purpose of the project is to create a basic memory game where the user is tasked to find pairs of cards.
The user starts the game, all cards are presented and the user can click on the cards to reveal their value.
Another main feature of the game will be that a timer counts down from a certain value and if no pair of cards is
found before it runs out the game will be lost. The game is intended to be both entertaining and useful by testing
and training the users memory and ability to handle the stress of the timer that counts down.

The developer's goal is to showcase a wide variety of software development skills. By using both custom HTML, CSS 
and JavaScript, as well as libraries as JQuery and Bootstrap the developer wish to show proficiency in both writing
own code and taking advantage of ready to go components and functions. The project involves writing logic for the game
, working with the Web Storage API, the EmailJS service as well as the Firebase Firestore database. All intended to showcase
a wide base of software skills. The focus of the project is interactivity which it achieves in many ways by allowing
the player to chose sound and level settings, playing the game, opening and closing modals, starting and restarting
the game and filing out forms.

The "Nerko One" font was uses throughout the project to give the site a game-like look. The icons were chosen
based on the time of the year and hoped to give the user some extra entertainment. The colors were chosen to give
the game some liveliness without being too intrusive. The navigation were kept simple, with links/buttons
named to make their intention clear.

A few notes on the lack of alt attributes and sr-only elements. After considerations the decision was made not to include
these in the game itself. The game would be very hard to play if the icons cannot be seen and since the logic of
the game relies on putting the icons as background images I have decided to keep it this way. A possibly better 
way of doing it would be to put the icons in img tags with alt attributes as back up, but since it is a game which
highly depends on the visual impact the need for this seems less important.

### User Stories

* As a user I want clear instructions how to play the game.

* As a user I want clear and intuitive ways of navigating the site.

* As a user I want any entering of personal details to be fully optional.

* As a user I want to decide if any sound is going to be played.

* As a user I want both a fun and challenging experience.

* As a user I want to be able to see my previous highest scores.

* As a user I want to see how well my scores compare to other users.

#### Wireframes and Mockups

* [Wireframe Mobile](assets/images/wireframes-mockups/wireframe-mobile.png)
* [Wireframe Tablet](assets/images/wireframes-mockups/wireframe-tablet.png)
* [Wireframe Desktop](assets/images/wireframes-mockups/wireframe-desktop.png)

* [Mockup Mobile](assets/images/wireframes-mockups/mockup-mobile.png)
* [Mockup Tablet](assets/images/wireframes-mockups/mockup-tablet.png)
* [Mockup Desktop](assets/images/wireframes-mockups/mockup-desktop.png)
   

## Features

### Existing Features

#### Index page

* A sound setting button where you can turn on and off sounds in the game.

* A dropdown menu where the user can set the level of the game, which changes the amount of time there is 
to find a pair of cards.

* A modal with local high scores which saves data to the Web Storage API.

* A modal that displays a leader board of all users that submitted their scores which connects to the Firebase Firestore database.

* A modal that displays instructions on how to play the game.

* A button that links to the game page and initiates a new game.

#### Game page

* A card game that turns over cards in search of pairs.

* A small menu in the top left corner with a link to the index page and a button that restarts the game.

* A timer at the bottom of the page that counts down time and ends the game if no pair is found in a certain amount of time.
The timer also changes colors when time is beginning to run out, first to yellow then to red.

* A modal that shows up when a game is lost, which contains a link to the index page and a restart game button.

* A modal that shows up when a game is won, which contains a link to the index page and a restart game button. There
are also two forms, one to submit your score to the leader board and one to submit your score to get a email with 
that score through the EmailJS service.


### Future Features

* Option to increase the difficulty of the game. For example adding more cards to the game, limiting the amount of
clicks that are allowed between finding pairs of cards and reducing the time of the timer as the game progresses.

* Adding a new type of card game, for example a game where the player has to remember the positions of a sequence
of cards.

## Technologies Used

* HTML

For the basic structure of the web page.

* CSS

For the styling of the HTML elements.

* JavaScript

To add interactivity to the project.

* [JQuery](https://jquery.com/)

JQuery functions where used to manipulate the DOM and to take actions.

* [Bootstrap](https://getbootstrap.com/)

Bootstrap was mainly used to provide structure to the page and its elements. A ready to go dropdown menu was also
used in the main navigation window on the index page.

* [Google Fonts](https://fonts.google.com/)

Google fonts was used to import the "Nerko One" font which was used throughout the project.

* [Github](https://github.com/)

Github was used to store the repository and to deploy the project.

* [Gitpod](https://www.gitpod.io/)

Gitpod was the IDE used to create the project.

* [Git](https://git-scm.com/) 

For version control through the gitpod terminal.

* [Adobe XD](https://www.adobe.com/products/xd.html)

Adobe XD was used to create the wireframes and mockups for the project.

* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

Chrome DevTools was heavily used throughout the project,  mainly by debugging and testing with help of the console and
checking the responsiveness of the page with their screen rendering tools.

* http://whatismyscreenresolution.net/multi-screen-test 

For testing the responsiveness across different devices.

## Testing

* The CSS was run through the W3C CSS Validation Service https://jigsaw.w3.org/css-validator/ , no errors found.

* The HTML was run through the W3C Markup Validation Service https://validator.w3.org/, no errors found.

* The JavaScript code was run through https://jshint.com/, the only warnings that come up are of let, const and string literals
only being available in ES6 (these warnings can easily be turned off or ignored if ES6 syntax is intended). It also warns about some variables not being defined/used which they are, they are just
located in different JavaScript files.

* The project was tested on three different web browsers: Chrome, Microsoft Edge and Firefox which all worked fine.
Safari was only tested on mobile devices because no larger devices were available during the development process.

* The responsiveness was tested with Chrome DevTools and http://whatismyscreenresolution.net/multi-screen-test , a wide variety of device screens were rendered and tested, from modern phones, tablets, desktops and even a 
a few TV screens. The project looks fine on screens as small as 280 pixels wide, when the screen sizes get smaller
than that the layout is not as nice but the site is still functional.

* The performance was tested on https://www.webpagetest.org/, location was set to Stockholm and the browser was set to
Chrome. 
Results for the index page can be found here: https://www.webpagetest.org/result/210101_DiAM_fb3d6393dfb4b4ca875f25a922116976/,
Results for the game page can be found here: https://www.webpagetest.org/result/210101_DiRW_e24a8b0d3fc19cb957aa8c0ff00b8d86/.
The main issues with the site seems to be related to security and the fact that the custom JavaScript and CSS files
are not cached. The cache warning could possibly be fixed by hosting your CSS and JavaScript on a CDN service, something
I will look into for my next project. As my skills and knowledge increases I will be looking to also fix the security
issues, but as of now it will be left as it is.

All of the testing of the functions and features of the game was done manually, the main way of doing so was to use the console log and printing
out corresponding values during certain parts of the execution of the code. A lot of testing was also done by just
trying out the different functions and seeing if they worked correctly. By clicking the cards in different orders
many bugs and errors in the logic were found which helped a lot. The deployed project was also sent to friends and
family for testing to find bugs and get their opinion on the project.

### Bugs

* The first bug that occurred was that when you returned from the game page to the index page the sound settings were 
still set to what ever the user had chosen before but showed "off" regardless. The solution was to separate the
JavaScript for the two pages in to two different files so that the value was initialized to the default value when ever
the user returned home.

* Trying to sort the array that displays the different high scores did not work using array.sort() method since that 
method only sorts the items by their first number. The was solved by using the answer from user "dy_" in this stackflow post https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly,
which basically makes a typedArray copy of the array which then can be sorted using the arrays.sort() method.

* The general .card class is being removed and added to show the card. A bug that occurred was that when adding back 
the .card class when no match was found was that it was added as the last class of the element which messed up
the logic of the game. The solution was to add the .card after the other classes in the CSS file, creating
a function which added the class to the elements through a for loop after the other classes was added and then
changing the logic to fit these new conditions.

* When trying to "flip" back the card after no match was found the this keyword did not work and the .card class
was not being added back to that element. Still not really sure why but the solution was to extract the id 
of the element and then using that to add back the .card class.

* After the game was finished successfully the timer still counted down and when the time had ran out the modal
for a lost game popped up. The solution to this was to add a function that resets the timer on certain intervals
and then stopping the execution of that function whenever a new game was started. This solution worked but introduced
a new bug, when starting a new game from one of the modal buttons the timer for a short second showed a negative
number. The solution was to remove the above overly complicated solution and just use the clearInterval function
on the timer directly.

* The reset game button did not work properly the first time it was pressed but worked if you pressed it two times.
The reason for this was that a setTimeout function is being called to reset the lastCard variable after two seconds.
When a card was clicked the lastCard variable was being set to that value but then after two seconds it was reset
to the default value which messed up the logic of the game. The solution was use a clearInterval function which
stops the setTimeout function from executing.

### A list of tests/debugs that were done

* When the sound setting button was pressed a console log message was being printed with the corresponding sound 
setting value to make sure it turned off and on as intended.

* The generateRandomClass function which generates a random class to the cards was tested in the development by adding placeholder
values to the array which would hold these class names and using the console.log function to print them to the screen.

* Both the addScores and printScores function that adds and prints the high score values were tested by using the console.log function and printing
out the values as they were extracted and stored. The addScores function was tested to work as intended by calling it
with different numbers to make sure it only stored a number that was bigger then the current numbers that were stored.

* The localStorage "clicks" value which keeps track of how many cards are flipped at the same time were tested by
printing a console.log message with that value.

* To find matches of cards the classes of the first cards that was flipped was being stored and then the individual
class were extracted. This was done in multiple steps and after every step a console.log message was printed with the
value of the variable in the current step to make sure it stored the correct value.

* As the cards are flipped the .card class are removed, to make sure this worked as intended the this.className
property was printed with the console.log function.

* To check if the game is finished the localStorage "pairsleft" value was being decremented checked each time a pair was found.
To make sure it decremented the value correctly a console.log message was being printed with the value.

* The sound setting was tested by pressing the button and starting the game, both values were tested multiple times
by going back and forth and changing the order of on and off states. No issues were found.

* The modals in the main window were tested by opening and closing them multiple times, all worked fine.

* The high scores feature was tested to work properly by playing the game and scoring different scores and checking 
that only the highest values were being printed. No problems found, only the right scores are being printed.

* The leader board feature was being tested by adding scores to the database and checking to see which values were
being printed. No issues found, the right values were printed and only five users were shown which was the
intention. 

* The home link and restart button in the navigation menu was tested several times to ensure they work as intended.
All issues found resolved and working fine.

* The game has been played numerous times, the issues that were found has been resolved and no new bugs has 
appeared.

* The function of submitting the score was tested by submitting scores and checking the Firestore database
to see if the scores were being saved, which they were.

* The function of the submitting an email address and receiving the score of the game was tested several times, no
issues found, the score was being sent every time it was tested.

* The home links and the restart game buttons from the modals were tested several times. The issues that 
were found earlier were resolved and no further issues found.

* The forms were tried to be submitted without filling out and email address or user name. Did not succeed 
which was as intended, email address/username is required.

* The links to the external sites was tested: works and opens in a new tab as intended.

### User Stories

* As a user I want clear instructions how to play the game.

There is and easily accessible modal on the index page with clear instructions on how to play the game.

* As a user I want clear and intuitive ways of navigating the site.

The navigation through the site is made simple, from the index page all settings, instructions, high score tables etc 
are easily accessed through the main menu. From the same menu the game is started. On the game page there is 
a small menu bar in the top left corner were the user can return to the index page or restart the game, the menu
is easy to find an looks the same across different devices. When a game is finished there are two easily found 
links/buttons which leads back to the index page or starts a new game.

* As a user I want any entering of personal details to be fully optional.

Entering any information is fully optional and not required to play the game. To receive an email with their score
or to have a chance to appear on the leader board a user have the possibility to enter their details and submitting
them after the game is already finished.

* As a user I want to decide if any sound is going to be played.

The default sound setting is off in the game, the user self decides if any sound is going to be played. Even as a 
user returns to the index page having already played a game the sound setting returns to the default off to 
prevent any unwanted disturbance.

* As a user I want both a fun and challenging experience.

The game requires the use of memory and speed as well as handling the stress of the time on the timer running
out. Changing the levels really makes a difference in the difficulty of the game.

* As a user I want to be able to see my previous highest scores.

There is a high scores modal which shows the five highest scores obtained from the current web browser.

* As a user I want to see how well my scores compare to other users.

There is a leader board modal that displays the five highest scores obtained by users who has submitted their score
and user name.

## Deployment

### Publishing the project
The project was deployed on Github Pages on https://github.com/, the following steps were taken:
1. Went to and logged in to https://github.com/.
2. Chose the right repository on the left side of the page.
3. Clicked on the settings icon.
4. Scrolled down to the Github Pages section.
5. Chose the master branch as source and pressed save.
6. Found the link to the deployed project in the Github Pages section after a few minutes.

[Link to the repository](https://github.com/davidlidebrandt/milestone-project-2) <br><br>
[Link to the deployed project](https://davidlidebrandt.github.io/milestone-project-2/)

### Forking the project
1. Go to and log in to https://github.com/.
2. Go to the repository: https://github.com/davidlidebrandt/milestone-project-2
3. Press the fork button located on the right side.
4. Make your changes to the project.
5. If you wish to merge your changes to the original project:
6. Press the pull request button from your forked repository.
7. Press the button new pull request.
8. Choose the branches you wish to merge.
9. Press the Create pull request button.

### Cloning the project
There are several ways of cloning the project, here I am going to describe how to do it using
the URL and Git Bash.
1. Go to the repository: https://github.com/davidlidebrandt/milestone-project-2
2. Click the Code button.
3. Choose HTTPS and copy the link that is provided.
4. Open Git Bash and navigate to the directory where you want to save the cloned project.
5. Type git clone followed by the url you copied, git clone https://github.com/davidlidebrandt/milestone-project-2.git

## Credits 

### Content

All of the content was created by the developer.

### Media

The sound came from https://www.zapsplat.com/  https://www.zapsplat.com/?s=click&post_type=music&sound-effect-category-id=.

The Christmas icons came from https://www.flaticon.com/, by author https://www.flaticon.com/authors/pongsakornred.

The smiley icons came from https://pixabay.com/ https://pixabay.com/sv/vectors/leende-smiley-glad-gul-ansikte-98458/
https://pixabay.com/sv/vectors/ledsen-missn%C3%B6jda-f%C3%B6rl%C3%A5t-tr%C3%B6stl%C3%B6st-98457/

The image on the index page came from user Pixabay on
https://www.pexels.com/photo/snow-covered-ground-60561/

### Acknowledgments

Thanks to my tutors and my mentor at Code Institute for help throughout the project. I would also like to thank 
the community on Slack for valuble input regarding the project.