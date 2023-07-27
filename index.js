function generateQRCode() {
    // Get the link from the input field
    var link = document.getElementById("link").value;
    // Encode the link for the API
    var encodedLink = encodeURIComponent(link);
    // Create the QR code using the API
    var img = document.getElementById("qrCode");
    img.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodedLink + "&size=150x150";
  }