var map;

function initMap() {
    load();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18.5,
        center: {lat: 25.769587, lng: -80.364214},
    });

    function loadJSON(file, callback) {   

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
                }
        };
        xobj.send(null);  
        }
        
    
    function load() {
        
        loadJSON("csvjson.json", function(response) {
        
            
            var actual_JSON = JSON.parse(response);
            // console.log(actual_JSON);
            // console.log(Object.keys(actual_JSON).length); // # of times repeated

            //Humidity , AirTemp , Lux , Turbidity , PH , WaterTemp

            humidity = 50; airTemp = 72; lux = 10000; turbidity = 4; phMin = 6.5; phMax = 9; waterTemp = 17;

            var count = 0;
            var color = ""; 

            for (i = 0; i < Object.keys(actual_JSON).length; i++) {

                count = 0;

                console.log(actual_JSON[i].Humidity +","+ humidity)
                console.log(actual_JSON[i].AirTemp +","+ airTemp)
                console.log(actual_JSON[i].Lux +","+ lux)
                console.log(actual_JSON[i].Turbidity +","+ turbidity)
                console.log(actual_JSON[i].PH +","+ phMin +"-"+ phMax)
                console.log(actual_JSON[i].WaterTemp +","+ waterTemp)

                if(actual_JSON[i].Humidity > humidity) count++;
                if(actual_JSON[i].AirTemp > airTemp) count++;
                if(actual_JSON[i].Lux > lux) count++;
                if(actual_JSON[i].Turbidity < turbidity) count++;
                if(actual_JSON[i].PH < phMin || actual_JSON[i].PH > phMax) count++;
                if(actual_JSON[i].WaterTemp > waterTemp) count++;

                console.log("count: " + count)
                if (count < 3) color = "green";
                else if (count == 3) color = "yellow";
                else if (count > 3) color = "red";

                var location = {lat: actual_JSON[i].Lat, lng: actual_JSON[i].Lng,}
                addMarker(location,color);
            }
        });

    }
}

function addMarker(location, color) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: { 
            url: "http://maps.google.com/mapfiles/ms/icons/" + color + ".png" 
        }
    });
}