const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");

let qr; // QRCode object

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

generateBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  if (!isValidUrl(url)) {
    alert("Please enter a valid URL starting with http:// or https://");
    return;
  }

  // Clear previous QR
  qrContainer.innerHTML = "";

  // Generate new QR code
  qr = new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  downloadBtn.style.display = "inline-block";
});

downloadBtn.addEventListener("click", () => {
  const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
  if (!img) return;

  let link = document.createElement("a");
  
  if (img.tagName === "IMG") {
    link.href = img.src;
  } else {
    link.href = img.toDataURL("image/png");
  }

  link.download = "qr-code.png";
  link.click();
});