var beeData;

$(document).ready(function () {

  // Get bee data function
  function getBeeData() {
    let dict = d3.json("/data_api").then(function (data) {
      beeData = data;
      console.log(beeData);

    })
  }

  // Plotting stuff //
  function colonyCollapsed(stateInput) {

    var stateData = beeData['State Census Data'];

    // Show only results based on the selected state
    var stateSelect = stateData.filter(s => s['State'] === stateInput);

    console.log(stateSelect);

    // More filter - only included array with the period 
    var period = stateSelect.filter(s =>
      s['Period'] === 'JAN THRU MAR' ||
      s['Period'] === 'APR THRU JUN' ||
      s['Period'] === 'JUL THRU SEP' ||
      s['Period'] === 'OCT THRU DEC'
    );

    console.log(period);

    // Filter for colonies count that is lost d/t CCD -- CHANGE TO stateInput if above works...
    var LossCollapsed = period.filter(s => s['Data Item'] === 'LOSS, COLONY COLLAPSE DISORDER');
    var deadout = period.filter(s => s['Data Item'] === 'LOSS, DEADOUT');

    console.log(deadout);

    // Show only results based on the selected state - Bar plot

    // -------- COLLAPSED -------- //
    // Create trace data for 2016
    var collapse2016 = LossCollapsed.filter(s => s.Year === 2016);

    var trace1 = {
      x: collapse2016.map(i => i['Period']),
      y: collapse2016.map(i => i['Value']),
      type: 'bar',
      name: '2016 - CCD'
    };

    // Create trace data for 2017
    var collapse2017 = LossCollapsed.filter(s => s.Year === 2017);

    var trace2 = {
      x: collapse2017.map(i => i['Period']),
      y: collapse2017.map(i => i['Value']),
      type: 'bar',
      name: '2017 - CCD'
    };

    // -------- DEADOUT -------- //
    // Create trace data for 2016
    var deadout2016 = deadout.filter(s => s.Year === 2016);

    var trace3 = {
      x: deadout2016.map(i => i['Period']),
      y: deadout2016.map(i => i['Value']),
      type: 'bar',
      name: '2016 - Deadout'
    };

    // Create trace data for 2017
    var deadout2017 = deadout.filter(s => s.Year === 2017);

    var trace4 = {
      x: deadout2017.map(i => i['Period']),
      y: deadout2017.map(i => i['Value']),
      type: 'bar',
      name: '2017 - Deadout'
    };

    // Create data plot
    var data = [trace1, trace3, trace2, trace4];

    // Create layout
    var layout = {
      title: "Loss of Bee Colonies by State",
      xaxis: { title: "Period" },
      yaxis: { title: "Number of Colonies Loss" },
      // barmode: "stack"
      margin: { t: 30, l: 150 }
    }

    // Render the scatter plot
    Plotly.newPlot("cynthia", data, layout);
  }
  // --------------------------------------------------------------------------------
  // Functions to make a graph
  function makeGraph(data) {

    var stateName = data.name;
    var capitalStateName = stateName.toUpperCase();

    colonyCollapsed(capitalStateName);

    console.log('makeGraph called ' + data.name);

    $('#alert')
      .text('Click ' + data.name + '')
      .stop()
      .css('backgroundColor', '#FFFFFF')
      .animate({ backgroundColor: '#F5B700' }, 1000);

    var beeColonyLossData = beeData["Bee Colony Loss Data"];
    var beeStateCensus = beeData["State Census Data"] ;
    var beeLossDataByState = beeColonyLossData.filter(o => o.State === data.name);
    var allBeeDatabyState = beeStateCensus.filter(s => s.State === capitalStateName) ;
    var beeStateInventory = allBeeDatabyState.filter(i => i["Data Item"] === "INVENTORY") ;
    var beeStateInventoryMarketYear = beeStateInventory.filter(m => m["Period"] === "MARKETING YEAR") ;

    console.log(beeStateInventory) ;
    console.log(beeStateInventoryMarketYear) ;

    // Plot Year vs. Colonies in graph1 html area
    $('#graph1').text('' + data.name + '');
    var xData = beeLossDataByState.map(o => o.Year);
    var yData = beeLossDataByState.map(o => o.Colonies);

    var trace = {
      x: xData,
      y: yData,
      type: 'scatter',
      mode: 'lines',
      name: 'Colonies',
      line: {
        color: 'rgb(244, 184, 0)',
        width: 2
      }
    };

    var graphData = [trace];

    var layout = {
      title: "Bee Colonies Over Time",
      xaxis: {
        title: 'year'
      },
      yaxis: {
        title: '# of bee colonies'
      }
    };

    Plotly.newPlot("graph1", graphData, layout);

     $('#graph2').text('' +data.name+ '');
  // var xData2 = beeStateInventory.map(y => y.Year) ;
  var xData2 = beeStateInventoryMarketYear.map(y => y.Year) ;
  // var yData2 = beeStateInventory.map(v => v.Value) ;
  var yData2 = beeStateInventoryMarketYear.map(v => v.Value) ;
  var trace2 = 
    {
      x: xData2,
      y: yData2,
      type: 'scatter',
      mode: 'lines',
      name: 'Colonies',
      line:
        {
          color: 'rgb(244, 184, 0)',
          width: 2
        }
    } ;
    var graphData2 = [trace2] ;
    var layout2 = 
    {
      title: "Number of Bee Colonies per Year",
      xaxis: {
        title: 'Year'
      },
      yaxis: {
        title: 'Number of Bee Colonies'
      }
    } ;
    Plotly.newPlot("graph2", graphData2, layout2) ;


  }

 



  // JQuery functions to handle map
  $('#usaMap').usmap({
    'stateSpecificHoverStyles': {
      'HI': { fill: '#0099AA' }
    },

    'mouseoverState': {
      'HI': function (event, data) {
        //return false;
      }
    },

    'click': function (event, data) {
      makeGraph(data)
    }

  });

  $('#over-md').click(function (event) {
    $('#map').usmap('trigger', 'MD', 'mouseover', event);
  });

  $('#out-md').click(function (event) {
    $('#map').usmap('trigger', 'MD', 'mouseout', event);
  });

  // call the getBeeData function
  getBeeData();

});


