function run() {
  let htmlCode = document.getElementById("Html-code").value;
  let cssCode = document.getElementById("Css-code").value;
  let jsCode = document.getElementById("Js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  output.contentWindow.eval(jsCode);


}
