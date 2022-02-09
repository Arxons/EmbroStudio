let input = document.querySelector('#user-phone');
window.intlTelInput(input, {
    initialCountry: "BY",
    utilsScript: "./js/utils.js?<%= time %>",
    placeholderNumberType: "MOBILE",
    preferredCountries: ['BY', 'RU'],
    separateDialCode: true
});