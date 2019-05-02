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
        {id: 0, colour: '#333', solid: 0}, // dark gray unusable space, outside of map
        {id: 1, colour: '#888', solid: 0}, // light gray normal background
        {id: 2,colour: '#555',solid: 1,bounce: 0.35 * properties.bounciness}, // med gray solid wall/floor
        {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1}, // water
        {id: 4,colour: '#777',jump: 1}, // climbable background (can double/triple/quadruple/x-tuple jump)
        {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1 * properties.bounciness}, // pink bouncy tile
        {id: 6,colour: '#666',solid: 1,bounce: 0}, // darker gray no-bounce wall/floor
        {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'}, // light blue, change's player color 
        {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'}, // yellow goal tile
        {id: 9,colour: '#C93232',solid: 0,script: death_script}, // red lava/death tile
        {id: 10,colour: '#555',solid: 1}, // secret passage tile (wall that can be unlocked)
        {id: 11,colour: '#0FF',solid: 0,script: 'unlock'} // unlock button 
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
        x: properties.starting_loc_x,
        y: properties.starting_loc_y,
        colour: properties.player_color
    },
    
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        change_colour: 'this.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        next_level: 'alert("Yay! You won! Reloading map.");this.load_map(map);',
        death: 'alert("You died!");this.load_map(map);',
        unlock: 'this.current_map.keys[10].solid = 0;this.current_map.keys[10].colour = "#888";'
    }
};

/* Setup of the engine */

var game = new Clarity();
game.set_viewport(canvas.width, canvas.height);
game.load_map(map);

/* Limit the viewport to the confines of the map */

game.limit_viewport = true;

var Loop = function() {

    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    game.update();
    game.draw(ctx);

    window.requestAnimFrame(Loop);
};

/* Start */

Loop();