function updatePreview() {
    const topLeft = document.getElementById("topleft").value + "%";
    const topRight = document.getElementById("topRight").value + "%";
    const bottomLeft = document.getElementById("bottomleft").value + "%";
    const bottomRight = document.getElementById("bottomright").value + "%";

    const previewBox = document.getElementById("previewBox");
    previewBox.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;

}

function copyToClipboard() {
    const cssCode = getComputedStyle(document.getElementById("previewBox")).borderRadius;
    const textarea = document.createElement("textarea");
    textarea.value = cssCode;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand("copy");
        alert("CSS code copied to clipboard");
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
    } finally {
        document.body.removeChild(textarea);
    }
}

updatePreview();