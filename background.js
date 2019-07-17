chrome.browserAction.onClicked.addListener(() => {
  const request = new XMLHttpRequest();
  request.open("get", "https://us-central1-random-qiita-api-be836.cloudfunctions.net/get", true);
  request.onload = () => {
    const res = JSON.parse(request.responseText);
    chrome.tabs.executeScript(null, {
      code: `location.href = "${res.url}";`
    });
  };
  request.send(null);
});
