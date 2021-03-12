const element = document.querySelector("#div1").innerText
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log(el)
};
document.querySelector(".header__mail__copy").addEventListener("click", copyToClipboard(element))