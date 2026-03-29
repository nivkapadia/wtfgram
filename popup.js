const toggle = document.getElementById("toggle")
const status = document.getElementById("status")

// On popup open — read current state from storage and reflect it
chrome.storage.local.get("enabled", (result) => {
  const isEnabled = result.enabled !== false // default to true
  toggle.checked = isEnabled
  status.textContent = isEnabled ? "Blocking is ON" : "Blocking is OFF"
})

// When user flips the toggle — send message to background.js
toggle.addEventListener("change", () => {
  const isEnabled = toggle.checked
  status.textContent = isEnabled ? "Blocking is ON" : "Blocking is OFF"

  chrome.runtime.sendMessage({ type: "SET_ENABLED", enabled: isEnabled })
})
