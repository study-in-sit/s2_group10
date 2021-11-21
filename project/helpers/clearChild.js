export default function clearChild(container) {
  //e.firstElementChild can be used.
  var child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
