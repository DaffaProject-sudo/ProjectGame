document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  // Terapkan tema tersimpan saat halaman dibuka
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.checked = false;
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.checked = true;
  }

  // Event saat tombol tema diubah
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  });
});