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


    // Initialize EmailJS
   
  
      // Handle form submission
      document.getElementById("requestForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Collect form data
        const formData = {
          user_phone: this.user_phone.value
        };
  
        // Send the email using EmailJS
        emailjs.send("service_n24n7ih", "template_cq3ba2s", formData)
          .then(function(response) {
            alert("Request sent successfully! We'll get back to you shortly.");
            console.log("Success!", response.status, response.text);
          })
          .catch(function(error) {
            alert("There was an error sending your request. Please try again.");
            console.error("EmailJS Error:", error);
          });
  
        // Reset the form
        this.reset();
      });


      

  // Function to animate the count
  function animateCount(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Observe when the section comes into view
  document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".driving-test-section");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animations only once
          animateCount("students-count", 4789, 5000, 2000); // Animate 5000+
          animateCount("pass-rate", 0, 96, 1500); // Animate 96%
          observer.disconnect(); // Stop observing after the animation runs
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold if needed

    observer.observe(section);
  });


