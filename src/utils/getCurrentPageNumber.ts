function getCurrentPageNumber() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const pageHeight = window.innerHeight;
  return Math.ceil(scrollTop / pageHeight);
}

export default getCurrentPageNumber;