for (let i = 0; i < document.links.length; i++) {
  if (document.links[i].href == document.URL) {
    document.links[i].className = "active_link";
    console.log(document.URL);
  }
}
