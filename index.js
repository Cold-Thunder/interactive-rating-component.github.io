console.log("hello hemal")
let btn = document.querySelectorAll('.btn');
let submit = document.querySelector('.submitBtn');
let rating = document.querySelector('.rating');

submit.addEventListener('click', (e)=>{
    rating.innerHTML = `
    <div class="thank-card">
    <div class="thank">
      <div class="thank-img">
        <img src="./images/illustration-thank-you.svg" alt="thank-you">
      </div>
      <div class="rate-info">
        <div class="rate">
          <p class="rate-info-text">You selected ${rate}<!-- Add rating here --> out of 5</p>
        </div>
      </div>
      <div class="thank-text-section">
        <div class="thank-text">
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
        </div>
      </div>
    </div>
    </div>
    `
    console.log('submitted');
})

let rate = 0;

for (let i = 0; i <= btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        // rate = e.target.value;
        // console.log(rate);
        let clicked = btn[i].classList.contains('not-checked');
        if (clicked == true) {

            btn[i].classList.remove('not-checked');
            btn[i].classList.add('checked');
            rate = e.target.value;
            console.log(rate);

        } else {

            btn[i].classList.remove('checked');
            btn[i].classList.add('not-checked');
            rate = 0;

        }
    })
}