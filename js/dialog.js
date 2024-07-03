
function DrawNpcDialogIfClose(i) {
    let distance = Math.sqrt(Math.pow(player[0].position.x - npc_array[i].position.x, 2) + Math.pow(player[0].position.y - npc_array[i].position.y, 2));
    if (distance <= activation_range) {
        npc_array[i].dialog_active = true;
        textAlign(CENTER, CENTER);
        stroke(255);
        strokeWeight(3);
        fill(0);
        var displayText = "";
        if (npc_array[i].name != "") {
            displayText += "[" + npc_array[i].name.replace("-", " ").replace("_2", "") + "]: ";
        }
        displayText += npc_array[i].dialog[npc_array[i].random_dialog];
        text(displayText, npc_array[i].position.x, npc_array[i].position.y - 30);
        dialogbox_talking_to = npc_array[i].name;
        strokeWeight(1);
        return true;
    } else {
        npc_array[i].dialog_active = false;
        return false;
    }
}

function startDialog() {
    if (!dialogbox_active && player[0].dialog_available == true) {
        dialogbox_current_dialog = "dialog_1";
        if (document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog).length > 0) {
            DrawDialogBox(true,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .reply")[0].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[0].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[1].innerText,
                document.querySelectorAll("." + dialogbox_talking_to + " ." + dialogbox_current_dialog + " .answer")[2].innerText
            )
        }
    }
}

function DrawDialogBox(active, reply, answer1, answer2, answer3) {
    dialogbox_active = active;
    dialogbox_reply = reply;
    dialogbox_answer1 = answer1;
    dialogbox_answer2 = answer2;
    dialogbox_answer3 = answer3;
    var defaultbackgroundColor = color(20, 20, 20, 200);
    var defaultButtonColor = color(200, 200, 200, 255);
    var hoverButtonColor = color(100, 100, 100, 255);

    if (dialogbox_active) {
        // Dialog box
        stroke(color(20, 20, 20, 0));
        fill(defaultbackgroundColor);
        rect(50, 50, resolution - 100, resolution - 100);

        // Main text

        textAlign(CENTER, TOP);
        fill(color(255, 255, 255, 255));

        text(dialogbox_talking_to.replace("-", " ").replace("_2", "") + "\n\n" + reply, 100, 70, resolution - 200, resolution - 200);

        dialogbox_current_selected_answer = "";


        if (answer3 != "") {
            fill(defaultButtonColor);
            if (cursor[0].position.x < 100 + resolution - 200 && cursor[0].position.x > 100) {
                if (cursor[0].position.y > resolution - 400 - 20 && cursor[0].position.y < resolution - 300 - 20) {
                    fill(hoverButtonColor);
                    dialogbox_current_selected_answer = "2"
                }
            }
            rect(100, resolution - 400 - 20, resolution - 200, 100);
            textAlign(CENTER, CENTER);
            fill(color(0, 0, 0, 255));
            text(answer3, 100, resolution - 400 - 20, resolution - 200, 100);
        }

        if (answer2 != "") {
            fill(defaultButtonColor);
            if (cursor[0].position.x < 100 + resolution - 200 && cursor[0].position.x > 100) {
                if (cursor[0].position.y > resolution - 300 - 10 && cursor[0].position.y < resolution - 200 - 10) {
                    fill(hoverButtonColor);
                    dialogbox_current_selected_answer = "1"
                }
            }
            rect(100, resolution - 300 - 10, resolution - 200, 100);
            textAlign(CENTER, CENTER);
            fill(color(0, 0, 0, 255));
            text(answer2, 100, resolution - 300 - 10, resolution - 200, 100);
        }

        if (answer1 != "") {
            fill(defaultButtonColor);
            if (cursor[0].position.x < 100 + resolution - 200 && cursor[0].position.x > 100) {
                if (cursor[0].position.y > resolution - 200 && cursor[0].position.y < resolution - 100) {
                    fill(hoverButtonColor);
                    dialogbox_current_selected_answer = "0"
                }
            }
            rect(100, resolution - 200, resolution - 200, 100);
            textAlign(CENTER, CENTER);
            fill(color(0, 0, 0, 255));
            text(answer1, 100, resolution - 200, resolution - 200, 100);
        }

        if (dialogbox_talking_to == "Ulf" && dialogbox_reply == "What are you? Some kind of police?") {
            murderlocationRevealed = true;
        }


        if (dialogbox_talking_to == "Dead-Ottar") {
            player[0].speed = 2;
        }
    }
}


