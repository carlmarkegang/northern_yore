var obstacle_transparency = 0;
//obstacle_transparency = 100;

function createObjects(map) {
    if (map == 1) {
        npc_array.push(new create_npc(map, "Uller", 300, 550, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Bjurn", 500, 200, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Marie", 530, 440, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Ulf", 500, 600, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Frigg", 350, 200, 0, 0, ["Press 'E' to talk"]));

        img_house_x = 330;
        img_house_y = 100;
        img_array.push(new create_image(map, "house", img_house_x - (img_house.width / 2 / 2) - 10, img_house_y - (img_house.height / 2 / 2) - 10, img_house.width / 2, img_house.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_x - 50, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x + 20, img_house_y, 50, obstacle_transparency));


        img_house_2_x = 600;
        img_house_2_y = 100;
        img_array.push(new create_image(map, "house2", img_house_2_x - (img_house_2.width / 2 / 2) - 10, img_house_2_y - (img_house_2.height / 2 / 2) - 10, img_house_2.width / 2, img_house_2.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 50, img_house_2_y + 20, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x, img_house_2_y + 20, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x + 40, img_house_2_y, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 100, img_house_2_y - 30, 60, obstacle_transparency));

        obstacle_array.push(new create_obstacle(map, img_house_2_x - 150, img_house_2_y - 50, 70, obstacle_transparency));

        img_tree_1_x = 200;
        img_tree_1_y = 200;
        img_array.push(new create_image(map, "tree1", img_tree_1_x - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 50 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 50 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 70 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 80 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 100 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 120 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));

        obstacle_array.push(new create_obstacle(map, img_tree_1_x, img_tree_1_y - 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 50, img_tree_1_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 120, img_tree_1_y + 100, 50, obstacle_transparency));

        img_rock_1_x = 200;
        img_rock_1_y = 300;
        img_array.push(new create_image(map, "rock1", img_rock_1_x - (img_rock_1.width / 2 / 2) - 10, img_rock_1_y - (img_rock_1.height / 2 / 2) - 10, img_rock_1.width / 2, img_rock_1.height / 2));


        img_grass_1_x = 200;
        img_grass_1_y = 350;
        img_array.push(new create_image(map, "grass1", img_grass_1_x - (img_grass_1.width / 2 / 2) - 10, img_grass_1_y - (img_grass_1.height / 2 / 2) - 10, img_grass_1.width / 2, img_grass_1.height / 2));

        img_fence_1_x = 600;
        img_fence_1_y = 450;
        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x + 70 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - 45 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 80 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 50 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 150 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 100 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 50 - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 160 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 200 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 20;
        fence_placement_y = img_fence_1_y + 250 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        img_oak_x = 640;
        img_oak_y = 590;
        img_array.push(new create_image(map, "oak", img_oak_x - (img_oak.width / 2 / 2) - 10, img_oak_y - (img_oak.height / 2 / 2) - 10, img_oak.width / 2, img_oak.height / 2));

        // Water
        obstacle_array.push(new create_obstacle(map, -50, 500, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 100, 680, 110, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 170, 830, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 450, 880, 200, obstacle_transparency));

    }

    if (map == 2) {
        npc_array.push(new create_npc(map, "Jall", 200, 550, 0, 0, ["Press 'E' to talk"]));


        obstacle_array.push(new create_obstacle(map, 0, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 200, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 400, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 1000, 200, 500, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 1000, 500, 500, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 500, 650, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 0, 800, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 200, 850, 200, obstacle_transparency));

    }

    if (map == 3) {
        npc_array.push(new create_npc(map, "Bjurn_2", 500, 200, 0, 0, ["Press 'E' to confront"]));
        npc_array.push(new create_npc(map, "Marie_2", 530, 440, 0, 0, ["Press 'E' to confront"]));
        npc_array.push(new create_npc(map, "Ulf", 500, 600, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Frigg", 350, 200, 0, 0, ["Press 'E' to confront"]));

        img_house_x = 330;
        img_house_y = 100;
        img_array.push(new create_image(map, "house", img_house_x - (img_house.width / 2 / 2) - 10, img_house_y - (img_house.height / 2 / 2) - 10, img_house.width / 2, img_house.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_x - 50, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x + 20, img_house_y, 50, obstacle_transparency));


        img_house_2_x = 600;
        img_house_2_y = 100;
        img_array.push(new create_image(map, "house2", img_house_2_x - (img_house_2.width / 2 / 2) - 10, img_house_2_y - (img_house_2.height / 2 / 2) - 10, img_house_2.width / 2, img_house_2.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 50, img_house_2_y + 20, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x, img_house_2_y + 20, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x + 40, img_house_2_y, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 100, img_house_2_y - 30, 60, obstacle_transparency));

        obstacle_array.push(new create_obstacle(map, img_house_2_x - 150, img_house_2_y - 50, 70, obstacle_transparency));

        img_tree_1_x = 200;
        img_tree_1_y = 200;
        img_array.push(new create_image(map, "tree1", img_tree_1_x - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 50 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 50 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 70 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 80 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 100 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 120 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));

        obstacle_array.push(new create_obstacle(map, img_tree_1_x, img_tree_1_y - 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 50, img_tree_1_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 120, img_tree_1_y + 100, 50, obstacle_transparency));

        img_rock_1_x = 200;
        img_rock_1_y = 300;
        img_array.push(new create_image(map, "rock1", img_rock_1_x - (img_rock_1.width / 2 / 2) - 10, img_rock_1_y - (img_rock_1.height / 2 / 2) - 10, img_rock_1.width / 2, img_rock_1.height / 2));


        img_grass_1_x = 200;
        img_grass_1_y = 350;
        img_array.push(new create_image(map, "grass1", img_grass_1_x - (img_grass_1.width / 2 / 2) - 10, img_grass_1_y - (img_grass_1.height / 2 / 2) - 10, img_grass_1.width / 2, img_grass_1.height / 2));

        img_fence_1_x = 600;
        img_fence_1_y = 450;
        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x + 70 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - 45 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 80 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 50 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 150 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 100 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 50 - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 160 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 200 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 20;
        fence_placement_y = img_fence_1_y + 250 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        img_oak_x = 640;
        img_oak_y = 590;
        img_array.push(new create_image(map, "oak", img_oak_x - (img_oak.width / 2 / 2) - 10, img_oak_y - (img_oak.height / 2 / 2) - 10, img_oak.width / 2, img_oak.height / 2));

        // Water
        obstacle_array.push(new create_obstacle(map, -50, 500, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 100, 680, 110, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 170, 830, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 450, 880, 200, obstacle_transparency));

    }

    if (map == 4) {
        npc_array.push(new create_npc(map, "Dead-Ottar", 473, 306, 0, 0, ["Press 'E' to take a look"]));

        npc_array.push(new create_npc(map, "Jall", 200, 550, 0, 0, ["Press 'E' to talk"]));

        obstacle_array.push(new create_obstacle(map, 0, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 200, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 400, 0, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 1000, 200, 500, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 1000, 500, 500, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 500, 650, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 0, 800, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 200, 850, 200, obstacle_transparency));


    }

    if (map == 5) {
        npc_array.push(new create_npc(map, "Bjurn_2", 500, 200, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Marie_2", 530, 440, 0, 0, ["Press 'E' to confront"]));
        npc_array.push(new create_npc(map, "Ulf", 677, 278, 0, 0, ["Press 'E' to talk"]));
        npc_array.push(new create_npc(map, "Frigg", 350, 200, 0, 0, ["Press 'E' to confront"]));

        img_house_x = 330;
        img_house_y = 100;
        img_array.push(new create_image(map, "house", img_house_x - (img_house.width / 2 / 2) - 10, img_house_y - (img_house.height / 2 / 2) - 10, img_house.width / 2, img_house.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_x - 50, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x, img_house_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_x + 20, img_house_y, 50, obstacle_transparency));


        img_house_2_x = 600;
        img_house_2_y = 100;
        img_array.push(new create_image(map, "house2", img_house_2_x - (img_house_2.width / 2 / 2) - 10, img_house_2_y - (img_house_2.height / 2 / 2) - 10, img_house_2.width / 2, img_house_2.height / 2));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 50, img_house_2_y + 20, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x, img_house_2_y + 20, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x + 40, img_house_2_y, 60, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_house_2_x - 100, img_house_2_y - 30, 60, obstacle_transparency));

        obstacle_array.push(new create_obstacle(map, img_house_2_x - 150, img_house_2_y - 50, 70, obstacle_transparency));

        img_tree_1_x = 200;
        img_tree_1_y = 200;
        img_array.push(new create_image(map, "tree1", img_tree_1_x - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 50 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 50 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 70 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 80 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));
        img_array.push(new create_image(map, "tree1", img_tree_1_x - 100 - (img_tree_1.width / 2 / 2) - 10, img_tree_1_y + 120 - (img_tree_1.height / 2 / 2) - 10, img_tree_1.width / 2, img_tree_1.height / 2));

        obstacle_array.push(new create_obstacle(map, img_tree_1_x, img_tree_1_y - 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 50, img_tree_1_y + 30, 50, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, img_tree_1_x - 120, img_tree_1_y + 100, 50, obstacle_transparency));

        img_rock_1_x = 200;
        img_rock_1_y = 300;
        img_array.push(new create_image(map, "rock1", img_rock_1_x - (img_rock_1.width / 2 / 2) - 10, img_rock_1_y - (img_rock_1.height / 2 / 2) - 10, img_rock_1.width / 2, img_rock_1.height / 2));


        img_grass_1_x = 200;
        img_grass_1_y = 350;
        img_array.push(new create_image(map, "grass1", img_grass_1_x - (img_grass_1.width / 2 / 2) - 10, img_grass_1_y - (img_grass_1.height / 2 / 2) - 10, img_grass_1.width / 2, img_grass_1.height / 2));

        img_fence_1_x = 600;
        img_fence_1_y = 450;
        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x + 70 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y - 45 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 80 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 50 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 150 - (img_fence_1.width / 2 / 2) - 10;
        fence_placement_y = img_fence_1_y + 100 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence1", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - 50 - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 160 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 100;
        fence_placement_y = img_fence_1_y + 200 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        fence_placement_x = img_fence_1_x - (img_fence_1.width / 2 / 2) - 20;
        fence_placement_y = img_fence_1_y + 250 - (img_fence_1.height / 2 / 2) - 10;
        img_array.push(new create_image(map, "fence2", fence_placement_x, fence_placement_y, img_fence_1.width / 2, img_fence_1.height / 2));
        obstacle_array.push(new create_obstacle(map, fence_placement_x + 40, fence_placement_y + 40, 40, obstacle_transparency));

        img_oak_x = 640;
        img_oak_y = 590;
        img_array.push(new create_image(map, "oak", img_oak_x - (img_oak.width / 2 / 2) - 10, img_oak_y - (img_oak.height / 2 / 2) - 10, img_oak.width / 2, img_oak.height / 2));

        // Water
        obstacle_array.push(new create_obstacle(map, -50, 500, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 100, 680, 110, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 170, 830, 200, obstacle_transparency));
        obstacle_array.push(new create_obstacle(map, 450, 880, 200, obstacle_transparency));

    }
}

