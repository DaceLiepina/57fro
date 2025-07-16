const form = document.getElementById("login-form");
const messageEl = document.getElementById("message");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
        email: event.target.email.value,
        password: event.target.password.value,
    };
    console.log(user);
    fetchLogin(user);
});

async function fetchLogin(user) {
     const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    messageEl.textContent = "Login successful!";
  } else {
    messageEl.textContent = "Login failed!";
  }
}