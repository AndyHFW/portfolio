function test() {
    document.getElementById("envelopebar").innerHTML = "testing";
}

function envelopeButtonOpen() {
    var top = document.getElementById("envelopetop");
    var bot = document.getElementById("envelopebottom");
    var button = document.getElementById("openbutton");
    var posTop = 0;
    var posButton = 35;
    var posBot = 40;
    var id = setInterval(frame, 20);
    function frame() {
        if (posTop == -40 && posBot == 100) {
            /*top.style.minHeight = "0%";
            bot.style.minHeight = "0%";*/
            button.onclick = envelopeButtonClose;
            clearInterval(id);
        } else {
            posTop -= 1;
            posButton -= 1;
            posBot += 1.5;
            top.style.top = posTop + '%';
            button.style.top = posButton + '%';
            bot.style.top = posBot + '%';
        }
    }
}

function envelopeButtonClose() {
    var top = document.getElementById("envelopetop");
    var bot = document.getElementById("envelopebottom");
    var button = document.getElementById("openbutton");
    var posTop = -40;
    var posButton = -5;
    var posBot = 100;
    var id = setInterval(frame, 20);
    function frame() {
        if (posTop == 0 && posBot == 40) {
            button.onclick = envelopeButtonOpen;
            clearInterval(id);
        } else {
            posTop += 1;
            posButton += 1;
            posBot -= 1.5;
            top.style.top = posTop + '%';
            button.style.top = posButton + '%';
            bot.style.top = posBot + '%';
        }
    }
}

/*$("#openbutton").bind("animationEnd", function () {
    $(this).removeClass("animated");
})

$("#openbutton").hover(function () {
    $(this).addClass("animated");
})*/

/*function buttonSpin(x) {
    var button = document.getElementById("openbutton");
    var angle = button.innerHTML = parseInt(button.getPropertyValue("transform"));
    var angle = 45;
    var id = setInterval(frame, 10);
    function frame() {
        if (x == 1) {
            clearInterval(id);
        } else {
            angle++;
            button.style.transform = "rotate(" + angle + "deg)";
        }
    }
}*/

/*$("#openbutton").mouseenter(function () {
    $(this).addClass("change").delay(5000).queue(function (){
        $(this).removeClass("change").dequeue();
    });
});/*

/*function attachHandlers() {
    document.getElementById("openbutton").onclick = envelopeButtonClick;
}

window.onload = attachHandlers;*/