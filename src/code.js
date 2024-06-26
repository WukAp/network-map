

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'klay',
    },

    boxSelectionEnabled: false,
    autounselectify: true,
  
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'height': 80,
          'width': 80,
          'background-fit': 'cover',
          'border-color': '#000',
          'border-width': 3,
//          'label': 'data(id)',
          'font-size': 15,
          'color': 'black',
          'text-valign': 'bottom',
          'border-opacity': 0.5
        
        })
        .selector('.cyto-label')
          .css({
            'background-color':'black'
          })
      .selector('edge')
        .css({
          'curve-style': 'bezier',
          'width': 2,
          //'target-arrow-shape': 'triangle',
          'line-color': '#aaaaaa',
          'target-arrow-color': '#aaaaaa'
        })
      .selector('.server')
        .css({
          'background-image': './resources/images/server.jpg'
        })
      .selector('.db')
        .css({
          'background-image': './resources/images/db.jpg'
        })
      .selector('.filter')
        .css({
          'background-image': './resources/images/filter.png'
        }),
        elements: fetch('../resources/example-graph/planar-chain.json').then(function( res ){ return res.json(); })
    
  });
