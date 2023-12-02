// Datepicker
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0, 16);

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 6); // Hier wird das Höchstdatum auf 7 Tage in der Zukunft gesetzt

    const datetimeInput = document.getElementById('datepicker');
    datetimeInput.min = today.toISOString().slice(0, 16); // Das Mindestdatum ist das aktuelle Datum
    datetimeInput.max = futureDate.toISOString().slice(0, 16); // Das Höchstdatum ist 7 Tage in der Zukunft
});

// Get Metadata and Prediciton
const apiUrlPrediction = 'https://parcaster-2ff51b8db57e.herokuapp.com/predict';

const chartContainerId = 'chart-container'
const errorContainerId = 'error-container'

async function getPrediction(requestOptions) {
    const response = await fetch(apiUrlPrediction, requestOptions)
    const prediction = await response.json();
    console.log(prediction);
    return prediction;
}

document.getElementById('btn_prediction').onclick = async function () {
    document.getElementById(errorContainerId).innerHTML = "";
    document.getElementById(chartContainerId).innerHTML = "";

    try {
        // Value from Datapicker
        const datetime = document.getElementById('datepicker').value;
        const [date, time] = datetime.split('T');
        const formattedDate = `${date} ${time}`
        console.log("Predicting", formattedDate);

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: formattedDate})
        };

        const {labels, labels_readable, max_capacity, predictions} = await getPrediction(requestOptions);

        console.log("Prediction", {labels, labels_readable, max_capacity, predictions});

        // Konfiguration für das Balkendiagramm
        const chartConfig = {
            chart: {
                type: 'bar',
                renderTo: chartContainerId
            },
            title: {
                text: 'Unsere Vorhersage',
                align: 'left'
            },
            xAxis: {
                categories: labels_readable,
                title: {
                    text: null
                },
                labels: {
                    style: {
                        fontFamily: 'Helvetica, Arial, sans-serif'
                    }
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
                labels: {
                    style: {
                        fontFamily: 'Helvetica, Arial, sans-serif'
                    }
                },
                gridLineWidth: 0
            },
            tooltip: {
                formatter: function () {
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
            colors: ['#267CB9'],
            series: [{
                showInLegend: false,
                data: predictions
            }]
        };

        // Diagramm erstellen
        const chart = new Highcharts.Chart(chartConfig);
    } catch (e) {
        console.error("Error", e);
        document.getElementById(errorContainerId).innerHTML = `Ein Fehler ist aufgetreten: ${e}`;
        document.getElementById(chartContainerId).innerHTML = "";
    }
}

