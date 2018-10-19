function initMap() {
    var myLatLng = {lat: 25.774311, lng: -80.371441};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng
    });

    // var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: "Click to show location"
    // });

    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    // });

    // var infowindow = new google.maps.InfoWindow({
    // content: myLatLng.lat + "," + myLatLng.lng
    // });

    var myLoc;

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
        myLoc = event.latLng;
     });
     
     function placeMarker(location) {
         var marker = new google.maps.Marker({
             position: location, 
             map: map
         });
         alert('lat long: ' + myLoc);
     }


}