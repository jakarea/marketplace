let uploadedFile = null;

function displayFileInfo() {
  const fileInput = document.getElementById('fileInput');
  const fileInfoDiv = document.getElementById('fileInfo');

  if (fileInput.files.length === 0) {
    fileInfoDiv.innerHTML = '';
    return;
  }

  const file = fileInput.files[0];
  const fileName = file.name;
  const fileSize = convertBytesToKB(file.size);

  const fileEntry = `
    <div>
      <h6>${fileName}</h6>
      <p>${fileSize} KB</p>
      <span class="close-button" onclick="closeFileInfo(this.parentNode)"><i class="fas fa-close"></i></span>
    </div>
  `;

  if (uploadedFile === fileName) {
    fileInfoDiv.innerHTML = fileEntry;
  } else {
    fileInfoDiv.innerHTML += fileEntry;
    uploadedFile = fileName;
  }

  // Clear the input path
  fileInput.value = '';
}

function closeFileInfo(divNode) {
  divNode.remove();
  uploadedFile = null;
}

function convertBytesToKB(bytes) {
  return (bytes / 1024).toFixed(2);
}
