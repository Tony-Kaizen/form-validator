const form = document.querySelector('form');

//validate form
form.addEventListener('submit', (e) => {
  // prevent page from reloading
  e.preventDefault();

  // input values
  const name = form.name.value;
  const username = form.username.value;
  const password = form.password.value;
  const confirmPass = form.confirm.value;

  // regex patterns
  const namePattern = /^[a-zA-Z]{3,}$/;
  const usernamePattern = /^[a-zA-Z0-9]{6,}$/;
  const passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/;

  //feedback 
  const nameError = document.querySelector('#name-error');
  const userError = document.querySelector('#user-error');
  const passError = document.querySelector('#pass-error');
  const confirmError = document.querySelector('#confirm-error');

  //check name
  if (namePattern.test(name)) {
    form.name.classList.add('success');
  } else {
    form.name.classList.add('error');
    nameError.innerHTML = 'Name must be at least 3 letters!';
  }

  //check username
  if (usernamePattern.test(username)) {
    form.username.classList.add('success');
  } else {
    form.username.classList.add('error');
    userError.innerHTML = 'Username must be at least 6 letters!';
  }

  //check password
  if (passwordPattern.test(password)) {
    form.password.classList.add('success');
  } else {
    form.password.classList.add('error');
    passError.innerHTML = 'Password must be at least 6 characters!';
  }

  //confirm password
  if (confirmPass === password) {
    form.confirm.classList.add('success');
  } else {
    form.password.classList.remove('success');
    form.password.classList.add('error');
    form.confirm.classList.add('error');
    confirmError.innerHTML = 'Passwords do not match!';
  }

  //reset form if success
  if (namePattern.test(name)
    && usernamePattern.test(username)
    && passwordPattern.test(password)
    && confirmPass === password) {
    setTimeout(() => {
      form.name.classList.remove('success');
      form.username.classList.remove('success');
      form.password.classList.remove('success');
      form.confirm.classList.remove('success');
      form.reset();
    }, 3000);
  };

});

// key up event
// form.name.addEventListener('keypup', e => {

// });