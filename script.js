// @imac2

if (!window.EyeDropper) {
  window.pre.innerHTML = "Chrome 95 required";
}

const getColor = async (e) => {
  const eyeDropper = new EyeDropper();
  try{
    const { sRGBHex } = await eyeDropper.open();
    document.querySelector('.preview')
      .style.background = sRGBHex;
    
    document.querySelector('.color').value = sRGBHex;
  } catch (e) {
        document.querySelector('.color').value = 'Ups! Error!'
  }
};

// Click binding
document.querySelector(".getColor")
    .addEventListener("click", getColor);
