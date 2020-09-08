<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="format-detection" content="email=no"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <title></title>
  {{ helper.assets.getStyle('umi.css') | safe }}
  {{ helper.assets.getStyle('vendors.css') | safe }}
</head>
<body>

<div id="root"></div>

<script>
  window.routerBase = '/';
  window.resourceBaseUrl = '{{ helper.assets.resourceBase }}';
</script>
{{ helper.assets.getScript('umi.js') | safe }}
</body>
</html>
