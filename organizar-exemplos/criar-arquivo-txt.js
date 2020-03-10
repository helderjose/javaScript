// Execute esse código no console do navegador, testei no Firefox.

clear();

// clear();
// console.log("data-gtm-event-category: ", $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-category'].nodeValue)
// console.log("data-gtm-event-label: ", $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-label'].nodeValue)
// console.log("data-gtm-event-action: ", $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-action'].nodeValue)
// console.log("data-gtm-dimension35: ", $x("//div[@id='welcome']//button")[0].attributes['data-gtm-dimension35'].nodeValue)


clear();

let dataGtmEventCategory = $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-category'].nodeValue
let dataGtmEventLabel = $x("//div[@id='welcome']//button")[0].attributes['data-gtm-event-label'].nodeValue

function saveTextAsFile()
{
    var textToWrite = `${dataGtmEventCategory} ${dataGtmEventLabel}`;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = "my-file-name";
      var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

saveTextAsFile();