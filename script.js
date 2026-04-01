const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

// Validate URL
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
    alert("Please enter a valid URL starting with https:// or http://");
    return;
  }

  // Add timestamp to avoid caching
  const qrUrl = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(url)}&choe=UTF-8&t=${new Date().getTime()}`;
  
  qrImage.src = qrUrl;
  qrImage.style.display = "block";
  downloadBtn.style.display = "inline-block";
});

// Download QR Code
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
});