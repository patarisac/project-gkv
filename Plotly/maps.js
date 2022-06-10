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
        colorscale: [
            ['0.0', 'rgb(225, 249, 239)'], ['0.25', 'rgb(251, 225, 183)'],
            ['0.50', 'rgb(255, 205, 126)'], ['0.75', 'rgb(255, 154, 42)'],
            ['1.0', 'rgb(232, 122, 0)']
        ],
        autocolorscale: false
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
