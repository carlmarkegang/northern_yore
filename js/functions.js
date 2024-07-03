function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function collisionCheck(obstacle) {
    let d = p5.Vector.dist(player[0].position, obstacle.position);

    if (d < player[0].radius + obstacle.radius) {
        let shift = p5.Vector.sub(player[0].position, obstacle.position);
        shift.setMag(player[0].radius + obstacle.radius - d);
        player[0].position.add(shift);

    }
}

function mousePressed() {
    cursor[0].cursor_down = true;

    if (audioPlaying == false) {
        audioPlaying = true;
        audioPlayer.play();
        audioPlayer.volume(0.2)
    }
}

function mouseReleased() {
    cursor[0].cursor_down = false;

    if (dialogbox_active && dialogbox_current_selected_answer != "" && minigameActive == false) {
        dialogbox_current_dialog = document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[dialogbox_current_selected_answer].classList[1];
        if (dialogbox_current_dialog == "dialog_confrontation") {
            startMiniGame();
            DrawDialogBox(false, "", "", "", "")
        } else if (dialogbox_current_dialog == "dialog_close") {
            DrawDialogBox(false, "", "", "", "")
        } else {
            DrawDialogBox(true,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .reply")[0].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[0].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[1].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[2].innerText
            )
        }

        dialogbox_current_selected_answer = "";
    }
}

function randommize() {
    for (let i = 0; i < npc_array.length; i++) {
        if (npc_array[i].dialog_active == false) {
            npc_array[i].random_dialog = randomInt(0, npc_array[i].dialog.length - 1)
        }
    }

}
setInterval(randommize, 1000);

function playerMovement() {

    if (dialogbox_active || minigameActive) {
        return;
    }

    if (keyIsDown(LEFT_ARROW) === false && keyIsDown(RIGHT_ARROW) === false && keyIsDown(65) === false && keyIsDown(68) === false) {
        player[0].vel_x = 0;
    }
    if (keyIsDown(UP_ARROW) === false && keyIsDown(DOWN_ARROW) === false && keyIsDown(87) === false && keyIsDown(83) === false) {
        player[0].vel_y = 0;
    }
    if (keyIsDown(LEFT_ARROW) === true || keyIsDown(65) === true) {
        player[0].vel_x = -player[0].speed;
    }
    if (keyIsDown(RIGHT_ARROW) === true || keyIsDown(68) === true) {
        player[0].vel_x = player[0].speed;
    }
    if (keyIsDown(UP_ARROW) === true || keyIsDown(87) === true) {
        player[0].vel_y = -player[0].speed;
    }
    if (keyIsDown(DOWN_ARROW) === true || keyIsDown(83) === true) {
        player[0].vel_y = player[0].speed;
    }
    player[0].position.x += player[0].vel_x;
    player[0].position.y += player[0].vel_y;

    if (player[0].position.x >= 700) {
        if (murderlocationRevealed) {
            map = 4;
        } else {
            map = 2;
        }

        player[0].position.x = 0;
        player[0].position.y = 245;
    }
    if (player[0].position.x < 0) {
        if (map == 4) {
            map = 5;
            player[0].position.x = 699;
            player[0].position.y = 245;
            return;
        }
        map = 3;
        player[0].position.x = 699;
        player[0].position.y = 245;
    }
}


function keyReleased() {
    // Interact button pressed
    if (key === 'e') {
        if (minigameActive == true) {
            minigameActive = false;
            return;
        }
        startDialog();

    }
}
