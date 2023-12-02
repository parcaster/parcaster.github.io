var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0,16);

datepicker.Attributes["min"] = DateTime.Now.AddDays(-3).ToString("dd-mm-yyyy HH:mm");
datepicker.Attributes["max"] = DateTime.Now.AddDays(7).ToString("dd-mm-yyyy HH:mm");
