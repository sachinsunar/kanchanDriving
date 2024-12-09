const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
  });
};

showMenu('nav-toggle', 'nav-menu');



document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");
  faqs.forEach(faq => {
      faq.addEventListener("click", () => {
          faq.classList.toggle("open");
          const content = faq.querySelector("p");
          content.style.display = content.style.display === "block" ? "none" : "block";
      });
  });
});





    (function() {
        emailjs.init("jpmXxZV_ZtbWpZPPs"); // Replace with your EmailJS User ID
    })();
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page


        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send Email via EmailJS
        emailjs.send("service_n24n7ih", "template_vlfe8mc", formData)
            .then(function(response) {
                alert('Message sent successfully!');
                window.location.reload() // Success Alert
            }, function(error) {
                alert('Failed to send message: ' + error.text); // Error Alert
            });

            
    });
