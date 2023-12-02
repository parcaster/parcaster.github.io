var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datepicker').value = now.toISOString().slice(0,16);
