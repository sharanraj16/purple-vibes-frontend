Here's the revised version with the mention of the **Moments app** removed from the introduction:

---

## Testing Documentation - Purple Vibes

[Back to README](README.md)

---

## Table of Contents

1. [Introduction](#introduction)
2. [Testing Strategy](#testing-strategy)
3. [Manual Testing](#manual-testing)

   * [User Authentication](#user-authentication)
   * [Profile Management](#profile-management)
   * [Posts Creation](#posts-creation)
   * [Post Interactions](#post-interactions)
   * [Comments](#comments)
   * [Notifications](#notifications)
   * [Search Functionality](#search-functionality)
   * [Responsiveness](#responsiveness)
4. [Automated Testing](#automated-testing)

   * [Unit Tests](#unit-tests)
   * [Integration Tests](#integration-tests)
   * [End-to-End Tests](#end-to-end-tests)
5. [Browser Compatibility](#browser-compatibility)
6. [Performance Testing](#performance-testing)
7. [Known Issues](#known-issues)
8. [Conclusion](#conclusion)

---

## 1. Introduction

This document outlines the testing procedures for the **Purple Vibes** social media application. Testing ensures that all features work as expected and the application provides a smooth user experience.

---

## 2. Testing Strategy

The testing approach for **Purple Vibes** includes:

* **Manual Testing:** Testing by interacting with the application to ensure it behaves as expected in real-world scenarios.
* **Automated Testing:** Using scripts to test backend and frontend functionalities automatically.
* **Performance Testing:** Ensuring that the app performs well under load and various conditions.

---

## 3. Manual Testing

### User Authentication

* **Tests:**

  * User can register with valid details (username, email, password).
  * User cannot register with an existing email or username.
  * User can log in with valid credentials.
  * User cannot log in with invalid credentials.
  * User can log out successfully.

  

---

### Profile Management

* **Tests:**

  * User can view their profile.
  * User can update their profile information (name, email, bio).
  * User can upload and change their profile picture.
  * User can delete their account.



---

### Posts Creation

* **Tests:**

  * User can create a post with text.
  * User can create a post with images.
  * Post content appears correctly on the timeline.
  * User can edit their own post.
  * User can delete their own post.

  

---

### Post Interactions

* **Tests:**

  * User can like a post.
  * User can unlike a post.
  * User can share a post.
  * User can comment on a post.
  * User can delete their own comment.

  

---

### Comments

* **Tests:**

  * User can post a comment on a post.
  * Comments are displayed in chronological order.
  * User can edit their comment.
  * User can delete their comment.

  

---

### Notifications

* **Tests:**

  * User receives a notification when someone likes or comments on their post.
  * User can view and clear notifications.
  * Notification count updates in real time.

 

---

### Search Functionality

* **Tests:**

  * User can search for posts by hashtag.
  * User can search for other users by username.
  * Search results are displayed correctly and match search queries.

  

---

### Responsiveness

* **Tests:**

  * The application is responsive on desktop, tablet, and mobile devices.
  * Elements such as buttons, menus, and text adjust accordingly on different screen sizes.

#### Mobile Devices

* **iPhone 6/6s/7 (375 x 667)** – Render: Pass, Images: Pass, Links: Pass
* **Samsung Galaxy S5/6/7 (360 x 640)** – Render: Pass, Images: Pass, Links: Pass
* **Google Pixel/Nexus 5 (411 x 731)** – Render: Pass, Images: Pass, Links: Pass

During mobile iPhone testing, I realized that the modal popup for the change password doesn't close correctly when you click the cancel button. Only the page behind changes, but the modal stays open until the third click. I fixed this by changing the onClick function on the cancel button from `history.goBack()` to `handleClosePasswordModal`. This now uses the same close function as the change username modal.

#### Tablet Devices

* **Amazon Kindle Fire (768 x 1024)** – Render: Pass, Images: Pass, Links: Pass
* **Samsung Galaxy Tab 10 (800 x 1280)** – Render: Pass, Images: Pass, Links: Pass
* **Apple iPad Pro (1366 x 1024)** – Render: Pass, Images: Pass, Links: Pass

During tablet testing, I noticed that when clicking on the category dropdown, the options appear in a select box off the screen in the Responsive Simulator website. However, when replicating the same action in Google Dev Tools with the Samsung Galaxy Tab dimensions (800 x 1280), the dropdown appears correctly below the header. I believe this is just a glitch in the Responsive Design Checker website.

**Bug #61:** On the Apple iPad Pro, when adding Instagram and Facebook URLs to a profile, the URL is too long and overflows the Profile Stats Container. To resolve this, I reduced the font size of the URL text fields (since most users usually click or copy and paste the links) and applied the CSS class `word-break: break-all` to wrap the text to the next line when it overflows.

#### Desktop Devices

* **24" Desktop (1920 x 1200)** – Render: Pass, Images: Pass, Links: Pass
* **19" Desktop (1440 x 900)** – Render: Pass, Images: Pass, Links: Pass
* **10" Notebook (1024 x 600)** – Render: Pass, Images: Pass, Links: Pass

  

---

## 4. Automated Testing

### Unit Tests

* **Tests:**

  * Unit tests for backend functionality, such as creating, editing, and deleting posts.
  * Backend validation of user data (e.g., username, password length).
  * Unit tests for the authentication flow.

---

### Integration Tests

* **Tests:**

  * Test API endpoints for user authentication (registration, login, logout).
  * Test the flow for creating and interacting with posts.
  * Test the interaction between frontend and backend.

---

### End-to-End Tests

* **Tests:**

  * Test user flow from registration to profile creation, posting, commenting, and logging out.
  * Simulate user interactions with the app (clicking buttons, submitting forms).

---

## 5. Browser Compatibility

* **Browsers Tested:**

  * Google Chrome (latest version)
  * Mozilla Firefox (latest version)
  * Safari (latest version)
  * Microsoft Edge (latest version)

* **Tests:**

  * Verify that the application works consistently across all major browsers.
  * Check for any CSS or layout issues in different browsers.

---

## 6. Performance Testing

* **Tests:**

  * Load testing: Simulate a high number of concurrent users to test the app's scalability.
  * Stress testing: Push the app to its limits to test its robustness.
  * Response time tests for page loads and API calls.

---

## 7. Known Issues

* **Bug 1:** Occasionally, the comment count on posts does not update immediately after posting a new comment.
* **Bug 2:** Some users experience slower page load times on mobile devices when browsing posts with images.

---

## 8. Conclusion

The **Purple Vibes** app has passed most of the functional and usability tests, and core features such as user authentication, profile management, and post creation are working smoothly. Minor bugs are being addressed in future updates.

---

[Back to README](../README.md)
