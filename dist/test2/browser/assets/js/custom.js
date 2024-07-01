// // mobile-responsive
// const navbarToggle = document.querySelector('.navbar-toggle');
// navbarToggle.addEventListener('click', function () {
//     navbarToggle.classList.toggle('active');
//     document.querySelector('nav ul').classList.toggle('active');
// });
// // mobile-responsive


// // Filter Dropdown
// const customSelects = document.querySelectorAll(".custom-select");
// const optionsLists = document.querySelectorAll(".select-dropdown");

// function handleSelectDropdown(customSelect, optionsList) {
//     const selectBtn = customSelect.querySelector(".select-button");
//     const selectedValue = customSelect.querySelector(".selected-value");
//     const options = optionsList.querySelectorAll("li");

//     // Custom data attribute to group radio buttons
//     const radioGroup = customSelect.getAttribute("data-dropdown-id");

//     selectBtn.addEventListener("click", () => {
//         customSelect.classList.toggle("active");
//         selectBtn.setAttribute(
//             "aria-expanded",
//             selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
//         );
//     });

//     options.forEach((option) => {
//         function handler(e) {
//             if ((e.type === "click" && e.clientX !== 0 && e.clientY !== 0) || e.key === "Enter") {
//                 const radioButton = option.querySelector('input[type="radio"]');
//                 selectedValue.textContent = option.children[1].textContent;
//                 radioButton.checked = true;
//                 customSelect.classList.remove("active");

//                 // Uncheck other radio buttons in the same group
//                 const otherRadioButtons = document.querySelectorAll(`.custom-select[data-dropdown-id="${radioGroup}"] input[type="radio"]`);
//                 otherRadioButtons.forEach((radio) => {
//                     if (radio !== radioButton) {
//                         radio.checked = false;
//                     }
//                 });
//             }
//         }

//         option.addEventListener("keyup", handler);
//         option.addEventListener("click", handler);
//     });
// }

// customSelects.forEach((customSelect, index) => {
//     const optionsList = optionsLists[index];
//     handleSelectDropdown(customSelect, optionsList);
// });


// // Filter Dropdown

// function showfilter() {
//     var myDiv = document.getElementById('dprt-filter');
//     myDiv.style.display = 'block';
// }

// function hidefilter() {
//     var myDiv = document.getElementById('dprt-filter');
//     myDiv.style.display = 'none';
// }


