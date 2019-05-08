/* PROPERTIES: this file contains values that the program
 * must read in order to know how the game will work.
   In most games you can't change these directly */

const properties = {
    // what map you wanna play!
    // options include (but aren't limited to):

    // demo_map : a standard, pre-built challenge
    // mini_map : shows off all the tiles you can use to create your own!

    // if you wanna make your own map, follow the pattern in maps.js 
    // and name it whatever you want!

    // can you find the hidden map?
    map: demo_map,

    // x, y coordinates of where the player begins the level. 
    // (0, 0) is upper left for computers, just like where you'd start reading a page of text

    // heads up! challenge maps require 2,2 as starting position! 
    starting_location_x: 2,
    starting_location_y: 2,

    // gravity of the level. 0 = no gravity, 1 = very high gravity
    gravity: 0.3,

    // how bouncy the usual floor is! standard is 1
    bounciness: 1,
    
    // how fast character moves when pressing a button L, R, or Up
    movement_speed: 0.3,
    jump_speed: 6,

    // player can't die. can be either true or false, no quotes
    god_mode: false,


    // player circle color. must be in single quotes. must use Hexadecimal.
    // to find color codes, search ' blue in hexadecimal ' on Google, or whatever color you want!
    player_color: '#ff69b4',

    // what color theme do you want for your game?
    // full list lives in color_presets.js
    map_color_scheme: color_presets.original
}

/*
Helper scripts make the above properties actually work!
*/
const death_script = (properties.god_mode) ? null : 'death';
