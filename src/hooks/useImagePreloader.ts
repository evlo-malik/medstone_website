import { useState, useEffect } from 'react';

const imagesToPreload = [
  'https://evlo-malik.github.io/medstone/logo_text',
  'https://evlo-malik.github.io/medstone/whatsapp_icon',
  'https://evlo-malik.github.io/medstone/klipartz.com.png',
  'https://evlo-malik.github.io/medstone/doctor.png',
  'https://evlo-malik.github.io/medstone/background1',
  'https://evlo-malik.github.io/medstone/marble',
  'https://evlo-malik.github.io/medstone/pngwing.com.png'
];

export const useImagePreloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    };

    Promise.all(imagesToPreload.map(url => loadImage(url)))
      .then(() => setImagesLoaded(true))
      .catch(error => {
        console.error('Error preloading images:', error);
        // Show content anyway if some images fail to load
        setImagesLoaded(true);
      });
  }, []);

  return imagesLoaded;
};