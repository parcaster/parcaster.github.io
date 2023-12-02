// Datepicker
var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0,16);

document.addEventListener('DOMContentLoaded', function() {
  var today = new Date();
  var futureDate = new Date();
  futureDate.setDate(today.getDate() + 6); // Hier wird das Höchstdatum auf 7 Tage in der Zukunft gesetzt

  var datetimeInput = document.getElementById('datepicker');
  datetimeInput.min = today.toISOString().slice(0, 16); // Das Mindestdatum ist das aktuelle Datum
  datetimeInput.max = futureDate.toISOString().slice(0, 16); // Das Höchstdatum ist 7 Tage in der Zukunft
});

// Get Metadata and Prediciton
const apiUrlMetadata = 'https://parcaster-2ff51b8db57e.herokuapp.com/metadata';
const apiUrlPrediction = 'https://parcaster-2ff51b8db57e.herokuapp.com/predict';

async function getMetadata(){
  const response = await fetch(apiUrlMetadata);
  const metadata = await response.json();
  console.log(metadata);
  return metadata;
}

// Value from Datapicker
var datetime = document.getElementById('datepicker').value;
const [date, time] = datetime.split('T');
const formattedDate = `${date} ${time}`
console.log(formattedDate);

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formattedDate)
};

async function getPrediction(){
  const response = await fetch(apiUrlPrediction, requestOptions)
  const prediction = await response.json();
  console.log(prediction);
  return prediction;
}

// Highchart-Graph
async function asyncCall() {
  const metadata = await getMetadata();
  const prediction = await getPrediction();
    
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

