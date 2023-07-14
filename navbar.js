const image = document.getElementById("profile-image");
      const dropdownContent = document.querySelector(".dropdown-content");

      image.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });