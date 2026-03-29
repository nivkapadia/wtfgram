// Set default state on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ enabled: true })
})

// Listen for toggle messages from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "SET_ENABLED") {
    chrome.storage.local.set({ enabled: message.enabled })

    if (message.enabled) {
      chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ["ruleset_1"]
      })
    } else {
      chrome.declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ["ruleset_1"]
      })
    }
  }
})
