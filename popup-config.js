/* 
  =========================================
  MULTI-POPUP CONFIGURATION WITH DUAL BUTTONS
  =========================================
*/

const popupConfig = {
  isEnabled: true,          // SET TO false TO DISABLE ALL POPUPS
  activePopupId: 2,         // CHOOSE: 1 for apple, 2 for Meditation

  popups: [
    // ===========================
    // POPUP 1 SETTINGS
    // ===========================
    {
      id: 1,
      timing: {
        showAfterMs: 2000,       
        enableCloseAfterMs: 30000 
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
        titleFontSize: "1.5rem",
        bodyFontSize: "1.0rem",
        buttonFontSize: "0.8rem",
        buttonBg: "#000000",        // Button 1 Background
        buttonText: "#ffffff",      // Button 1 Text
        buttonHover: "#333333",     // Button 1 Hover
        buttonRadius: "50px",
        imageSize: "120px",
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
        buttonRadius: "50px",        // Button 2 Shape
        buttonFontSize: "1.1rem"    // Button 2 Size
      },
      content: {
        imageUrl: "https://raw.githubusercontent.com/venkateshtest19/peacefulmeditation/refs/heads/main/PopupLogo2.png",
        imageAlt: "",
        title: "Apple Pay Notification",
        message: "Your Pre Autherized Order is Placed Successfuly Charges <strong>$199</strong> Will Be Deducted Sooner.<br><br> If This Order Is Not Placed By You Kindly Contact Apple Support Immediatley.<br>Find The Toll Free Number Below.",
        codeLabel: "",
        codeValue: "", 
        
        // --- BUTTON 1 ---
        buttonText: "Toll Free Number - +1 855-711-2157",
        buttonLink: "#enroll",
        openInNewTab: false,
        
        // --- BUTTON 2 ---
        secondaryButtonText: "Call Apple Customer Support Now",
        secondaryButtonLink: "about.html",
        secondaryOpenInNewTab: false,
        
        footerNote: "Kindly contact support immediately.",
    
    
    // Coupon/Code Section (Set codeValue to "" to hide it)
   // codeLabel: "Use Promo Code:",
   // codeValue: "PEACE20", 
    
    // Button & Links
    buttonText: "Call Apple Support Now",
    buttonLink: "tel:+1 801-843-8680", // Can be external (https://...) or internal (#enroll)
    openInNewTab: true,    // Set to true if buttonLink is an external website
    
    footerNote: "<strong>Calling immediately may resolve issues quicker.</strong>"
      }
    },
    // ===========================
    // POPUP 2 SETTINGS
    // ===========================
     {
      id: 2,
      timing: {
        showAfterMs: 2000,       
        enableCloseAfterMs: 30000 
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
        titleFontSize: "1.5rem",
        bodyFontSize: "1.0rem",
        buttonFontSize: "0.8rem",
        buttonBg: "#000000",        // Button 1 Background
        buttonText: "#ffffff",      // Button 1 Text
        buttonHover: "#333333",     // Button 1 Hover
        buttonRadius: "50px",
        imageSize: "120px",
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
        buttonRadius: "50px",        // Button 2 Shape
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
        secondaryButtonText: "Check Plans",
        secondaryButtonLink: "https://peacefulmeditation.vercel.app/plans.html",
        secondaryOpenInNewTab: false,
        
        footerNote: "Offer valid for new enrollments only. Terms apply."
      }
    }
  ]
};
