const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadBtn.innerText = "Downloading file ......";
    fetchFile(fileInput.value);
});


function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file =>{
        let temUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = temUrl;
        aTag.download = url.replace(/\/[^\/]*$/, '/175');
        document.body.appendChild(aTag); //adding <a> tag inside body
        aTag.click(); // clicking <a> Tag so the file download
        aTag.remove(); // removing <a></a> Tag once file downloaded
        URL.revokeObjectURL(temUrl);
        downloadBtn.innerText = "Downloading file ......";
    }).catch(() =>{
        downloadBtn.innerText = "Download file";
        alert("Failed to download!!");
    })
}

