import { getMetadata } from './metadata.js';

// Funktion, um alle Werte unter dem Schlüssel "label" zu extrahieren
function extractValuesByLabel(obj, label, result = []) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (key === label) {
                result.push(value);
            } else if (typeof value === 'object') {
                extractValuesByLabel(value, label, result);
            }
        }
    }

    return result;
}

async function asyncCall() {
    metadata = await getMetadata();
    
    const labelValues = extractValuesByLabel(metadata, 'label');
    console.log('Werte unter dem Schlüssel "label":', labelValues);
    
    // Highchart-Grafik erstellen
    document.addEventListener('DOMContentLoaded', function() {
        // Daten für das Diagramm
        var data = [5, 10, 15, 20, 25];
        var pp_labels = [5, 10, 15, 20, 25];
    
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
                categories: pp_labels,
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
                formatter: function() {
                    return this.x + ': ' + this.y + ' freie Parkplätze';
                  }
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
}

asyncCall();

