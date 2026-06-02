let dun = document.getElementById("total");
let tulbur = document.getElementById("bill");

function huvisongoh(huvi) {
  let tulburToo = Number(tulbur.value);
  let niitDun = tulburToo + (tulburToo * huvi) / 100;

  dun.textContent = "Total " + niitDun;
}

function tseverleh() {
  tulbur.value = "";
  dun.textContent = "0";
}
