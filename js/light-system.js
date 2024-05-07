var current_light_index = 0;
var max_light_count = 7;
var move = "RIGHT"; // RIGHT or LEFT
var myInterval = null;


function updateLightPanel() {

    $(".light").removeClass("lightOn_01");
    $(".light").removeClass("lightOn_02");
    $(".light").removeClass("lightOn_03");

    $(".light").eq(current_light_index).addClass("lightOn_01");

    if( move === "RIGHT") {

        if(current_light_index !== 0) {
            $(".light").eq(current_light_index-1).addClass("lightOn_02");

            ++current_light_index;

            if(current_light_index>max_light_count - 2) {
                move = "LEFT";
            }
        }

    } else {

        $(".light").eq(current_light_index+1).addClass("light_on2");

        --current_light_index;

        if(current_light_index===0) {
            move = "RIGHT";
        }
    }
}

$("#startBtn").on("click", () => {
    myInterval = setInterval(updateLightPanel, 50);
    $("#audio")[0].play();
});

$("#stopBtn").on("click", () => {
    myInterval = clearInterval(myInterval);
    $("#audio")[0].pause();
});
