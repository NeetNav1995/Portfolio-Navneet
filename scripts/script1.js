
function addRecommendation() {
  let el = document.getElementById("message");
  if (el !== null && el.value != null && el.value.trim() !== "") {
    let ell = document.createElement("div");
    ell.setAttribute("class","border-2 border-gray-300 rounded-md recommendation");
    ell.innerHTML =
      
        "\<span\>\<b\>&#8220;\</b\>\</span\>\<b\>"
       +
      el.value +
      "\</b\>\<span\>\<b\>&#8221;\</b\>\</span\>";
      document.getElementById("all_rec").appendChild(ell);
    el.value = "";
    showPopUp()
  }
}

function showPopUp(bool=true){
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
