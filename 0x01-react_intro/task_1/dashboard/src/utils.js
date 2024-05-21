export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex = false) {
  if (isIndex) {
    return "Holberton School";
  }
  return "Holberton School main dashboard";
}