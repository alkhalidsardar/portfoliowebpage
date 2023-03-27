const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const preview = document.getElementById("preview");
const htmlCopyBtn = document.getElementById("html-copy-btn");
const cssCopyBtn = document.getElementById("css-copy-btn");

function updatePreview() {
  preview.contentWindow.document.open();
  preview.contentWindow.document.write(
    htmlEditor.value + "<style>" + cssEditor.value + "</style>"
  );
  preview.contentWindow.document.close();
}

function copyHtmlCode() {
  htmlEditor.select();
  document.execCommand("copy");
  alert("HTML code copied!");
}

function copyCssCode() {
  cssEditor.select();
  document.execCommand("copy");
  alert("CSS code copied!");
}

htmlCopyBtn.addEventListener("click", copyHtmlCode);
cssCopyBtn.addEventListener("click", copyCssCode);
htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);

updatePreview(); // Initial run to generate preview on page load

if (document.referrer.indexOf("instagram.com") !== -1) {
  alert(
    "Hi Floch Here !! Please copy the link and open it in a browser to use the editor."
  );
}