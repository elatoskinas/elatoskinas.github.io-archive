var lastSkillCategory = null
const skillCategoryMap = new Map();

/* Window functions */
window.onload = function() {
    initializeSkillCategories();
    initializePopups();
};


// Toggle details menu off when clicked outside
window.onclick = function(event)
{
    if (event.target.className === "popup-menu")
    {
        event.target.style.display = "none";
    }
}

/* Skill Categories */
// Sets up the skill menus by setting up the category buttons
// and appropriate menu toggles on button click.
function initializeSkillCategories() {
    // Retrieve divs for navigation bar & skill menus
    const skill_navbar = $("#skills-navbar");
    const skill_menus = $("#skill-menus");

    // Retrieve childdren for each individual category & menu for skills
    const skill_category_buttons = skill_navbar.children();
    const skill_category_menus = skill_menus.children();

    skill_category_buttons.each(function(skill) {
        // Set on click listener to button
        const button = skill_category_buttons[skill];
        button.onclick = skillCategoryClick;

        // Map menu by ID in the hashmap to the button's menu attribute
        const menu = skill_category_menus[skill];

        // Create JSON object with menu & button
        var menuItem = {
            "menu": menu,
            "button": button
        }

        // Get the menu name which is an attribute on the button
        const menuName = button.getAttribute("menu");

        // Assign the created object to the map
        skillCategoryMap[menuName] = menuItem;

        // Hide menu by default
        toggleSkillCategory(menuName, false);
    })

    // Toggle first menu on
    const menuName = skill_category_buttons[0].getAttribute("menu");
    activateSkillCategory(menuName);
}

// On-click event for skill category buttons
function skillCategoryClick(event) {
    const menuName = event.target.getAttribute("menu");
    activateSkillCategory(menuName);
}

// Toggles specified menu on or off
function toggleSkillCategory(menuName, status) {
    const menuItem = skillCategoryMap[menuName];

    menuItem.menu.style.display = status ? "flex" : "none";

    if (status) {
        menuItem.button.classList.add("active-selection");
    } else {
        menuItem.button.classList.remove("active-selection");
    }
}

// Activates specified menu and hides the last one
function activateSkillCategory(menu) {
    if (lastSkillCategory != null) {
        toggleSkillCategory(lastSkillCategory, false);
    }

    toggleSkillCategory(menu, true);
    lastSkillCategory = menu;
}

/* Popup menus */
function initializePopups() {
    // These are in order due to the DOM structure; They will be retrieved in order per DOM structure
    // due to the way the JQuery fetches the elements.
    const popupDetailsButtons = $(".popup-button")
    const popupMenus = $(".popup-menu")
    const popupExitButtons = $(".popup-menu .popup-exit")

    popupDetailsButtons.each(function(id) {
        const entry = popupDetailsButtons[id];
        const menu = popupMenus[id];
        const exit = popupExitButtons[id];

        entry.onclick = function() {
            toggleDetails(menu, true)
        }

        exit.onclick = function() {
            toggleDetails(menu, false)
        }
    })
}

// Toggle details menu on/off (popup)
function toggleDetails(menu, status) {
    menu.style.display = status ? "block" : "none";
}