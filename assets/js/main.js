let users = [
{ name: "Ferid", password: "ferid123" },
{ name: "Orxan", password: "orxan123" },
{ name: "Urfan", password: "urfan123" },
{ name: "Mehman", password: "mehman123" },
];

const signBtn = document.querySelector("#sign-in");

signBtn.addEventListener("click", () => {
const userName = document.querySelector("#username").value;
const password = document.querySelector("#password").value;

if (
    users.some((user) => user.name === userName && user.password === password)
) {
    alert("Success");
} else {
    alert("Username or Password wrong!");
}
});
