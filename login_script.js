const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Signup
const signupForm = document.querySelector("form.signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm.querySelectorAll("input")[0].value;
  const password = signupForm.querySelectorAll("input")[1].value;
  const confirm = signupForm.querySelectorAll("input")[2].value;

  if (password !== confirm) {
    alert("Parollar mos emas!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.email === email);

  if (exists) {
    alert("Bu foydalanuvchi allaqachon ro'yxatdan o'tgan!");
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
    signupForm.reset();

    // 🔥 Ro‘yxatdan o‘tgan foydalanuvchini tizimga kiritish va index.html ga o‘tkazish
    window.location.href = "index.html";
  }
});

// Login
const loginFormSubmit = document.querySelector("form.login");
loginFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginFormSubmit.querySelectorAll("input")[0].value;
  const password = loginFormSubmit.querySelectorAll("input")[1].value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("Tizimga muvaffaqiyatli kirdingiz!");
    window.location.href = "index.html";
  } else {
    alert("Login yoki parol noto'g'ri!");
  }
});
