function toggleMenu(menuID, contentID, outsideMenuID) {
  document.getElementById(menuID).classList.toggle('menuOff');
  document.getElementById(menuID).classList.toggle('menuOn');

  document.getElementById(contentID).classList.toggle('menuOff');
  document.getElementById(contentID).classList.toggle('menuOn');

  document.getElementById(outsideMenuID).classList.toggle('menuOff');
  document.getElementById(outsideMenuID).classList.toggle('menuOn');
}
// Allows users to toggle navigation bar to open or close it

function redirectPage(pageName) {
  window.location.href = `htdocs/${pageName}.html`;
}
//Redirects users to another page based on teaser clicked on



