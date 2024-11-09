const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

confirmPassword.addEventListener('input', () => {
  if (password.value !== confirmPassword.value) {
    passwordError.classList.remove('hidden');
    password.focus();
  } else {
    passwordError.classList.add('hidden');
  }
});

const rating = document.getElementById('rating');
const ratingValue = document.getElementById('rating-value');

rating.addEventListener('input', () => {
  ratingValue.textContent = rating.value;
});