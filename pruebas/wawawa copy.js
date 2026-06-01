const autoToggle = (callbcakIfFalse, callbackIfTrue, initial_State = false) => {
    let is_show = !!initial_State
    return () => {
        if (!is_show) {
            callbcakIfFalse()
        }
        else {
            callbackIfTrue()
        }
        is_show = !is_show
    }

}

document.addEventListener('DOMContentLoaded', () => {
    //meow meow meow meow
    const button = document.getElementById("toggle")
    const sidebar = document.getElementById("hiddeable")

    //   button.addEventListener("click", () => {
    //        if (is_shown == false and button.textContent = "show") {
    //            sidebar.classList.add("shown")
    //            is_shown = true
    //        }
    //       else {
    //           sidebar.classList.remove("shown")
    //           is_shown = false
    //     } })

    button.addEventListener("click", autoToggle(() => { sidebar.classList.add("shown") },
        () => { sidebar.classList.remove("shown") }))

})