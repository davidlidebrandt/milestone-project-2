# Milestone Project 2

<img src=""
     alt="Index page of deplyed project"
     style="height: 200px; width: 400px;" />
     
<img src=""
     alt="Index page of deplyed project"
     style="height: 200px; width: 400px;" />

<img src=""
     alt="Index page of deplyed project"
     style="height: 200px; width: 400px;" />

This project is intended to provide an experience which is both fun and challenging. It is a memory game were you are tasked to find
pairs of cards, it tests and trains your memory but also your speed since you only have a limited time to find the next pair of cars.



[Link to the deployed project](https://davidlidebrandt.github.io/milestone-project-2/)

## UX

The "Nerko" font was uses throughout the project to give the site a game-like look. 


### User Stories

* As a user I want clear instructions how to play the game.

* As a user I want clear and intuative ways of navigating the site.

* As a user I want any entering of personal details to be fully optional.

* As a user I want to decide if any sound is going to be played.

* As a user I want both a fun and challenging experience.



#### Wireframes and Mockups




* [Wireframe Mobile](assets/images/wireframes-mockups/wireframe-mobile.png)
* [Wireframe Tablet](assets/images/wireframes-mockups/wireframe-tablet.png)
* [Wireframe Desktop](assets/images/wireframes-mockups/wireframe-desktop.png)

* [Mockup Mobile](assets/images/wireframes-mockups/mockup-mobile.png)
* [Mockup Tablet](assets/images/wireframes-mockups/mockup-tablet.png)
* [Mockup Desktop](assets/images/wireframes-mockups/mockup-desktop.png)
   

## Features

### Existing Features



### Future Features



## Technologies Used

* HTML

* CSS

* JavaScript

* [Bootstrap](https://getbootstrap.com/)


* [Google Fonts](https://fonts.google.com/)

Google fonts was used to import the "Nerko" font which was used throughout the project.

* [Github](https://github.com/)

Github was used to store the repository and to deploy the project

* [Gitpod](https://www.gitpod.io/)

Gitpod was the IDE used to create the project

* [Git](https://git-scm.com/) 

For version control through the gitpod terminal

* [Adobe XD](https://www.adobe.com/products/xd.html)

Adobe XD was used to create the wireframes and mockups for the project


## Testing

All of the testing of the functions and features of the game was done manually, the main way of doing so was to use the console log and printing
out corresponding values during certain parts of the execution of the code. A lot of testing was also done by just
trying out the different functions and seeing if they worked correctly. By clicking the cards in different orders
many bugs and errors in the logic were found which helped a lot.

### A list of tests that where done

* When the sound setting button was pressed a console log message was being printed with the corresponding sound 
setting value to make sure it turned off and on as intended.

* The generateRandomClass function which generates a random class to the cards was tested in the development by adding placeholder
values to the array which would hold these class names and using the console.log function to print them to the screen.

* Both the addScores and printScores function that adds and prints the highscore values were tested by using the console.log function and printing
out the values as they were extracted and stored. The addScores function was tested to work as intened by calling it
with different numbers to make sure it only stored a number that was bigger then the current numbers that were stored.

* The localStorage "clicks" value which keeps track of how many cards are flipped at the same time were tested by
printing a console.log message with that value.

* To find matches of cards the classes of the first cards that was flipped was being stored and then the individual
class were extracted. This was done in multiple steps and after every step a console.log message was printed with the
value of the variable in the current step to make sure it stored the correct value.

* As the cards are flipped the .card class are removed, to make sure this worked as intented the this.className
property was printed with the console.log function.

* To check if the game is finished the localStorage "pairsleft" value was being decremented checked each time a pair was found.
To make sure it decremented the value correctly a console.log message was being printed with the value.



### Bugs

The first bug that occured was that when you returned from the game page to the index page the sound settings were 
still set to what ever the user had chosen before but showed "off" regardless. The soulution was to separate the
javascript for the two pages in to two different files so that the value was initalized to the default value when ever
the user returned home.

Trying to sort the array that displays the different highscores did not work using array.sort() method since that 
method only sorts the items by their first number. The was solved by using the answer from user "dy_" in this stackflow post https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly,
which basically makes a typedArray copy of the array which then can be sorted using the arrays.sort() method.

The general .card class is being removed and added to show the card. A bug that occured was that when adding back 
the .card class when no match was found was that it was added as the last class of the element wich messed up
the logic of the game. The soulution was to add the .card after the other classes in the CSS file, creating
a function which added the class to the elements through a for loop after the other classes was added and then
changing the logic to fit these new conditons.

When trying to "flip" back the card after no match was found the this keyword did not work and the .card class
was not being added back to that element. Still not really sure why but the soulution was to extract the id 
of the element and then using that to add back the .card class.

After the game was finished successfully the timer still counted down and when the time had ran out the modal
for a lost game popped up. The soulution to this was to add a function that resets the timer on certain intervals
and then stopping the execution of that function whenever a new game was started.








## User Stories


## Deployment

The project was deployed on Github Pages on https://github.com/, the following steps were taken:
1. Went to https://github.com/.
2. Chose the right repsitory on the left side of the page.
3. Clicked on the settings icon.
4. Scrolled down to the Github Pages section.
5. Chose the master branch as source and pressed save.
6. Found the link to the deployed project in the Github Pages section after a few minutes.


[Link to the repository](https://github.com/davidlidebrandt/milestone-project-2) <br><br>
[Link to the deployed project](https://davidlidebrandt.github.io/milestone-project-2/)


## Credits 

### Content



### Media



### Acknowledgments

