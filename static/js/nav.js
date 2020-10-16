var beeData;

function getBeeData() {
    let dict = d3.json("/data_api").then(function(data) {
        beeData = data;
        console.log(beeData);

    })
}

getBeeData();
