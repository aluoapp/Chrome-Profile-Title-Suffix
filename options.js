document.getElementById("save").addEventListener("click", () => {
    const profileName = document.getElementById("profileName").value;
    chrome.storage.sync.set({ profileName }, () => {
      document.getElementById("status").textContent = "saved";
      setTimeout(() => document.getElementById("status").textContent = "", 2000);
    });
  });
  
  chrome.storage.sync.get(["profileName"], (result) => {
    if (result.profileName) {
      document.getElementById("profileName").value = result.profileName;
    }
  });
  