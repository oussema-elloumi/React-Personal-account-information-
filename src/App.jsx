import React, { useState } from "react";
import logo from "./assets/logo.png";
import user  from "./assets/user.png";
const AccountInformation = () => {
  const [industryInfoOpen, setIndustryInfoOpen] = useState(false);
  const [productInfoOpen, setProductInfoOpen] = useState(false);

  const toggleIndustryInfo = () => setIndustryInfoOpen(!industryInfoOpen);
  const toggleProductInfo = () => setProductInfoOpen(!productInfoOpen);


  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      color: "#000",
      padding: "20px",
      height: "100vh", // Full height of the viewport
      width: "100vw",  // Full width of the viewport
      boxSizing: "border-box",
      overflow: "auto", // Scroll if content exceeds viewport
      position: "relative",// Ensure the button is positioned relative to this container
      
      
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px",
      border:"2px solid #000000",
      padding:"10px 2px",
      borderRadius:"10px",
      background:"#ffffff",
      height:"15%"
      
    },
    logo: {
      width: "120px",
      height: "120px",
    },
    
    navbar: {
      display: "flex",
      gap: "200px",
      justifyContent:"flex-end",
      width:"65%",
    },
    navLink: {
      textDecoration: "none",
      color: "#B22222",
      fontWeight: "bold",
      
    },
    icons: {
      display: "flex",
      gap: "10px",
    },
    user: {
      width: "30px",
      height: "30px",
      fontSize: "25px",
      background: "none",
      cursor: "pointer",
      padding:"10px",
    },
    leftIcon: {
      position: "absolute", // Permet un positionnement indépendant
      left: "7%", // Aligne l'icône complètement à gauche
      top: "30%", // Aligne l'icône verticalement au centre
      transform: "translateY(-50%)", // Ajuste pour centrer exactement
      padding: "10px",
      border: "1px solid #000000",
      borderRadius: "50%", // Optionnel : pour un effet rond
      cursor: "pointer", // Change le curseur pour indiquer qu’il est cliquable
    },
    iconText: {
      fontSize: "30px", // Taille du texte (si icône sous forme de texte)
      color: "black",
    },
    iconButton: {
      fontSize: "24px",
      border: "1x solid #ccc",
      background: "none",
      cursor: "pointer",
      borderRadius:"100%",
      padding:"20px"
    },
    rightIcon: {
      maxWidth: "0.1x",
      maxHeight: "0.001px",
      objectFit: "contain", // Ajuste l'image sans la déformer
    position: "absolute", // Positionnement indépendant
    right: "3%", // Aligne l'icône complètement à droite
    top: "50%", // Centre verticalement
    transform: "translateY(-50%)", // Ajustement pour centrer parfaitement
    padding: "0px",
    borderRadius: "1000%", // Pour un effet rond (facultatif)
    
    },
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      flex:1,
    },
    
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize:"35px",
    },
    inputGroup: {
      marginBottom: "20px",
      display: "flex",  // Align inputs and labels on the same line if needed
      flexDirection: "column",  // Stack label and input vertically
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      height: "80px",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    collapsible: {
      width: "103.7%",
      padding: "12px",
      backgroundColor: "#f1f1f1",
      border: "1px solid #ccc",
      borderRadius: "5px",
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between", // Align the arrow and text
      alignItems: "center", // Center the content vertically
    },
    collapsibleContent: {
      width:"99.1%",
      padding: "12px",
      border: "1px solid #ccc",
      borderTop: "none",
    },
    contactButton: {
      position: "absolute", // Position it relative to the nearest positioned ancestor (container)
      
      left: "50%", // Center horizontally
      transform: "translateX(-50%)", // Adjust the position to perfectly center the button
      width: "800px", // Set a fixed width for the button
      padding: "20px",
      backgroundColor: "#cc4545",
      color: "#000",
      border: "none",
      borderRadius: "20px",
      fontWeight: "bold",
      cursor: "pointer",
      textAlign: "center",
      fontSize: "16px",  // Consistent font size for the button
      marginTop:"10px",
    },
    arrow: {
      transition: "transform 0.3s ease", // Smooth transition for the arrow rotation
    },
  };

  return (

    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <nav style={styles.navbar}>
          <a href="/" style={styles.navLink}>HOME</a>
          <a href="/about" style={styles.navLink}>ABOUT US</a>
          <a href="/subscribe" style={styles.navLink}>SUBSCRIBE</a>
        </nav>
        <div style={styles.icons}>
        
        <button ><img src={user} alt="user"style={styles.user}/></button>
        <button style={styles.iconButton}>?</button>
      
          
        </div>
      </header>
     {/* Icône à gauche */}
     <div style={styles.leftIcon}>
        <span style={styles.iconText}>⬅</span> 
      </div>

      {/* Form */}
      <div style={styles.form}>
        <h2 style={styles.title}>Personal Account Information</h2>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Industry Name</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Industry Code</label>
          <input type="text" style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" style={styles.input} />
        </div>

        {/* Collapsible Industry Information */}
        <div>
          <button
            style={styles.collapsible}
            onClick={toggleIndustryInfo}
          >
            <span>Industry Information</span>
            <span
              style={{
                ...styles.arrow,
                transform: industryInfoOpen ? "rotate(90deg)" : "rotate(0deg)", // Rotate arrow when clicked
              }}
            >
              ▶ {/* Right arrow */}
            </span>
          </button>
          {industryInfoOpen && (
            <div style={styles.collapsibleContent}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Industry ID</label>
                <input type="text" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Industry Location</label>
                <input type="text" style={styles.input} />
              </div>
            </div>
          )}
        </div>

        {/* Collapsible Products Information */}
        <div>
          <button
            style={styles.collapsible}
            onClick={toggleProductInfo}
          >
            <span>Products Information</span>
            <span
              style={{
                ...styles.arrow,
                transform: productInfoOpen ? "rotate(90deg)" : "rotate(0deg)", // Rotate arrow when clicked
              }}
            >
              ▶ {/* Right arrow */}
            </span>
          </button>
          {productInfoOpen && (
            <div style={styles.collapsibleContent}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Product Name</label>
                <input type="text" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Product Code</label>
                <input type="text" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Product ID</label>
                <input type="text" style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Description</label>
                <textarea style={styles.textarea}></textarea>
              </div>
            </div>
          )}
        </div>

        {/* Contact Us Button */}
        <button style={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default AccountInformation;