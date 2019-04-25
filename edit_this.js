const properties = {
    map: jump_map,

    // gravity of the level. 0 = no gravity, 1 = very high gravity
    gravity: 0.3,
    
    // how fast character moves when pressing a button L, R, or Up
    movement_speed: 0.3,
    jump_speed: 6,

    // x, y coordinates of where the player begins the level. 
    // (0, 0) is upper left for computers, just like where you'd start reading a page of text
    starting_loc_x: 2,
    starting_loc_y: 2,

    // player circle color. must be in single quotes. must use Hexadecimal.
    // to find color codes, search ' blue in hexadecimal ' on Google, or whatever color you want!
    player_color: '#AA9900',

    // player can't die
    god_mode: false

}
