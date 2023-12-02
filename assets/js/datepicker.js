var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0,16);

datepicker.Attributes["min"] = DateTime.Now.AddDays(-3).toISOString().slice(0,16);
datepicker.Attributes["max"] = DateTime.Now.AddDays(7).toISOString().slice(0,16);
