// highcharts-demo.js
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
            text: 'Mein erstes Highcharts-Diagramm'
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {
            title: {
                text: 'Werte'
            }
        },
        series: [{
            name: 'Datenreihe',
            data: data
        }]
    };

    // Diagramm erstellen
    var chart = new Highcharts.Chart(chartConfig);
});
