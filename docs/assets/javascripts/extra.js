document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("fzp-js-enabled");

  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="from-zero-to-production-with-ai"])');
  externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
});
