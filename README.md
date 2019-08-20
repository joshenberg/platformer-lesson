Platformer Game
---------------

Source code based on Clarity, an open source platformer for Javascript written by @dissimulate

How to run
----------
Open up the folder containing all the files for the game, and double click index.html!
If you want to make an edit, MAKE SURE TO HIT SAVE! Then either hit index.html again or refresh the page and it will pick up your changes.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ A WORD ABOUT THE CODE USED FOR THIS GAME \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Javascript is a web language that is read by your internet browser. The vast majority of websites are some version of it!

Html (Hyper Text Markup Language) tells the browser what to print on your page, and then the Javascript adds little things
here and there to the Html for the parts that move. 

CSS (Cascading Style Sheets) tells the browser how each of the elements is supposed to look on the page, what color they are, size of the font, etc.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ A SHORT LESSON ON DATA STRUCTURES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Everywhere around you are data structures!! It's kind of amazing once you see it. Computers require a formal way to talk about them, but they're basically things you already know and use in your daily life. I'll briefly touch on some of the big ones you'll see here.

Numbers :)
----------
Integers

0, 1, 2, -5, 80, etc, all the way up to 2147483647 (the largest integer a computer can handle using binary). They're just numbers! Whole numbers, specifically.

ex. your age, your house number, the number of toes you have on your left foot

Doubles

0.25, 1.0, -5.3333, etc. Doubles are a way of representing numbers with decimals / fractional components. 

ex. the cost of a candy bar


Collections
------------

Strings!

A String is how you represent words! Actually, not just words, but any ordered collection of Characters (letters, numbers, punctuation, spaces). They MUST be in order. Obviously, my name "Josh" is not the same thing if you re-order the letters to be "hoJs". 

ex. your name, "Market 32", "Dealer.com", any password you have ever used. Technically, all the text you're reading is a biiiig long String.

Lists

One of the more literal data structures. It's a list . . . of things. Now, these things all have to be alike. You can have a list of maps, for example, like in our platformer. You can't have a list where some things are maps and some things are dogs, though. But lists are everywhere! The roster of everyone in this class is a List of Strings. A menu at a restaurant is a List of dishes. 

ex. class roster, any list you can conceive of really

Arrays

Slightly different than lists, arrays have a specific order. Your position in the array (your index) can have an impact on when / how that piece of data will be used.
Arrays can also contain arrays! This creates a 2D array. In this game, maps work by creating a grid of Integers represented by a 2D array, and you can select a point on the grid using coordinates. 

ex. [0, 2, 4, 6, 7, 43, 201023, 1997],   ['lemon', 'orange', 'banana'],    [ ['lemon','lime','orange'], ['broccoli', 'spinach'] ]

Objects

This is a tough one. Anything can be an Object, it just needs to have properties. A dish on a menu is an Object. Every dish will have the properties ingredients and cost. The menu then becomes a List of Objects. Every map in the challenge_maps_map is an Object with the properties name, map_array, and hint. Objects are the bread-and-butter of programming because they can represent almost any concept!

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ DESCRIPTION OF FILES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

index.html
----------
The main page for your website! This tells the browser what to show, and what scripts to load. Feel free to add any text you want!


style.css
---------
This tells the browser how to display each element from your html. Fun fact, I HATE css, but it's still incredibly important!


game_logic.js
--------------
This is the file that runs the game itself. Video games are complicated little machines! They have many things to keep track of at any given time. They also have to handle drawing the video game many times a second (otherwise it wouldn't show up on your screen), the physics of your little character, and key-bindings (the buttons you press!)


game_settings.js
----------------
This is the file that game_logic references to get all the values it needs. If you hit UP, for example, your character will jump the number of blocks represented in the gravity section of game_settings. For everyone's sakes, I took the funnest settings and I put them in edit_this.js, which is just another place those values can live. 


edit_this.js
-------------
This is a file I made for everyone! If you wanna quick change how your game works, head into edit_this and change whatever values you want. Just be careful! Your game will break if you forget to put back all of your commas and semi-colons in the right place. Also, some numbers you choose might be too high or too low for the game (You can't have a negative jump height, for example. Actually, maybe you can?).


color_presets.js
-----------------
These are all the different color schemes that I've created so you can personalize your game! If you want, you can even make your own color scheme so the game will be truly unique. To do this, make sure to copy one of the other color scheme objects EXACTLY, right down to punctuation. Especially punctuation. After that, you can change the hexadecimal codes to whatever you like (Google will help you convert colors to hex-dec). Then, name your new color-scheme something unique, and make sure you reference it in edit_this to see it in effect!


maps.js
-------
This is where all the levels live! If you want to add a map, you should all it to the my_maps Object. Each map in the my_maps object has a name String, a map_array that represents the grid with a number in each spot, and a hint in case you or your user are having trouble!


mapper.js
---------
Actually this one is a secret. If you can figure out what it does just by looking at it, I'll be very impressed!


libraries/lodash.js
-------------------
Actually, this one represents how a lot of coding works! Some team on the internet designed a way to work with all the Objects and values you come across with Javascript, and then they released their solutions for everyone to use. If you wanna use their helpful tools in your code, you just need to include their file like I did here. This is called an external dependency because I didn't write it, but my code still depends on it, even if just a little.






