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
    nameError.innerHTML = '';
  } else {
    form.name.classList.add('error');
    nameError.innerHTML = 'Name must be at least 3 letters!';
  }

  if (!name.length) {
    nameError.innerHTML = 'You must enter your name!';
  }

  //check username
  if (usernamePattern.test(username)) {
    form.username.classList.add('success');
    userError.innerHTML = '';
  } else {
    form.username.classList.add('error');
    userError.innerHTML = 'Username must be at least 6 letters!';
  }

  if (!username.length) {
    userError.innerHTML = 'You must choose a username!';
  }

  //check password
  if (passwordPattern.test(password)) {
    form.password.classList.add('success');
    passError.innerHTML = '';
  } else {
    form.password.classList.add('error');
    passError.innerHTML = 'Password must be at least 6 characters!';
  }

  if (!password.length) {
    passError.innerHTML = 'You must choose a password!';
  }

  //confirm password
  if (confirmPass === password) {
    form.confirm.classList.add('success');
    confirmError.innerHTML = '';
  } else {
    form.password.classList.remove('success');
    form.password.classList.add('error');
    form.confirm.classList.add('error');
    confirmError.innerHTML = 'Passwords do not match!';
  }

  if (password.length && !confirmPass.length) {
    confirmError.innerHTML = 'You must confirm your password!';
  } else if (!confirmPass.length) {
    confirmError.innerHTML = '';
    form.confirm.classList.remove('success');
  }

  //reset form if success
  if (namePattern.test(name)
    && usernamePattern.test(username)
    && passwordPattern.test(password)
    && confirmPass === password) {
    setTimeout(() => {
      form.name.classList.remove('success', 'error');
      form.username.classList.remove('success', 'error');
      form.password.classList.remove('success', 'error');
      form.confirm.classList.remove('success', 'error');
      nameError.innerHTML = '';
      userError.innerHTML = '';
      passError.innerHTML = '';
      confirmError.innerHTML = '';
      form.reset();
    }, 3000);
  };

});

// key up event
// form.name.addEventListener('keypup', e => {

// });