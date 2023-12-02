// highcharts-demo.js
document.addEventListener('DOMContentLoaded', function() {
    // Daten für das Diagramm
    var data = [5, 10, 15, 20, 25];

    // Konfiguration für das Balkendiagramm
    var chartConfig = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Unsere Vorschläge für dich',
            align: 'left'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'test'],
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl freie Parkplätze',
                align: 'high'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: ' freie Parkplätze'
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: data
        }]
    };

    // Diagramm erstellen
    var chart = new Highcharts.Chart(chartConfig);
});
