window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        return window.setTimeout(callback, 1000 / 60);
};

var canvas = document.getElementById('canvas'),
    ctx    = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

/* Customisable map data */


var map = {

    tile_size: 16,

    /*
    
    Key vairables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    

    keys: [
        {id: 0, colour: properties.map_color_scheme[0], solid: 0}, // dark gray unusable space, outside of map
        {id: 1, colour: properties.map_color_scheme[1], solid: 0}, // light gray normal background
        {id: 2,colour: properties.map_color_scheme[2],solid: 1,bounce: 0.35 * properties.bounciness}, // med gray solid wall/floor
        {id: 3,colour: properties.map_color_scheme[3],friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1}, // water
        {id: 4,colour: properties.map_color_scheme[4],jump: 1}, // climbable background (can double/triple/quadruple/x-tuple jump)
        {id: 5,colour: properties.map_color_scheme[5],solid: 1,bounce: 1.1 * properties.bounciness}, // pink bouncy tile
        {id: 6,colour: properties.map_color_scheme[6],solid: 1,bounce: 0}, // darker gray no-bounce wall/floor
        {id: 7,colour: properties.map_color_scheme[7],solid: 0,script: 'change_colour'}, // light blue, change's player color 
        {id: 8,colour: properties.map_color_scheme[8],solid: 0,script: 'change_map'}, // yellow goal tile
        {id: 9,colour: properties.map_color_scheme[9],solid: 0,script: death_script}, // red lava/death tile
        {id: 10,colour: properties.map_color_scheme[10],solid: 1}, // secret passage tile (wall that can be unlocked)
        {id: 11,colour: properties.map_color_scheme[11],solid: 0,script: 'unlock'} // unlock button 
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    data: properties.map,

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: properties.gravity
    },
    
    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: properties.jump_speed,
        left: properties.movement_speed,
        right: properties.movement_speed
    },
    
    /* The coordinates at which the player spawns and the colour of the player */

    player: {
        x: properties.starting_location_x,
        y: properties.starting_location_y,
        colour: properties.player_color
    },

    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        change_colour: 'this.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        change_map: 'alert("You win! Now onto the next level"); this.load_map(next_map); next_map_index++;',
        next_level: 'alert("Yay! You won! Reloading map.");this.load_map(map);',
        death: 'alert("You died!");this.load_map(map);',
        unlock: 'this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = "#888";'
    }
};

var next_map = {...map};
var next_map_index = 0;

console.log('original next_map.data', next_map.data);

/* Setup of the engine */

var game = new Clarity();
game.set_viewport(canvas.width, canvas.height);
game.load_map(map);

/* Limit the viewport to the confines of the map */

game.limit_viewport = true;

var Loop = function() {

    if (is_challenge_map(next_map.data)) {
        next_map = {...next_map, data: get_next_map(next_map_index)};
    }

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    game.update();
    game.draw(ctx);

    window.requestAnimFrame(Loop);
};

/* Start */

Loop();