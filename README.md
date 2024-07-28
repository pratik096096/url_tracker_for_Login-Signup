# url_tracker_for__login-signup Chrome Extension

Login Tracker is a Chrome extension designed to help users track and record the URLs of websites where they log in, sign in or sign up. This extension allows users to maintain a history of their login activities, making it easier to revisit and manage their accounts across the web.

![extension](https://github.com/user-attachments/assets/fb173914-1a0d-4942-b733-ad2eb5947278)


|???????????|

# You might assume this extension simply keeps a record of your browsing history, but it offers much more. Unlike Google History, which captures countless links and makes it difficult to find specific login sites, Login Tracker focuses exclusively on recording websites where you manually log in. Unlike Google Password Manager, which stores credentials for sites where you log in with your Google account, this extension securely tracks only the websites where you enter your login details manually. This approach is particularly useful for managing logins on random websites, ensuring you can easily revisit these sites and log out if needed.
  

///Features
Login and Registration: Users can log in or register through the extension. Successful authentication grants access to the tracking functionalities.

Start and Stop Tracking: Users can start and stop tracking their login activities with the click of a button.

Tracked URLs: The extension maintains a list of URLs where the user has logged in, which can be viewed directly within the extension.

Logout: Users can log out, which clears their session and stops tracking activities.

///Technologies Used

//Frontend :
JavaScript
HTML
CSS
Chrome Extension APIs

//Backend :
Node.js
Express.js
MongoDB

How It Works
User Authentication:

Users can register and log in through the extension popup. The backend handles user authentication and returns a JWT token on successful login.
Tracking Forms:

The extension injects a content script into all visited pages. It looks for forms containing keywords such as "login", "signin", "signup", and "register".
When a user submits such a form, the extension captures the URL and sends it to the backend for storage.
Viewing Tracked URLs:

Users can view their tracked URLs directly within the extension popup. This list is fetched from the backend and displayed in the UI.
Managing Tracking:

Users can start and stop the tracking of login activities using buttons in the extension popup.
Logging out clears the stored token and stops the tracking process.
