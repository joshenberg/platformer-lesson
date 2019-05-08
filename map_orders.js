
function get_next_map (index) {

    switch (index){
        case 0:
            return cant_reach;
        case 1:
            return jump_map;
        case 2:
            return lava_map;
        case 3:
            return flappy_bird;
        case 4: 
            return the_maze;
        case 5: 
            return the_block;
    }
    

    return properties.map;
}

