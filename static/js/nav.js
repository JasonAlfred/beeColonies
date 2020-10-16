var beeData;

function getBeeData() {
    let dict = d3.json("/data_api").then(function(data) {
        beeData = data;
        console.log(beeData);

    })
}

$(document).ready(function() {
    $('#usaMap').usmap({
      'stateSpecificStyles': {
        'AK' : {fill: '#0099CC'}
      },
      'stateSpecificHoverStyles': {
        'HI' : {fill: '#0099CC'}
      },
      
      'mouseoverState': {
        'HI' : function(event, data) {
          //return false;
        }
      },
      
      
      'click' : function(event, data) {
        $('#alert')
          .text('Click '+data.name+' on map 1')
          .stop()
          .css('backgroundColor', '#0099CC')
          .animate({backgroundColor: '#0099CC'}, 1000);
      }
    });
    
    $('#over-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });
    
    $('#out-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });
  });

getBeeData();
