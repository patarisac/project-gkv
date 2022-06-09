BAR1 = document.getElementById('barplot1');
BAR2 = document.getElementById('barplot2');

Plotly.d3.csv("https://raw.githubusercontent.com/patarisac/project-gkv/main/rankings.csv", function(err, rows) {
    const ndata = rows.length;

    // fungsi ambil data
    function get_data(number, clr) {
        var countries = [];
        var happiness = [];
        let start = (number > 0)?(ndata+number-1)%ndata:(ndata+number)%ndata;

        for(let i = start; Math.abs(start - i) != Math.abs(number); (number>0)?i--:i++) {
            var row = rows[i];
            countries.push(row["Country"]);
            happiness.push(row["Happiness score"]);
        }

        var data = [{
            x: happiness,
            y: countries,
            marker: { color: clr },
            orientation: 'h',
            type: 'bar',
            name: 'Happiness Score',
            showlegend: true
        }]

        return data;
    }

    // ambil data top 5 & bot 5
    var top5 = get_data(5, "#ab2b84");
    var bot5 = get_data(-5, "#fa93bb");

    console.log(top5);
    console.log(bot5);

    // Layout
    var layout1 = {
        title : 'Top 5 Highest Happiness Score',
        font : {family: 'Montserrat',size: 12}, 
    };
    var layout2 = {
        title : 'Top 5 Lowest Happiness Score',
        font : {family: 'Montserrat',size: 12}, 
    };

    // Config
    var config = { responsive: true };

    Plotly.newPlot(BAR1, top5, layout1, config);
    Plotly.newPlot(BAR2, bot5, layout2, config);

})