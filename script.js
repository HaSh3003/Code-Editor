function run() {
  let htmlCode = HtmlEditor.getValue();
  let cssCode = CssEditor.getValue();
  let jsCode = JsEditor.getValue();
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  output.contentWindow.eval(jsCode);
}

let HtmlEditor = CodeMirror.fromTextArea(document.getElementById("Html-code"), {
  mode: "htmlmixed",
  theme: "ayu-dark",
  lineWrapping: true,
  lineNumbers: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
  hintOptions: { schemaInfo: CodeMirror.htmlSchema }
});

let CssEditor = CodeMirror.fromTextArea(document.getElementById("Css-code"), {
  mode: "css",
  theme: "ayu-dark",
  lineNumbers: true,
  lineWrapping: true,
  extraKeys: { "Ctrl-Space": "autocomplete" },
  hintOptions: { schemaInfo: CodeMirror.cssSchema }
});

let JsEditor = CodeMirror.fromTextArea(document.getElementById("Js-code"), {
  mode: "javascript",
  theme: "ayu-dark",
  lineWrapping: true,
  lineNumbers: true,
  hintOptions: { schemaInfo: CodeMirror.javascriptSchema }
});

HtmlEditor.on('inputRead', function(cm, event) {
  if (!cm.state.completionActive && event.text.length === 1) {
      cm.showHint({ completeSingle: false });
  }
});

CssEditor.on('inputRead', function(cm, event) {
  if (!cm.state.completionActive && event.text.length === 1) {
      cm.showHint({ completeSingle: false });
  }
});

JsEditor.on('inputRead', function(cm, event) {
  if (!cm.state.completionActive && event.text.length === 1) {
      cm.showHint({ completeSingle: false });
  }
});

HtmlEditor.on('keyup', function(cm, event) {
  run();
});

CssEditor.on('keyup', function(cm, event) {
  run();
});

JsEditor.on('keyup', function(cm, event) {
  run();
});

let width = document.getElementById("width");
let height = document.getElementById("height");
let iframe = document.getElementById("output");

function Devices_Emulator() {
  iframe.style.width = width.value + "px";
  iframe.style.height = height.value + "px";
}

width.addEventListener('keyup', function() {
  Devices_Emulator();
});

height.addEventListener('keyup', function() {
  Devices_Emulator();
});

function updateValues() {
  width.value = iframe.offsetWidth;
  height.value = iframe.offsetHeight;
}

const resizeObserver = new ResizeObserver(updateValues);
resizeObserver.observe(iframe);

updateValues();
