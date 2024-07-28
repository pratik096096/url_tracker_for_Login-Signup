


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'startTracking') {
        const forms = document.querySelectorAll('form');
        const trackingKeywords = ['login', 'signin', 'signup', 'register'];

        forms.forEach(form => {
            const inputs = form.querySelectorAll('input[type="password"], input[type="text"], input[type="email"]');
            if (inputs.length > 0 && trackingKeywords.some(keyword => form.innerHTML.toLowerCase().includes(keyword))) {
                form.addEventListener('submit', () => {
                    chrome.storage.local.get(['token'], (result) => {
                        fetch('http://localhost:5000/api/tracking/track', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${result.token}`
                            },
                            body: JSON.stringify({ url: window.location.href })
                        })
                        .catch(error => console.error('Error tracking URL:', error));
                    });
                });
            }
        });
    }
});
