function getCSRFParam() {
  return document.querySelector('meta[name="csrf-param"]').getAttribute('content');
}

function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

export {
  getCSRFParam,
  getCSRFToken,
}
