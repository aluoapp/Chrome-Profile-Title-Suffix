
function addProfileName() {
chrome.storage.sync.get(["profileName"], (result) => {
    const profileName = result.profileName || "";
    if (!profileName) return;
  
    if (!document.title.includes(`[${profileName}]`)) {
      document.title += ` [${profileName}]`;
    }
  });
}

setTimeout(() => {
    addProfileName();
}, 5000);