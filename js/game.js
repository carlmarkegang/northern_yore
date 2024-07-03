let audioPlayer;
let audioPlaying = false;

let audioPlayer2;
let audioPlaying2 = false;

let resolution = 700;
let activation_range = 40;
let img_ground;
let npc_array = [];
let obstacle_array = [];
let img_array = [];
let player = [];
let cursor = [];
let map = 1;
let fadeTransparancy = 255;
let murderlocationRevealed = false;

let dialogbox_active = false;
let dialogbox_talking_to = "";
let dialogbox_current_dialog = "";
let dialogbox_reply = "";
let dialogbox_answer1 = "";
let dialogbox_answer2 = "";
let dialogbox_answer3 = "";
let dialogbox_current_selected_answer = "";

let img_background;
let img_background_objects;
let img_background_2_objects;
let img_house;
let img_house_2;
let img_player;
let img_npc;
let img_ottar;
let img_grass_1;
let img_rock_1;
let img_tree_1;
let img_fence_1;
let img_fence_2;
let img_oak;

let minigameActive = false;
let minigameChanceOfSurvival = 0;
let minigameChanceOfWinning = 0;
let minigameWon = false;
let minigameLost = false;


function preload() {
    img_background = loadImage("img/background_3-pixel.png");
    img_background_objects = loadImage("img/background_objects.png");
    img_background_2 = loadImage("img/background_2.png");
    img_background_2_objects = loadImage("img/background_2_objects.png");

    img_house = loadImage("img/house-pixel.png");
    img_house_2 = loadImage("img/house_2-pixel.png");
    img_player = loadImage("img/player-pixel.png");
    img_npc = loadImage("img/npc-pixel.png");
    img_ottar = loadImage("img/ottar.png");
    img_grass_1 = loadImage("img/grass_1-pixel.png");
    img_rock_1 = loadImage("img/rock_1-pixel.png");
    img_tree_1 = loadImage("img/tree_1-pixel.png");
    img_fence_1 = loadImage("img/fence-pixel.png");
    img_fence_2 = loadImage("img/fence_2-pixel.png");
    img_oak = loadImage("img/oak-pixel.png");
}

function setup() {
    createCanvas(resolution, resolution);
    noStroke();

    image(img_house, 0, 0);
    image(img_house_2, 0, 0);
    image(img_player, 0, 0);
    image(img_npc, 0, 0);
    image(img_ottar, 0, 0);
    image(img_grass_1, 0, 0);
    image(img_rock_1, 0, 0);
    image(img_tree_1, 0, 0);
    image(img_fence_1, 0, 0);
    image(img_fence_2, 0, 0);
    image(img_oak, 0, 0);

    background(233);

    player.push(new create_player(200, 600, 0, 0));
    cursor.push(new create_cursor(-100, -100));

    textFont("VT323");
    textSize(23);


    createObjects(1);
    createObjects(2);
    createObjects(3);
    createObjects(4);
    createObjects(5);
    dialogbox_talking_to = "Intro";
    dialogbox_current_dialog = "dialog_1";
    player[0].dialog_available = true;
    startDialog();

    audioPlayer = createAudio('sound/gentle-touch-frost-191942.mp3');
    audioPlayer2 = createAudio('sound/knife-stab-pull-7005.mp3');


}

function draw() {
    playerMovement();
    cursor[0].position.x = mouseX;
    cursor[0].position.y = mouseY;

    background(233);
    if (map == 1) {
        image(img_background, 0, 0, resolution, resolution);
        image(img_background_objects, 0, 0, resolution, resolution);
    }
    if (map == 2) {
        image(img_background_2, 0, 0, resolution, resolution);
        image(img_background_2_objects, 0, 0, resolution, resolution);
    }
    if (map == 3) {
        image(img_background, 0, 0, resolution, resolution);
        image(img_background_objects, 0, 0, resolution, resolution);
    }
    if (map == 4) {
        image(img_background_2, 0, 0, resolution, resolution);
        image(img_background_2_objects, 0, 0, resolution, resolution);
    }
    if (map == 5) {
        image(img_background, 0, 0, resolution, resolution);
        image(img_background_objects, 0, 0, resolution, resolution);
        fadeTransparancy += 3;
        audioPlayer.pause();
        if (audioPlaying2 == false) {
            audioPlayer2.play();
        }
        audioPlaying2 = true;
    }


    for (let i = 0; i < img_array.length; i++) {
        if (player[0].position.y >= (img_array[i].position.y + (img_array[i].height / 2))) {
            if (img_array[i].img == "house" && img_array[i].map == map) {
                image(img_house, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "house2" && img_array[i].map == map) {
                image(img_house_2, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "tree1" && img_array[i].map == map) {
                image(img_tree_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "rock1" && img_array[i].map == map) {
                image(img_rock_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "grass1" && img_array[i].map == map) {
                image(img_grass_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "fence1" && img_array[i].map == map) {
                image(img_fence_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "fence2" && img_array[i].map == map) {
                image(img_fence_2, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "oak" && img_array[i].map == map) {
                image(img_oak, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
        }
    }

    stroke(50);
    fill(100);
    image(img_player, player[0].position.x - 7.25, player[0].position.y - 12.25, 14.5, 24.5);
    //ellipse(player[0].position.x, player[0].position.y, player[0].radius * 2, player[0].radius * 2);

    for (let i = 0; i < img_array.length; i++) {
        if (player[0].position.y < (img_array[i].position.y + (img_array[i].height / 2))) {
            if (img_array[i].img == "house" && img_array[i].map == map) {
                image(img_house, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "house2" && img_array[i].map == map) {
                image(img_house_2, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "tree1" && img_array[i].map == map) {
                image(img_tree_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "rock1" && img_array[i].map == map) {
                image(img_rock_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "grass1" && img_array[i].map == map) {
                image(img_grass_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "fence2" && img_array[i].map == map) {
                image(img_fence_2, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "fence1" && img_array[i].map == map) {
                image(img_fence_1, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
            if (img_array[i].img == "oak" && img_array[i].map == map) {
                image(img_oak, img_array[i].position.x, img_array[i].position.y, img_array[i].width, img_array[i].height);
            }
        }
    }

    // Hud
    /* 
    fill(color(30, 30, 30));
    rect(0, 0, 150, 150);
    fill(color(255, 255, 255));
    textAlign(LEFT);
    textSize(18);
    text("Items", 10, 20);
    textSize(16);
    text("\n Good terms: " + player[0].good_terms, 15, 30);
    textSize(23);
    */

    let dialog_available = false;
    for (let i = 0; i < npc_array.length; i++) {
        if (npc_array[i].map == map) {
            stroke(50);
            fill(color(255, 0, 0));
            if (npc_array[i].name == "Dead-Ottar") {
                image(img_ottar, npc_array[i].position.x - 7.25, npc_array[i].position.y - 12.25, 24.5, 14.5);
            } else {
                image(img_npc, npc_array[i].position.x - 7.25, npc_array[i].position.y - 12.25, 14.5, 24.5);
            }

            //ellipse(npc_array[i].position.x, npc_array[i].position.y, player[0].radius * 2, player[0].radius * 2);
            if (DrawNpcDialogIfClose(i)) {
                dialog_available = true;
            }
            collisionCheck(npc_array[i])
        }
    }

    player[0].dialog_available = dialog_available;
    DrawDialogBox(dialogbox_active, dialogbox_reply, dialogbox_answer1, dialogbox_answer2, dialogbox_answer3);


    for (let i = 0; i < obstacle_array.length; i++) {
        if (obstacle_array[i].map == map) {
            stroke(color(0, 255, 0, obstacle_array[i].transparency));
            fill(color(0, 255, 0, obstacle_array[i].transparency));
            ellipse(obstacle_array[i].position.x, obstacle_array[i].position.y, obstacle_array[i].radius * 2, obstacle_array[i].radius * 2);
            collisionCheck(obstacle_array[i])
        }
    }




    // Mini game
    if (minigameActive == true) {
        let offset = 40;
        fill(color(30, 30, 30));
        rect(0, 0, resolution, resolution);

        fill(color(255, 255, 255));
        textAlign(LEFT);
        text("Self esteem", 20, 20);
        fill(color(200, 200, 200));
        rect(offset, 40, (((resolution - (offset * 2)) / 100) * 100), 70);
        fill(color(255, 0, 0));
        rect(offset, 50, (((resolution - (offset * 2)) / 100) * minigameChanceOfSurvival), 50);

        fill(color(255, 255, 255));
        text("Convincing", 20, 170);
        fill(color(200, 200, 200));
        rect(offset, 190, (((resolution - (offset * 2)) / 100) * 100), 70);
        fill(color(2, 48, 32));
        rect(offset, 200, (((resolution - (offset * 2)) / 100) * minigameChanceOfWinning), 50);

        textAlign(CENTER);
        fill(color(255, 255, 255));
        textSize(40);
        text("Press E to withdraw from question", 0, 400, resolution);
        textSize(23);
    }



    // fade effect
    fill(color(0, 0, 0, fadeTransparancy));
    rect(0, 0, resolution, resolution);
    if (fadeTransparancy >= 0 && map != 5) {
        fadeTransparancy -= 1;
    }

    if (fadeTransparancy > 300) {
        textAlign(CENTER, CENTER);
        fill(color(255, 255, 255));
        textSize(40);
        text("Thank you for playing!", 0, (resolution/2), resolution);
    }

    // Cursor
    stroke(50);
    fill(100);
    if (cursor[0].cursor_down) {
        fill(color(255, 0, 0));
    }
    ellipse(cursor[0].position.x, cursor[0].position.y, cursor[0].radius * 2, cursor[0].radius * 2);

}


minigameInterval = setInterval(diceRollMinigame, 1000);

function startMiniGame() {
    minigameActive = true;
    minigameChanceOfSurvival = 100;
    minigameChanceOfWinning = 0;
}

function diceRollMinigame() {
    if (minigameActive == true) {
        minigameChanceOfSurvival -= randomInt(0, 10);
        minigameChanceOfWinning += randomInt(0, 10);

        if (minigameChanceOfWinning >= 100) {
            wonMinigame();
        }
        if (minigameChanceOfSurvival <= 0) {
            lostMinigame();
        }

    }
}

function lostMinigame() {
    minigameActive = false;
    player[0].good_terms = 0;
    dialogbox_current_dialog = "dialog_1_lost";
    DrawDialogBox(true,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .reply")[0].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[0].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[1].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[2].innerText
    )
}

function wonMinigame() {
    minigameActive = false;
    player[0].good_terms += 1;
    dialogbox_current_dialog = "dialog_1_won";
    DrawDialogBox(true,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .reply")[0].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[0].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[1].innerText,
        document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[2].innerText
    )

    setTimeout(function () { obstacle_array.splice(41, 1); }, 2000);
    setTimeout(function () { img_array.splice(24, 1); }, 2000);


}

