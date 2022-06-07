BAR1 = document.getElementById('barplot1');
BAR2 = document.getElementById('barplot2');
BAR3 = document.getElementById('barplot3');

// Data pada plot untuk absis-x dan ordinat-y
var databar1 = [{
    x: [7.415, 7.512, 7.557, 7.636, 7.821],
    y: ['Netherlands', 'Switzerland', 'Iceland', 'Denmark','Finland'],
    marker:{
        color: '#ab2b84'
    },
    orientation: 'h',type: 'bar',name:'Happiness Score', showlegend:true
}];
var databar2 = [{
    x: [2.404, 2.955, 2.995, 3.268, 3.471],
    y: ['Afghanistan', 'Lebanon', 'Zimbabwe', 'Rwanda', 'Botswana'],
    marker:{
        color: '#fa93bb'
    },
    orientation:'h', type:'bar', name:'Happiness Score', showlegend:true
}];

// Layout
var layoutbar1 = {
    title: 'Top 5 Highest Happiness Score',
    font : {family:'Montserrat',size: 12}, 
};
var layoutbar2 = {
    title: 'Top 5 Lowest Happiness Score',
    font : {family:'Montserrat',size: 12}, 
};

// Config
var config = { responsive: true };

Plotly.newPlot(BAR1, databar1, layoutbar1, config);
Plotly.newPlot(BAR2, databar2, layoutbar2, config);