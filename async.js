
    var btn = document.getElementById( 'fetch_button' );

    btn.addEventListener( 'click', loadStudents );
    
    function loadStudents() {

        function posi(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var s_date = document.getElementById('s_date').value;
    var e_date = document.getElementById('e_date').value;
        var xhttp = new XMLHttpRequest();
        xhttp.open( "GET", `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${s_date}&end_date=${e_date}&hourly=temperature_2m`    , true );
       xhttp.send();
        xhttp.onload = function(){
            let obj = JSON.parse(this.responseText);
            
            var temp = obj['hourly']['temperature_2m'];
            var hours = obj['hourly']['time'];

            let list= document.getElementById('list');
            let str="";
            for(i in hours){
                str += `<li> ${hours[i]} and temp is: ${temp[i]}</li>`;
            }
            list.innerHTML=str;
        };

    }

    function err (error) {
        alert("error");
        console.log("error is "+error);
    }
        navigator.geolocation.getCurrentPosition(posi, err);
    }