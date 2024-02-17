const container = document.querySelector('.container'),
  Input = document.querySelector('.form input'),
  btn = container.querySelector('.form button'),
  Img = container.querySelector('.qr-code img');

btn.addEventListener('click', () => {
  let qrValue = Input.value;
  if (!qrValue) return;
  btn.innerText = "Gerando..."
  Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  Img.addEventListener('load', () => {
    container.classList.add('active');
    btn.innerText = "Gerar QR Code"
  })
});

Input.addEventListener('keyup', () =>{
  if(!Input.value){
    container.classList.remove('active');
  }
})