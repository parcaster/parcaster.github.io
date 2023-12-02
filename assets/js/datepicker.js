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
