console.time("Time this");
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }
    };
    xhttp.open("GET", "pemenang.xml", true);
    xhttp.send();
  }
 

  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Nama Nasabah</th><th>Nomor Rekening</th></tr>";
    var x = xmlDoc.getElementsByTagName("pemenang");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("NASABAH")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("REKENING")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }

console.timeEnd("Time this");
console.count("function this");
