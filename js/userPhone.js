let input = document.querySelector('#user-phone');
window.intlTelInput(input, {
  initialCountry: 'RU',
  utilsScript: './js/utils.js?<%= time %>',
  placeholderNumberType: 'MOBILE',
  preferredCountries: ['BY', 'RU'],
  separateDialCode: true,
});
