

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && !tab.url.startsWith('chrome://')) {
        chrome.storage.local.get(['tracking', 'token'], (result) => {
            if (result.tracking && result.token) {
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    func: trackForms,
                    args: [result.token]
                });
            }
        });
    }
});

function trackForms(token) {
    const forms = document.querySelectorAll('form');
    const trackingKeywords = ['login', 'signin', 'signup', 'register'];

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[type="password"], input[type="text"], input[type="email"]');
        if (inputs.length > 0 && trackingKeywords.some(keyword => form.innerHTML.toLowerCase().includes(keyword))) {
            form.addEventListener('submit', () => {
                fetch('http://localhost:5000/api/tracking/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ url: window.location.href })
                })
                .catch(error => console.error('Error tracking URL:', error));
            });
        }
    });
}
