var head = document.getElementsByTagName('head')[0];
var files = ['style1.css', 'style2.css', 'style3.css', 'style4.css'];

for (var i = 0, l = files.length; i < l; i++) {
  var link = document.createElement('link');
  link.href = files[i];
  link.rel = "stylesheet";
  link.type = "text/css";

  head.appendChild(link);
}