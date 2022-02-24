const validateEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const errorMessage = document.querySelector('.email-error');

const valueChange = (e) => {
  const { value, classList } = e.currentTarget;

  if (!validateEmail.test(value)) {
    classList.add('error');
    errorMessage.style.visibility = 'visible';
  } else {
    classList.remove('error');
    errorMessage.style.visibility = 'hidden';
  }
};

function send(event, php) {
  console.log('Отправка запроса');
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
      console.log(json);

      if (json.result == 'success') {
        alert('Сообщение отправлено');
      } else {
        alert('Ошибка. Сообщение не отправлено');
      }
    } else {
      alert('Ошибка сервера. Номер: ' + req.status);
    }
  };

  req.onerror = function () {
    alert('Ошибка отправки запроса');
  };
  req.send(new FormData(event.target));
}
