// // api
// <script>
//   (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
//     key: "YOUR_API_KEY",
//     v: "weekly",
//     // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//     // Add other bootstrap parameters as needed, using camel case.
//   });
// </script>

// // get details using id
// async function getPlaceDetails(Place) {
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//     // Use place ID to create a new Place instance.
//     const place = new Place({
//       id: "ChIJN5Nz71W3j4ARhx5bwpTQEGg",
//       requestedLanguage: "en", // optional
//     });
  
//     // Call fetchFields, passing the desired data fields.
//     await place.fetchFields({
//       fields: ["displayName", "formattedAddress", "location"],
//     });
//     // Log the result
//     console.log(place.displayName);
//     console.log(place.formattedAddress);
  
//     // Add an Advanced Marker
//     const marker = new AdvancedMarkerElement({
//       map,
//       position: place.location,
//       title: place.displayName,
//     });
//   }

// // get photo using id
// const { Place } = await google.maps.importLibrary('places');

// // Use a place ID to create a new Place instance.
// const place = new Place({
//     id: 'ChIJydSuSkkUkFQRsqhB-cEtYnw', // Woodland Park Zoo, Seattle WA
// });

// // Call fetchFields, passing the desired data fields.
// await place.fetchFields({ fields: ['photos'] });

// // Add the first photo to an img element.
// const photoImg = document.getElementById('image-container');
// photoImg.src = place.photos[0].getURI({maxHeight: 400});