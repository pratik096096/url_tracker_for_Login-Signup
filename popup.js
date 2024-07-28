// document.getElementById('loginBtn').addEventListener('click', () => {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.token) {
//             chrome.storage.local.set({ token: data.token });
//             document.getElementById('login').style.display = 'none';
//             document.getElementById('tracker').style.display = 'block';
//         } else {
//             alert('Login failed');
//         }
//     })
//     .catch(error => {
//         console.error('Error logging in:', error);
//         alert('Login failed');
//     });
// });

// document.getElementById('registerBtn').addEventListener('click', () => {
//     const username = document.getElementById('regUsername').value;
//     const password = document.getElementById('regPassword').value;

//     fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.message === 'User registered successfully') {
//             document.getElementById('register').style.display = 'none';
//             document.getElementById('login').style.display = 'block';
//         } else {
//             alert('Registration failed');
//         }
//     })
//     .catch(error => {
//         console.error('Error registering:', error);
//         alert('Registration failed');
//     });
// });

// document.getElementById('showRegister').addEventListener('click', () => {
//     document.getElementById('login').style.display = 'none';
//     document.getElementById('register').style.display = 'block';
// });

// document.getElementById('showLogin').addEventListener('click', () => {
//     document.getElementById('register').style.display = 'none';
//     document.getElementById('login').style.display = 'block';
// });

// document.getElementById('startTracking').addEventListener('click', () => {
//     chrome.storage.local.set({ tracking: true });
// });

// document.getElementById('stopTracking').addEventListener('click', () => {
//     chrome.storage.local.set({ tracking: false });
// });

// document.getElementById('logoutBtn').addEventListener('click', () => {
//     chrome.storage.local.remove(['token', 'tracking'], () => {
//         document.getElementById('tracker').style.display = 'none';
//         document.getElementById('login').style.display = 'block';
//         document.getElementById('trackedUrls').innerHTML = '';
//     });
// });

// chrome.storage.local.get(['tracking', 'token'], (result) => {
//     if (result.tracking) {
//         document.getElementById('startTracking').disabled = true;
//         document.getElementById('stopTracking').disabled = false;
//     } else {
//         document.getElementById('startTracking').disabled = false;
//         document.getElementById('stopTracking').disabled = true;
//     }

//     if (result.token) {
//         document.getElementById('login').style.display = 'none';
//         document.getElementById('tracker').style.display = 'block';

//         fetch('http://localhost:5000/api/tracking/tracked-urls', {
//             headers: {
//                 'Authorization': `Bearer ${result.token}`
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const trackedUrlsList = document.getElementById('trackedUrls');
//             if (data.trackedWebsites && data.trackedWebsites.length) {
//                 data.trackedWebsites.forEach(url => {
//                     const li = document.createElement('li');
//                     li.textContent = url;
//                     trackedUrlsList.appendChild(li);
//                 });
//             } else {
//                 const li = document.createElement('li');
//                 li.textContent = 'No tracked websites found';
//                 trackedUrlsList.appendChild(li);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching tracked URLs:', error);
//         });
//     }
// });

document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.token) {
            chrome.storage.local.set({ token: data.token });
            document.getElementById('login').style.display = 'none';
            document.getElementById('tracker').style.display = 'block';
        } else {
            alert('Login failed');
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
        alert('Login failed');
    });
});

document.getElementById('registerBtn').addEventListener('click', () => {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.message === 'User registered successfully') {
            document.getElementById('register').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        } else {
            alert('Registration failed');
        }
    })
    .catch(error => {
        console.error('Error registering:', error);
        alert('Registration failed');
    });
});

document.getElementById('showRegister').addEventListener('click', () => {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('startTracking').addEventListener('click', () => {
    chrome.storage.local.set({ tracking: true });
    document.getElementById('startTracking').disabled = true;
    document.getElementById('stopTracking').disabled = false;
});

document.getElementById('stopTracking').addEventListener('click', () => {
    chrome.storage.local.set({ tracking: false });
    document.getElementById('startTracking').disabled = false;
    document.getElementById('stopTracking').disabled = true;
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    chrome.storage.local.remove(['token', 'tracking'], () => {
        document.getElementById('tracker').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('trackedUrls').innerHTML = '';
    });
});

chrome.storage.local.get(['tracking', 'token'], (result) => {
    if (result.tracking) {
        document.getElementById('startTracking').disabled = true;
        document.getElementById('stopTracking').disabled = false;
    } else {
        document.getElementById('startTracking').disabled = false;
        document.getElementById('stopTracking').disabled = true;
    }

    if (result.token) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('tracker').style.display = 'block';

        fetch('http://localhost:5000/api/tracking/tracked-urls', {
            headers: {
                'Authorization': `Bearer ${result.token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const trackedUrlsList = document.getElementById('trackedUrls');
            if (data.trackedWebsites && data.trackedWebsites.length) {
                data.trackedWebsites.forEach(url => {
                    const li = document.createElement('li');
                    li.textContent = url;
                    trackedUrlsList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No tracked websites found';
                trackedUrlsList.appendChild(li);
            }
        })
        .catch(error => {
            console.error('Error fetching tracked URLs:', error);
        });
    }
});
