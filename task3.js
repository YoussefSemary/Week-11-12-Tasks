let numberConvert = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

document.forms[0].oninput = function (e) {
  let usdValue = numberConvert.value || 0;
  let egpValue = (usdValue * 15.6).toFixed(2);
  result.textContent = `{${usdValue}} USD Dollar = {${egpValue} Egyptian Pound}`;
};
