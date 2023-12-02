document.addEventListener('DOMContentLoaded', function() {
    // Daten für das Diagramm
    var data = [5, 10, 15, 20, 25];

    // Konfiguration für das Balkendiagramm
    var chartConfig = {
        chart: {
            type: 'bar',
            renderTo: 'chart-container'
        },
        title: {
            text: 'Unsere Vorschläge für dich',
            align: 'left'
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D', 'E'],
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
        colors:['#267CB9'],
        series: [{
            showInLegend: false,
            data: data
        }]
    };

    // Diagramm erstellen
    var chart = new Highcharts.Chart(chartConfig);
});
