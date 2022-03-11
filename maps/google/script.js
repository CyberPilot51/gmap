mapboxgl.accessToken = 'pk.eyJ1IjoiY3liZXIyMSIsImEiOiJjbDBtbm40MWoxMzNmM2JxdGNjZmtvOHRzIn0.OLPda8qpTVVm7sbqFvxbIQ';

navigator.geolocation.getCurrentPosition(succLocation, errorLocation, { 
    enableHighAccuracy: true
})

function succLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation() {
    setupMap([24.75307, -28.72750])

}
function setupMap (center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, 'top-left')
}
