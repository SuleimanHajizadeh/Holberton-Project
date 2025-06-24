document.addEventListener("DOMContentLoaded", () => {
  const thumbnail = document.getElementById("smart_thumbnail");
  if (!thumbnail) return;

  thumbnail.addEventListener("click", () => {
    thumbnail.classList.toggle("small");
  });
});