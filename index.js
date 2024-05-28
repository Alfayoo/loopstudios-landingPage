function show() {
    $(".sideBar").css("display", "flex");
    $(".show").css("display", "none");
}

function hide() {
    $(".sideBar").css("display", "none");
    $(".show").css("display", "inline-block");
}
let button = $("#creation-section > div.creation-header > button");
button.click(function(){
    if(button.text() === 'See All'){
    $(".displayNone").addClass("displayGrid");
    $(".displayNone").removeClass("displayNone");
    button.text("Collapse");
    } else if(button.text() === 'Collapse'){
        $(".displayGrid").addClass("displayNone");
        $(".displayGrid").removeClass("displayGrid");
        button.text("See All");
    }
});

if($(window).innerWidth() > 850 && $(window).innerWidth() < 1060 ){
    $("#creation-section > div.creation-content > div:nth-child(4)").addClass("displayNone");
}
