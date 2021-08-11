var input = document.querySelector("input");
var result = document.querySelector(".result");
var disabledBtns = document.querySelectorAll(".disabled");

// click on C button >> clears input field
var cancelBtn = document.querySelector(".cancel");
cancelBtn.addEventListener("click", () => input.value = "");

input.onchange = e => result.innerHTML = e.target.value;

var textsBtn = document.querySelectorAll('.text');

textsBtn.forEach(btn => {
    btn.onclick = () => {
        if (btn.innerHTML === "%") {
            btn.innerHTML = "/100";
            input.value+= btn.innerHTML
        } else {
            input.value+= btn.innerHTML;
        }
    }
    input.focus();
})


document.querySelector("form").onsubmit = e => {
    e.preventDefault();
    // input.value = eval(input.value)
    result.innerHTML = eval(input.value)

}

document.querySelector(".equals").onclick = () => {
    result.innerHTML = eval(input.value);
    input.focus()
}