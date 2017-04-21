<?php
<script>
      var marker;
      function initMap() {
          var uluru = {lat: 50.4117942, lng: 30.5230838};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
       // var image = 'pics/logoBrain.png';
        var marker = new google.maps.Marker({
          position: uluru,
          animation: google.maps.Animation.DROP,
          map: map,
        //  icon: image

        });
        marker.addListener('click', toggleBounce);
      }

      function toggleBounce() {
          if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
          } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
          }
      }