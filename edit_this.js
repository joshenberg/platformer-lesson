const properties = {
    // what map you wanna play!
    // options include (but aren't limited to):

    // demo_map : a standard, pre-built challenge
    // challenge_map : might require some editing to succeed
    // jump_map : a jumping challenge
    // mini_map : shows off all the tiles you can use to create your own!

    // if you wanna make your own map, follow the pattern in maps.js 
    // and name it whatever you want!

    map: demo_map,

    // gravity of the level. 0 = no gravity, 1 = very high gravity
    gravity: 0.3,
    
    // how fast character moves when pressing a button L, R, or Up
    movement_speed: 0.3,
    jump_speed: 6,

    // x, y coordinates of where the player begins the level. 
    // (0, 0) is upper left for computers, just like where you'd start reading a page of text
    starting_loc_x: 1,
    starting_loc_y: 8,

    // player circle color. must be in single quotes. must use Hexadecimal.
    // to find color codes, search ' blue in hexadecimal ' on Google, or whatever color you want!
    player_color: '#AA9900',

    // player can't die. can be either true or false, no quotes
    god_mode: false,

    // how bouncy the usual floor is! standard is 1
    bounciness: 1

    // pre-set colors

}

color_presets = {
    gray_mode: {
        0: '#333',
        1: '#888',
        2: '#555',
        3: 'rgba(121, 220, 242, 0.4)',
        4: '#777',
        5: '#E373FA',
        6: '#666',
        7: '#73C6FA',
        8: '#FADF73',
        9: '#C93232',
        10: '#555',
        11: '#0FF'
    },


}

const death_script = (properties.god_mode) ? null : 'death';
