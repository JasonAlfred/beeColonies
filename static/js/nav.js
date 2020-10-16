var beeData;

function getBeeData() {
<<<<<<< Updated upstream
    let url = `http://127.0.0.1:5000/data_api`;
    let dict = d3.json(url).then(function (data) {
        console.log(data);
=======
    let dict = d3.json("/data_api").then(function(data) {
        beeData = data;
        console.log(beeData);

>>>>>>> Stashed changes
    })
}

getBeeData();
