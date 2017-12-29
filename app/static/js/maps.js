$(document).ready(function(){
    showLocation("#mappa-parma", 44.8452464, 10.4440954);
    showLocation("#mappa-sorbolo", 44.7867689, 10.2890886); // Via Santi Faustino e Giovita, 14/16, 43058 Sorbolo PR
});

function createStaticMarker( markerColor, markerLabel, lat, lng ){
    return "&markers=color:" + markerColor + "|label:" + markerLabel + "|" + lat + "," + lng;
}

function showLocation(id, lat, lng){
    var zoom = 9;
    var sensor = true;
    var api_key="AIzaSyBQCpd1sBrEqAUXE4fbilREy8F5ag1VYlE";

    var img = $("<img>");
    img.attr( {
        src: "http://maps.google.com/maps/api/staticmap?" +
                "center=" +
                lat + "," +
                lng +
                "&zoom=" + zoom +
                "&size=" + 450 + "x" + 150 +
                createStaticMarker( "blue", "Ufficio", lat, lng ) +
                "&sensor=" + sensor +
                "&key=" + api_key
        } );
    img.addClass("w3-image");

    var anchor = $("<a>");
    anchor.attr({
        href: "google.navigation:q=" + lat +"," + lng
    });

    anchor.html( img );
    $(id).html( anchor );
}
