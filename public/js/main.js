function toggleForm() {
    const form = document.getElementById("messageForm")
    form.classList.toggle("hidden")
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const membershipButton = document.querySelector('a[href="/membership"]')
    membershipButton.addEventListener("click", (e) => {
      e.preventDefault()
      const secretCode = prompt("Enter the secret code to become a member:")
      if (secretCode === "12345") {
        // Change this to your actual secret code
        alert("Congratulations! You are now a member.")
        // Here you would typically make an API call to update the user's membership status
      } else {
        alert("Incorrect secret code. Please try again.")
      }
    })
  })
  
  