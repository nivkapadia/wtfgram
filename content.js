function blackoutIfBlocked() {
  const path = window.location.pathname
  if (path.startsWith('/reels') || path.startsWith('/explore')) {
    // Wait for main content area to exist, then black it out
    const main = document.querySelector('main') || document.querySelector('[role="main"]')
    if (main) {
      main.style.background = '#000'
      main.style.visibility = 'hidden'
    }
  } else {
    // Restore if navigating away from a blocked page
    const main = document.querySelector('main') || document.querySelector('[role="main"]')
    if (main) {
      main.style.background = ''
      main.style.visibility = ''
    }
  }
}

function hideElements() {
  blackoutIfBlocked()

  // Hide reels nav link
  const reelsNav = document.querySelector('a[href="/reels/"]')
  if (reelsNav) {
    const parent = reelsNav.closest('li') || reelsNav.parentElement
    if (parent) parent.style.display = 'none'
  }

  // Hide "Suggested for you" sections
  document.querySelectorAll('span').forEach(el => {
    if (el.textContent.trim() === 'Suggested for you') {
      let section = el.closest('div[style]') || el.parentElement?.parentElement?.parentElement
      if (section) section.style.display = 'none'
    }
  })
}

// Run once immediately
hideElements()

// Single observer handles everything — DOM changes + SPA navigation
let lastPath = window.location.pathname
const observer = new MutationObserver(() => {
  if (window.location.pathname !== lastPath) {
    lastPath = window.location.pathname
  }
  hideElements()
})

observer.observe(document.body || document.documentElement, {
  childList: true,
  subtree: true
})
