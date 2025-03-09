 
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("#tabs-nav button");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove active classes
        tabs.forEach((t) => t.classList.replace("bg-pr", "bg-gray-200"));
        tabs.forEach((t) =>
          t.classList.replace("text-white", "text-gray-700")
        );
        tabPanes.forEach((pane) => pane.classList.add("hidden"));

        // Add active class to current tab
        tab.classList.replace("bg-gray-200", "bg-pr");
        tab.classList.replace("text-gray-700", "text-white");

        // Show corresponding tab pane
        const activeTab = tab.getAttribute("data-tab");
        document.getElementById(activeTab).classList.remove("hidden");
      });
    });
  });
 
  document.addEventListener('DOMContentLoaded', () => {
     // Select the menu toggle and the mobile menu
     const menuToggle = document.querySelector('#menuToggle');
     const mobileMenu = document.querySelector('.mobile-menu');
   
     // Check if menuToggle and mobileMenu exist before adding event listeners
     if (menuToggle && mobileMenu) {
       // Function to open the menu
       menuToggle.addEventListener('click', (e) => {
         e.stopPropagation(); // Prevent this click from triggering the body click listener
         mobileMenu.classList.toggle('open'); // Toggle the 'open' class on the mobile menu
       });
   
       // Function to close the menu when clicking anywhere on the body
       document.body.addEventListener('click', () => {
         if (mobileMenu.classList.contains('open')) {
           mobileMenu.classList.remove('open'); // Remove the 'open' class to close the menu
         }
       });
   
       // Prevent clicks inside the mobile menu from closing it
       mobileMenu.addEventListener('click', (e) => {
         e.stopPropagation();
       });
     }
   });
   