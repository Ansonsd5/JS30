const inbox = document.querySelectorAll(".inbox input[type='checkbox']")

let firstChecked

function handleClick(e) {
  if (e.shiftKey && this.checked) {
    if (firstChecked) {
      const lastChecked = this;
      let inBetween = false;
      inbox.forEach((mail) => {
        if (mail === firstChecked || mail == lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
         mail.checked = true
        }
      });
    }
  }

  firstChecked = this
}

inbox.forEach((mail) => {
  mail.addEventListener('click', handleClick)
})
