window.onload = function(){
    let countrybtn = document.getElementById("lookup");
    
    countrybtn.onclick = function(){
        let country = document.getElementById("country").value;
        let result = document.getElementById("result");

        fetch(`http://localhost/info2180-lab5/world.php?country=${country.trim()}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            result.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        })
    }

    let citybtn = document.getElementById("lookup_cities");

    citybtn.onclick = function(){
        let country = document.getElementById("country").value;
        let result = document.getElementById("result");

        fetch(`http://localhost/info2180-lab5/world.php?country=${country.trim()}&lookup=cities`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            result.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}