const toastTriggers = document.querySelectorAll('.liveToastBtn')

toastTriggers.forEach((toastTrigger) => {
  const toastId = toastTrigger.dataset.toastId
  const toastLiveExample = document.getElementById(toastId)
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
})