var current_light_index = 0;
var max_light_count = 7;
var move = "RIGHT"; // RIGHT or LEFT
var myInterval = null;
var audio = $("#audio")[0];


function updateLightPanel() {

    $(".light").removeClass("lightOn_01");
    $(".light").removeClass("lightOn_02");
    $(".light").removeClass("lightOn_03");

    $(".light").eq(current_light_index).addClass("lightOn_01");

    if( move === "RIGHT") {

        if(current_light_index !== 0) $(".light").eq(current_light_index-1).addClass("lightOn_02");
        if(current_light_index !== 0) $(".light").eq(current_light_index-2).addClass("lightOn_03");

            ++current_light_index;

            if(current_light_index > max_light_count - 2) {
                move = "LEFT";
            }

    } else {

        $(".light").eq(current_light_index+1).addClass("lightOn_02");
        $(".light").eq(current_light_index+2).addClass("lightOn_03");

        --current_light_index;

        if(current_light_index===0) {
            current_light_index = 2
            move = "RIGHT";
        }
    }
}


// starting js for start and end buttons

$("#startBtn").on("click", function () {
    myInterval = setInterval(updateLightPanel, 70);
    audio.play();
});

$("#stopBtn").on("click", function () {
    clearInterval(myInterval);
    audio.pause();
});

// ending js for start and end buttons