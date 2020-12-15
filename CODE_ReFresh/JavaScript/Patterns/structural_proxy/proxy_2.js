class GeoCoder {
   getLatLng(address) {
      console.log(`Getting geo-location of ${address}`);
      if (address === "Amsterdam") {
         return "52.3700° N, 4.8900° E";
      } else if (address === "London") {
         return "51.5171° N, 0.1062° W";
      } else if (address === "Paris") {
         return "48.8742° N, 2.3470° E";
      } else if (address === "Berlin") {
         return "52.5233° N, 13.4127° E";
      } else {
         return "";
      }
   }
}

const GeoProxy = function(){
   const geocoder = new GeoCoder();
   const geocache = {};

   return {
      getLatLng: function(city) {
         if (geocache[city]) return geocache[city];
         geocache[city] = geocoder.getLatLng(city);
         return geocache[city];
      },
      getCount: () => Object.keys(geocache).reduce(acc => ++acc, 0)
   }
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const geo = new GeoProxy();

// geolocation requests

geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log(geo.getCount());
