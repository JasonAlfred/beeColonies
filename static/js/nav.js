function getBeeData() {
    let url = `http://127.0.0.1:5000/data_api`;
    let dict = d3.json(url).then(function (data) {
        console.log(data);
    })
}

getBeeData();