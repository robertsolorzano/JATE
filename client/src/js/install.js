const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block'; 
});

butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt(); 
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
    butInstall.style.display = 'none'; 
  }
  deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed', event);
  butInstall.style.display = 'none'; 
});
