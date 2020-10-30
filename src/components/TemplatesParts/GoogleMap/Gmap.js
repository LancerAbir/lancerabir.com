import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Gmap extends Component {
   setMapProperties(map, maps) {
      new maps.Marker({
         position: { lat: 23.661168, lng: 90.161465 },
         map,
         title: "Valencia",
      });

      const directionsService = new maps.DirectionsService();
      const directionsDisplay = new maps.DirectionsRenderer();

      const directionRequest = {
         origin: { lat: 23.661168, lng: 90.161465 },
         destination: "Nowabganj",
         travelMode: "DRIVING",
      };

      directionsService.route(directionRequest, function (response, status) {
         if (status === "OK") {
            // everything is ok
            directionsDisplay.setDirections(response);
         } else {
            // something went wrong
            // window.alert("Directions request failed due to " + status);
         }
      });

      directionsDisplay.setMap(map);
   }

   render() {
      var defaultProps = {
         center: {
            lat: 23.661168,
            lng: 90.161465,
         },
         zoom: 1,
      };

      return (
         // Important! Always set the container height explicitly
         <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: this.props.API_KEY }}
               defaultCenter={defaultProps.center}
               defaultZoom={12}
               onGoogleApiLoaded={({ map, maps }) =>
                  this.setMapProperties(map, maps)
               }
            ></GoogleMapReact>
         </div>
      );
   }
}

export default Gmap;
