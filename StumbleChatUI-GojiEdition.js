// ==UserScript==
// @name         StumbleChat UI - Goji Edition
// @namespace    StumbleChatUI-Goji
// @version      1.3
// @description  Change the UI of StumbleChat to Goji's Theme
// @author       Goji
// @match        https://stumblechat.com/room/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    console.log("[StumbleChat UI - Goji Edition] Script Loaded");

    const themeColors = {
        backgroundDarkest: "#101010",
        background: "#202020",
        backgroundSecondary: "#303030",
        highlight: "#99cc33",
        accentPrimary: "#6633cc",
        accentSecondary: "#3399cc",
        accentTertiary: "#cc3399",
        textPrimary: "#e0e0e0",
        buttonText: "white"
    };

    function applyStyles() {
        console.log("[StumbleChat UI - Goji Edition] Applying styles...");
        GM_addStyle(`
            /* Global dark theme */
            body, #userlist, #chat-content, .user-menu {
                background: ${themeColors.backgroundDarkest} !important;
                color: ${themeColors.textPrimary} !important;
            }

            /* User video frames */
            #videos .video-wrapper {
                border: 4px solid ${themeColors.highlight} !important;
                background: ${themeColors.backgroundSecondary} !important;
            }

            /* Media players */
            #embeddedvideos, div video {
                background: ${themeColors.backgroundSecondary} !important;
            }
            #regularvideos {
                background: ${themeColors.background} !important;
            }

            /* Taskbar styling */
            .bar {
                background: ${themeColors.backgroundSecondary} !important;
                transition: background 0.2s ease-in-out !important;
            }
            .bar:hover {
                background: ${themeColors.accentPrimary} !important;
            }

            /* Buttons */
            button, .dropbtn, .user-menu-link {
                background: ${themeColors.highlight} !important;
                color: ${themeColors.buttonText} !important;
                cursor: pointer !important;
                transition: background 0.2s ease-in-out !important;
            }
            button:hover, .dropbtn:hover, .user-menu-link:hover {
                background: ${themeColors.accentPrimary} !important;
            }

            /* Media-openmic checkbox background */
            #media-openmic {
                background: ${themeColors.highlight} !important;
                cursor: pointer !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
            }

            /* User list */
            #userlist .list .user, .user-menu-item {
                background: ${themeColors.backgroundSecondary} !important;
                color: ${themeColors.textPrimary} !important;
            }

            /* Additional UI elements */
            .room-name, .room-stats {
                color: ${themeColors.highlight} !important;
            }

            /* Modal pop-ups */
            #modal-back {
                background: rgba(0, 0, 0, 0.75) !important;
            }
            #modal {
                background: ${themeColors.backgroundSecondary} !important;
            }
        `);
    }

    function customizeUI() {
        console.log("[StumbleChat UI - Goji Edition] Customizing UI...");
        document.querySelectorAll('button, .dropbtn').forEach(button => {
            button.style.background = themeColors.accentPrimary;
        });
    }

    function observeChanges() {
        console.log("[StumbleChat UI - Goji Edition] Starting MutationObserver...");
        const observer = new MutationObserver(() => {
            customizeUI();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function initScript() {
        console.log("[StumbleChat UI - Goji Edition] Initializing script...");
        applyStyles();
        observeChanges();
        setTimeout(customizeUI, 2000);
    }

    window.addEventListener('load', initScript);
})();
