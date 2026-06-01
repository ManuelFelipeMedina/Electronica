document.addEventListener('DOMContentLoaded', () => {
    //meow meow meow meow
    const button = document.getElementById("toggle")
    const sidebar = document.getElementById("hiddeable")
    let is_shown = false
    //   button.addEventListener("click", () => {
    //        if (is_shown == false and button.textContent = "show") {
    //            sidebar.classList.add("shown")
    //            is_shown = true
    //        }
    //       else {
    //           sidebar.classList.remove("shown")
    //           is_shown = false
    //     } })

    button.addEventListener("click", () => {
        sidebar.classList.toggle("shown")
    })




})