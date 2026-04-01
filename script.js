const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (url) {
    const qrUrl = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(url)}&choe=UTF-8`;
    qrImage.src = qrUrl;
    qrImage.style.display = "block";
    downloadBtn.style.display = "inline-block"; // show download button
  } else {
    alert("Please enter a valid URL.");
  }
});

// Download QR code
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
});