const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Install';
  });

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed';
  });

window.addEventListener('appinstalled', (event) => {
    console.log('App installed', event);
  });
