$(function() {
  $(".fourth-page-image, .sixth-page-image").on({
    mouseenter: function() {
      $(this).attr('src', 'image/image8_1.jpg');
      $(this).css('transition', '2s');
    },
    mouseleave: function() {
      $(this).attr('src', 'image/image8.jpg');
      $(this).css('transition', '2s');
    }
	});
});

$(function() {
	$(".seventh-page-image, .fifth-page-image").on({
    mouseenter: function() {
      $(this).attr('src', 'image/image9_1.jpg');
      $(this).css('transition', '2s');
    },
    mouseleave: function() {
      $(this).attr('src', 'image/image9.jpg');
      $(this).css('transition', '2s');
    }
	});
});

// Integrating MAP

function initMap() {
        // Styles a map in night mode.
  var location =  {lat: 12.9716, lng: 77.5946}
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location ,
    zoom: 12,
    scaleControl: false,
    zoomControl: false,
    scrollwheel: false,
    styles: [
  	{
	    "featureType": "administrative",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#444444"
	      }
	    ]
	  },
	  {
	    "featureType": "landscape",
	    "stylers": [
	      {
	        "color": "#f2f2f2"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "stylers": [
	      {
	        "saturation": -100
	      },
	      {
	        "lightness": 45
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#e73408"
	      },
	      {
	        "weight": 0.5
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "stylers": [
	      {
	        "visibility": "simplified"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#b0b0b0"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "stylers": [
	      {
	        "color": "#46bcec"
	      },
	      {
	        "visibility": "on"
	      }
	    ]
	  }
	]
	});


     var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: 'image/marker.png',
        });
}

// for videop player

var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;

  onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '670px',
      width: '100%',
      videoId: 'J4rBDsimsmQ', // youtube video id
      playerVars: {
          'autoplay': 0,
          'rel': 0,
          'showinfo': 0,
          'modestbranding': 1,
          'autohide': 2,
          'border': 0,

          'enablejsapi': 1,
          'controls': 2
      },
      events: {
       	'onStateChange': onPlayerStateChange
      }
    });
  }

  onPlayerStateChange = function(event) {
      if (event.data == YT.PlayerState.ENDED) {
      }
  }
