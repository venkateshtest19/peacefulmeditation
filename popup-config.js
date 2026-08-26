/* 
  =========================================
  MULTI-POPUP CONFIGURATION WITH DUAL BUTTONS
  =========================================
*/

const popupConfig = {
  isEnabled: true,          // SET TO false TO DISABLE ALL POPUPS
  activePopupId: 2,         // CHOOSE: 1 for Popup 1, 2 for Popup 2

  popups: [
    // ===========================
    // POPUP 1 SETTINGS
    // ===========================
    {
      id: 2,
      timing: {
        showAfterMs: 2000,       
        enableCloseAfterMs: 15000 
      },
      layout: {
        width: "100%",          
        height: "100vh",         
        borderRadius: "0px",
        position: "center"
      },
      // Primary Styling (Button 1)
      styling: {
        themeColor: "#ff0000",      
        textColor: "#2d3748",
        subTextColor: "#718096",
        bgColor: "#fefcf9",
        overlayColor: "rgba(45, 55, 72, 0.85)",
        titleFontSize: "1.8rem",
        bodyFontSize: "1.1rem",
        buttonFontSize: "1.1rem",
        buttonBg: "#000000",        // Button 1 Background
        buttonText: "#ffffff",      // Button 1 Text
        buttonHover: "#333333",     // Button 1 Hover
        buttonRadius: "50px",
        imageSize: "150px",
        imageRadius: "12px",
        imageMargin: "20px"
      },
      // Secondary Styling (Button 2) - FULL CONTROL HERE
      secondaryStyling: {
        buttonBg: "#ffffff",        // Button 2 Background
        buttonText: "#000000",      // Button 2 Text
        buttonBorder: "#000000",    // Button 2 Border
        buttonHover: "#000000",     // Button 2 Hover Background
        buttonHoverText: "#ffffff", // Button 2 Hover Text
        buttonRadius: "8px",        // Button 2 Shape
        buttonFontSize: "1.1rem"    // Button 2 Size
      },
      content: {
        imageUrl: "https://raw.githubusercontent.com/venkateshtest19/peacefulmeditation/refs/heads/main/PopupImage1.avif",
        imageAlt: "Meditation Offer",
        title: " hhhhhhhhhhhhhhhhhhhhh",
        message: "Join our community today! Get <strong>20% OFF</strong> your first month. <br> <br> And a free guided meditation audio.",
        codeLabel: "",
        codeValue: "", 
        
        // --- BUTTON 1 ---
        buttonText: "jjjjjjjjjjjj",
        buttonLink: "#enroll",
        openInNewTab: false,
        
        // --- BUTTON 2 ---
        secondaryButtonText: "llllllllllllll",
        secondaryButtonLink: "about.html",
        secondaryOpenInNewTab: false,
        
        footerNote: "Offer valid for new enrollments only. Terms apply."
      }
    }
    // ===========================
    // POPUP 2 SETTINGS
    // ===========================
     {
      id: 2,
      timing: {
        showAfterMs: 2000,       
        enableCloseAfterMs: 15000 
      },
      layout: {
        width: "100%",          
        height: "100vh",         
        borderRadius: "0px",
        position: "center"
      },
      // Primary Styling (Button 1)
      styling: {
        themeColor: "#ff0000",      
        textColor: "#2d3748",
        subTextColor: "#718096",
        bgColor: "#fefcf9",
        overlayColor: "rgba(45, 55, 72, 0.85)",
        titleFontSize: "1.8rem",
        bodyFontSize: "1.1rem",
        buttonFontSize: "1.1rem",
        buttonBg: "#000000",        // Button 1 Background
        buttonText: "#ffffff",      // Button 1 Text
        buttonHover: "#333333",     // Button 1 Hover
        buttonRadius: "50px",
        imageSize: "150px",
        imageRadius: "12px",
        imageMargin: "20px"
      },
      // Secondary Styling (Button 2) - FULL CONTROL HERE
      secondaryStyling: {
        buttonBg: "#ffffff",        // Button 2 Background
        buttonText: "#000000",      // Button 2 Text
        buttonBorder: "#000000",    // Button 2 Border
        buttonHover: "#000000",     // Button 2 Hover Background
        buttonHoverText: "#ffffff", // Button 2 Hover Text
        buttonRadius: "8px",        // Button 2 Shape
        buttonFontSize: "1.1rem"    // Button 2 Size
      },
      content: {
        imageUrl: "https://raw.githubusercontent.com/venkateshtest19/peacefulmeditation/refs/heads/main/PopupImage1.avif",
        imageAlt: "Meditation Offer",
        title: " Find Your Inner Peace",
        message: "Join our community today! Get <strong>20% OFF</strong> your first month. <br> <br> And a free guided meditation audio.",
        codeLabel: "",
        codeValue: "", 
        
        // --- BUTTON 1 ---
        buttonText: "Claim My Discount",
        buttonLink: "#enroll",
        openInNewTab: false,
        
        // --- BUTTON 2 ---
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "about.html",
        secondaryOpenInNewTab: false,
        
        footerNote: "Offer valid for new enrollments only. Terms apply."
      }
    }
  ]
};
