var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0,16);

datepicker.Attributes["min"] = now.AddDays(-3).toISOString().slice(0,16);
datepicker.Attributes["max"] = now.AddDays(7).toISOString().slice(0,16);
