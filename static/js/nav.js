var beeData;

function getBeeData() {
    let dict = d3.json("/data_api").then(function (data) {
        beeData = data;
        console.log(beeData);

    })
}

getBeeData();

d3.select("#graph2")
    .on("click", function () {
        // Get current event info
        choroplethMap()
    });

d3.select("#datalink")
    .on("click", function () {
        // Get current event info
        getData()
    });