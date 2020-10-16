var beeData;

$(document).ready(function() {

    // Get bee data function
    function getBeeData() {
        let dict = d3.json("/data_api").then(function(data) {
            beeData = data;
            console.log(beeData);
    
        })
    }

    // Functions to make a graph
    function makeGraph(data) {
        console.log('makeGraph called ' + data.name);

        $('#alert')
          .text('Click '+data.name+'')
          .stop()
          .css('backgroundColor', '#FFFFFF')
          .animate({backgroundColor: '#0099CC'}, 1000);

        var beeColonyLossData = beeData["Bee Colony Loss Data"];
        var beeDataState = beeColonyLossData.filter(o => o.State === data.name);
        //console.log(beeDataState);

        // TODO Plot Year vs. Colonies in graph1 html area
        $('#graph1').text('' +data.name+ '');
        var xData = beeDataState.map(o => o.Year);
        var yData = beeDataState.map(o => o.Colonies);

        var trace = {
            x: xData,
            y: yData,
            type: "lines"
        };

        var graphData = [trace];

        var layout = {
            title: "Bee Colonies Over Time"
        };

        Plotly.newPlot("graph1", graphData, layout);

    }

    // JQuery functions to handle map
    $('#usaMap').usmap({
      'stateSpecificHoverStyles': {
        'HI' : {fill: '#0099AA'}
      },
      
      'mouseoverState': {
        'HI' : function(event, data) {
          //return false;
        }
      },
      
    //   'click' : function(event, data) {
    //     $('#alert')
    //       .text('Click '+data.name+'')
    //       .stop()
    //       .css('backgroundColor', '#FFFFFF')
    //       .animate({backgroundColor: '#0099CC'}, 1000);

    //     $('#graph1').text('' +data.name+ '');

    //   }
      'click' : function(event, data) { 
          makeGraph(data)
      }

    });
    
    $('#over-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });
    
    $('#out-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });

    // call the getBeeData function
    getBeeData();

  });


