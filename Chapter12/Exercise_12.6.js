
function setCookie(cookieName, cookieValue, days) {
    // Check if 'days' is a positive integer
    if (Number.isInteger(days) && days > 0) {
        let currentDate = new Date();

        // Calculate the expiration date based on the provided days
        currentDate.setTime(currentDate.getTime() + (days * 24 * 60 * 60 * 1000));
        
        // Format the expiration date as a UTC string
        let expires = `expires=${currentDate.toUTCString()}`;

        document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
        console.log(expires);
    }
}

function getCookie(cookieName) {
    // Split the document.cookie
    let cookies = document.cookie.split(';');

    // Iterate through each cookie
    for (let i = 0; i < cookies.length; i++) {
        // Split the cookie into its name and value
        let cookie = cookies[i].split('=');

        // Check if the current cookie's name matches the provided cookieName
        if (cookie[0].trim() === cookieName) {
            // Return the value of the matching cookie
            return cookie[1];
        }
    }
}

function deleteCookie(cookieName) {
    // Set the cookie with the provided name to an empty string and an expiration date in the past (-1)
    setCookie(cookieName, "", -1);
}

setCookie("type", "input", 5);
setCookie("color", "black", 6);

console.log(`First cookie: ${getCookie("type")}`);
console.log(`Second cookie: ${getCookie("color")}`);

console.log(deleteCookie("type"));

// Log the current cookies to the console
console.log(document.cookie);
