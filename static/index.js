"use strict";

// Search function to convert input into a fully qualified URL or search query
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  if (!input || typeof input !== 'string') {
    console.error("Invalid input: Input must be a non-empty string.");
    return "";
  }

  try {
    // Input is a valid URL:
    return new URL(input).toString();
  } catch (err) {
    console.error("Invalid URL:", err);
  }

  try {
    // Input is a valid URL when http:// is added to the start:
    const url = new URL(`http://${input}`);
    // Only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    console.error("Invalid URL with http://:", err);
  }

  // Attempts to convert the input to a fully qualified URL have failed
  // Treat the input as a search query
  return template.replace("%s", encodeURIComponent(input));
}

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    return; // Early exit
  }

  const domain = localStorage.getItem('domain');
  const servernode = localStorage.getItem('server-node');

  // Check if domain and servernode are not null
  if (!domain || !servernode) {
    error.textContent = "Domain or server node is missing.";
    return; // Early exit
  }

  const url = search(address.value, searchEngine.value);
  
  // Verify if the URL is valid before constructing the redirect
  if (!url) {
    error.textContent = "Invalid search query.";
    return; // Early exit
  }
  
  location.href = '//' + servernode + domain + url;
});

// Function defined outside the event listener
function getRandomUpTo(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
