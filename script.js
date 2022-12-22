// Check if document is still loading
if (document.readState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Javascript only runs when page is done loading 
function ready () {
    updateTheStuff()
}

function updateTheStuff() {
    // Gather the info
    var today = new Date();
    
    // Make the updates
    
    // Hours, minutes, and seconds
    document.getElementsByClassName('hours')[0].innerText = today.getHours();
    document.getElementsByClassName('minutes')[0].innerText = today.getMinutes();
    document.getElementsByClassName('seconds')[0].innerText = today.getSeconds();

    // Date
    
    // Weekday
    var l = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementsByClassName('weekday')[0].innerText = l[today.getDay()];

    // Month and day
    var l1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementsByClassName('month')[0].innerText = l1[today.getMonth()];
    document.getElementsByClassName('day')[0].innerText = today.getDate();
    // Keep calling the function
    window.setInterval(updateTheStuff, 1000);
}