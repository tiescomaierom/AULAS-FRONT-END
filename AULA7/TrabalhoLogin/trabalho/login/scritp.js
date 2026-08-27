function realizarLogin() {
    localStorage.setItem("email", 'senac@gmail.com')
    const user = {
        email: "senac@gmail.com",
        nome: "Pedro"
    }
    const userJson = JSON.stringify(user)//JSON
    localStorage.setItem("user", userJson)
    setTimeout(() => {
        window.location.href = "/"
    }, 3000);
}
function formLogin() {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log('form submit')
        const inputEmail = document.querySelector("#email")
        const inputSenha = document.querySelector("#senha")
        console.log(inputEmail.value, inputSenha.value)
        if (inputEmail.value == "senac@gmail.com" && inputSenha.value == "1234") {
            localStorage.setItem("email", inputEmail.value)
            const user = {
                email: inputEmail.value,
                nome: inputEmail.value
            }
            const userJson = JSON.stringify(user)//JSON
            localStorage.setItem("user", userJson)
            location.href = "/"
        }
    })
}
formLogin()