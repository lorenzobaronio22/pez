$(document).ready(function(){
    // sidebar animation handler
    $('#open-close').click(openCloseSidebar);
    $('#sidebar .w3-button').click(hideSidebar);

    // facebook icon animation handler
    $('.facebook').hover(facebookHover, facebookOut);

    // Show/Hide ruoli
    $('.toggle-ruolo').click(showHideRuolo);


    // play carousel
    myIndex = 0;
    carousel();

});

// sidebar animation
function openCloseSidebar() {
    if ($('#sidebar').is(':visible')) {
        $(this).html('&#9776;');
        $('#sidebar').css('display', 'none');
    } else {
        $(this).html('&times;');
        $('#sidebar').css('display', 'block');
    }
}
function hideSidebar() {
        $('#open-close').html('&#9776;');
        $('#sidebar').css('display', 'none');
}

// facebook icon animation
function facebookHover() {
    $(this).attr('src', "/static/img/Facebook.png");
}
function facebookOut() {
    $(this).attr('src', "/static/img/Facebook-Over.png");
}

// carousel animation
function carousel() {
    var i;
    var x = $(".slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3500);
}

function showHideRuolo() {
    var ruolo = $(this).next();
    var freccia = $(this).children("i");
    if (ruolo.is(":visible")) {
        ruolo.hide();
        freccia.removeClass("fa-arrow-up");
        freccia.addClass("fa-arrow-down");
    } else {
        ruolo.show();
        freccia.removeClass("fa-arrow-down");
        freccia.addClass("fa-arrow-up");
    }
}
