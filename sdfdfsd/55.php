<?php
/**
 * Created by IntelliJ IDEA.
 * User: anell
 * Date: 26.02.2017
 * Time: 22:12
 */function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33, lng: 151}
  });

  var image = 'images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.890, lng: 151.274},
    map: map,
    icon: image
  });
}