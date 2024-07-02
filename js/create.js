function create_player(x, y, vel_x, vel_y) {
    this.position = new p5.Vector(x, y);
    this.vel_x = vel_x;
    this.vel_y = vel_y;
    this.radius = 10;
    this.speed = 1;
    this.dialog_available = false;
    this.good_terms = 0;
}

function create_cursor(x, y) {
    this.position = new p5.Vector(x, y);
    this.radius = 5;
    this.cursor_down = false;
}

function create_npc(map, npc_name, x, y, vel_x, vel_y, dialog) {
    this.map = map;
    this.name = npc_name;
    this.position = new p5.Vector(x, y);
    this.vel_x = vel_x;
    this.vel_y = vel_y;
    this.radius = 10;
    this.dialog = dialog;
    this.random_dialog = 0;
    this.dialog_active = false;
}

function create_obstacle(map, x, y, radius, transparency) {
    this.map = map;
    this.position = new p5.Vector(x, y);
    this.radius = radius;
    this.transparency = transparency;
}

function create_image(map, img, x, y, width, height) {
    this.map = map;
    this.img = img;
    this.position = new p5.Vector(x, y);
    this.width = width;
    this.height = height;
}
