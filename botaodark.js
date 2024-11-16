const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.header.classList.toggle("header-dark");
});
