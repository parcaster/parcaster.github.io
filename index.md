---
layout: default
---
<h1><a href="{{ "/" | absolute_url }}">{{ site.title | default: site.github.repository_name }}</a></h1>
<p>{{ site.description | default: site.github.project_tagline }}</p>



Wähle deine gewünschte Parkzeit (maximal sieben Tage in die Zukunft): <br><input type="datetime-local" id="datepicker">
<br>
<button type="button" id="btn_prediction">Vorhersage starten</button>

<div id="error-container"></div>

<div id="chart-container" style="height: 400px;"></div>
