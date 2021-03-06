/* Put current date and copyright year in footer */
(function () {

    // Put current year in inner text of appropriate element
    document.getElementById("copyrightyear").innerText = new Date().getFullYear();
  
    // Put current date in footer
    const dow = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  
    let date = new Date();
  
    document.getElementById("current-date").innerText =
      `${dow[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
  
  })();