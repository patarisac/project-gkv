MAP = document.getElementById('map');
Plotly.d3.csv("https://raw.githubusercontent.com/patarisac/project-gkv/main/rankings.csv", function(err, rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; })
    }

    var data =  [{
        type:  'choropleth',
        locationmode:'country names',
        locations: unpack(rows, 'Country'),
        z:  unpack(rows,'Happiness score'),
        text: unpack(rows, 'Country'),
        autocolorscale: true
    }];

    var layout = {
        title: "Happiness Score by Country",
        geo: {
            projection: {
                type: 'robinson'
            }
        }
    };

    Plotly.newPlot(MAP, data, layout, {showlink: false});
});
