// Entry point: theme toggle + footer year + contact links config.
console.log("[margo-sites-aave] ready");

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Theme toggle (light <-> dark), persisted per browser
const root = document.documentElement;
const stored = localStorage.getItem("margo-theme");
const themeParam = new URLSearchParams(location.search).get("theme");
if (stored === "dark" || themeParam === "dark") root.dataset.theme = "dark";
function toggleTheme() {
  const dark = root.dataset.theme !== "dark";
  if (dark) root.dataset.theme = "dark"; else delete root.dataset.theme;
  localStorage.setItem("margo-theme", dark ? "dark" : "light");
}
for (const id of ["theme-toggle", "theme-toggle-footer"]) {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", toggleTheme);
}

// Contacts: fill in real addresses in the constants below — until then an honest note is shown.
const CONTACTS = { email: "", telegram: "" };
const contactLinks = document.getElementById("contact-links");
if (contactLinks) {
  const parts = [];
  if (CONTACTS.email) {
    parts.push(`<a href="mailto:${CONTACTS.email}?subject=${encodeURIComponent("Заказ сайта")}">${CONTACTS.email}</a>`);
  }
  if (CONTACTS.telegram) {
    parts.push(`<a href="https://t.me/${CONTACTS.telegram}" rel="noopener">t.me/${CONTACTS.telegram}</a>`);
  }
  contactLinks.innerHTML = parts.length
    ? parts.join("")
    : "Контакты скоро появятся здесь — адрес почты и телеграм уточняются.";
}
