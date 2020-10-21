var beeData;

function getBeeData() {
    let dict = d3.json("/data_api").then(function (data) {
        beeData = data;
        console.log(beeData);

    })
}

getBeeData();

function otherMaps() {
    d3.select("#map").html("<h1>You can put some maps and graphs here!  :)</h1>")
}

function getData() {
    d3.select("#map").html("Maybe put the Bee data in here or add more links to call each table?")
}

d3.select("#graph1")
    .on("click", function () {
        // Get current event info
        otherMaps()
    });

d3.select("#graph2")
    .on("click", function () {
        // Get current event info
        otherMaps()
    });


d3.select("#graph3")
    .on("click", function () {
        // Get current event info
        cloroplethMap()
    });

d3.select("#datalink")
    .on("click", function () {
        // Get current event info
        getData()
    });