window.onload = async () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js');
      console.log('✅ Service Worker registered');
    } catch (err) {
      console.error('❌ Service Worker registration failed:', err);
    }
  }
};
