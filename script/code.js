//spinner
window.addEventListener('load', function() {
    // Hide the spinner after all images have loaded
    document.getElementById('spinner').style.display = 'none';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Show the spinner as soon as the DOM is ready (before images have finished loading)
    document.getElementById('spinner').style.display = 'block';
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let year = new Date().getFullYear();
    document.getElementById('footer').innerHTML = 'Copyright &copy; ' + year + ' Jewellery Store by Asanda Mehlo';
  });

  const toastTriggers = document.querySelectorAll('.liveToastBtn')

toastTriggers.forEach((toastTrigger) => {
  const toastId = toastTrigger.dataset.toastId
  const toastLiveExample = document.getElementById(toastId)
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
})
