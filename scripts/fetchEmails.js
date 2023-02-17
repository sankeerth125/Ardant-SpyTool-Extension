let extractButton = document.getElementById("extractButton");

extractButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractEmailsFromCurrentPage,
  });
  console.log("clicked");
});

function extractEmailsFromCurrentPage() {
  const email = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim; //regex to validate email
  let emails = document.body.innerHTML.match(email);
  alert(emails);
}
