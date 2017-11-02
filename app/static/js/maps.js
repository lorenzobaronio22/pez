$(document).ready(function(){
    showLocation("#mappa-reggio", 44.7672772, 10.4316505);
    showLocation("#mappa-parma", 44.8454213, 10.4441278);
});

function createStaticMarker( markerColor, markerLabel, lat, lng ){
    return "&markers=color:" + markerColor + "|label:" + markerLabel + "|" + lat + "," + lng;
}

function showLocation(id, lat, lng){
    var zoom = 9;
    var sensor = true;

    var img = $("<img>");
    img.attr( {
        src: "http://maps.google.com/maps/api/staticmap?" +
                "center=" +
                lat + "," +
                lng +
                "&zoom=" + zoom +
                "&size=" + 450 + "x" + 150 +
                createStaticMarker( "blue", "Ufficio", lat, lng ) +
                "&sensor=" + sensor
        } );
    img.addClass("w3-image");

    var anchor = $("<a>");
    anchor.attr({
        href: "google.navigation:q=" + lat +"," + lng
    });

    anchor.html( img );
    $(id).html( anchor );
}
