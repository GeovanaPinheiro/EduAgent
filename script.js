(() => {
    const fontPreconnect = document.createElement("link");
    fontPreconnect.rel = "preconnect";
    fontPreconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontPreconnect);

    const fontOriginPreconnect = document.createElement("link");
    fontOriginPreconnect.rel = "preconnect";
    fontOriginPreconnect.href = "https://fonts.gstatic.com";
    fontOriginPreconnect.crossOrigin = "anonymous";
    document.head.appendChild(fontOriginPreconnect);

    const montserratFont = document.createElement("link");
    montserratFont.rel = "stylesheet";
    montserratFont.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(montserratFont);

    const style = document.createElement("style");
    style.id = "eduagent-ui-customizations";
    style.textContent = `
        *,
        *::before,
        *::after {
            font-family: "Montserrat", sans-serif;
        }

        .topbar {
            position: relative;
            justify-content: center;
        }

        .logo-area {
            text-align: center;
        }

        .logo-area h1 {
            justify-content: center;
        }

        .topbar-controls {
            position: absolute;
            right: 30px;
        }

        .tab-btn {
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }

        .tab-btn.active {
            background-color: var(--card-bg);
            border-color: var(--border-color);
            color: var(--text-color);
        }

        .tab-btn:hover,
        .tab-btn:focus-visible,
        .tab-btn.active:hover,
        .tab-btn.active:focus-visible {
            transform: translateY(-5px);
            background-color: #06b6d4;
            border-color: #06b6d4;
            color: #fff;
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
        }

        .tab-btn:focus-visible {
            outline: 3px solid #06b6d4;
            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            .topbar {
                flex-direction: column;
                gap: 12px;
            }

            .topbar-controls {
                position: static;
            }
        }
    `;
    document.head.appendChild(style);
})();