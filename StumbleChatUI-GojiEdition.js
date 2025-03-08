// ==UserScript==
// @name         StumbleChat UI - Goji Edition
// @namespace    StumbleChatUI-Goji
// @version      1.0
// @description  Change the UI of StumbleChat to Goji's Theme
// @author       Goji
// @match        https://stumblechat.com/room/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log("[StumbleChat UI - Goji Edition] Script Loaded");

    // Theme colors for easy reference and future modifications
    const themeColors = {
        background: "#404040",          // Main background
        backgroundSecondary: "#606060", // Secondary background (panels, overlays)
        backgroundTertiary: "#808080",  // Tertiary background for elements
        backgroundQuaternary: "#707070", // Quaternary background (e.g., media players)
        highlight: "#99cc33",           // Primary highlight color (text, borders, UI accents)
        accentPrimary: "#6633cc",       // First accent color
        accentSecondary: "#3399cc",     // Second accent color
        accentTertiary: "#cc3399",      // Third accent color
        textPrimary: "#e0e0e0",         // Primary text color
        buttonText: "white"             // Button text color
    };

    // Applies CSS styles to the page
    function applyStyles() {
        console.log("[StumbleChat UI Overhaul] Applying styles...");
        GM_addStyle(`
            /* Global dark theme */
            body { background: ${themeColors.background} !important; color: ${themeColors.textPrimary} !important; }

            /* User video frames */
            #videos .video-wrapper { border: 4px solid ${themeColors.highlight} !important; background: ${themeColors.backgroundTertiary} !important; }

            /* Media players */
            #embeddedvideos, #regularvideos { background: ${themeColors.backgroundQuaternary} !important; }

            /* Taskbar styling */
            .bar { background: ${themeColors.backgroundSecondary} !important; transition: background 0.2s ease-in-out !important; }
            .bar:hover { background: ${themeColors.accentPrimary} !important; }

            /* Buttons */
            button, .dropbtn { background: ${themeColors.highlight} !important; color: ${themeColors.buttonText} !important; cursor: pointer !important; transition: background 0.2s ease-in-out !important; }
            button:hover, .dropbtn:hover { background: ${themeColors.accentPrimary} !important; }

            /* User list */
            #userlist { background: #202020 !important; }
            #userlist .list .user { color: ${themeColors.highlight} !important; }

            /* Chat background */
            #chat-content { background: #202020 !important; }

            /* User menu */
            .user-menu { background: ${themeColors.backgroundSecondary} !important; }
            .user-menu-item { background: ${themeColors.backgroundTertiary} !important; color: ${themeColors.textPrimary} !important; }
            .user-menu-link { color: ${themeColors.highlight} !important; }
            .user-menu-link:hover { background: ${themeColors.accentPrimary} !important; color: ${themeColors.buttonText} !important; }

            /* Additional UI elements */
            .room-name { color: ${themeColors.highlight} !important; }
            .room-stats { color: ${themeColors.highlight} !important; }

            /* Modal pop-ups */
            #modal-back { background: rgba(0, 0, 0, 0.75) !important; }
            #modal { background: ${themeColors.backgroundTertiary} !important; }
        `);
    }

    // Applies direct UI modifications to elements after they load
    function customizeUI() {
        console.log("[StumbleChat UI Overhaul] Customizing UI...");
        document.querySelectorAll('button, .dropbtn').forEach(button => {
            button.style.background = themeColors.accentPrimary;
        });
    }

    // Observes changes to the DOM and reapplies styles dynamically
    function observeChanges() {
        console.log("[StumbleChat UI Overhaul] Starting MutationObserver...");
        const observer = new MutationObserver(() => {
            console.log("[StumbleChat UI Overhaul] DOM changes detected, reapplying styles.");
            customizeUI();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Initializes the script by applying styles and setting up observers
    function initScript() {
        console.log("[StumbleChat UI Overhaul] Initializing script...");
        applyStyles();
        observeChanges();
        setTimeout(customizeUI, 2000); // Ensures late-loaded elements are styled
    }

    // Ensure the script runs once the page has fully loaded
    window.addEventListener('load', initScript);
})();
