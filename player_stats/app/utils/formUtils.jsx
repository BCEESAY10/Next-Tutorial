

export const clearFieldsAndShowSuccess = (setPlayerName, setClub, setPosition, setSuccessMessage) => {
    // Clear the form fields by setting state to empty strings
    setPlayerName("");
    setClub("");
    setPosition("");
  
    // Set a success message
    setSuccessMessage("Player stats submitted successfully!");
  
    // Optionally, remove the success message after a few seconds
    setTimeout(() => {
      setSuccessMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };
  