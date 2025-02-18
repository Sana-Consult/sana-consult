import { useContext } from 'react';
import { RegionContext } from '../context';

interface AltTagTranslations {
  fr: string;
  en: string;
  de: string;
}

export const getAltTag = (translations: AltTagTranslations): string => {
  // Default to French if no language context is available
  if (typeof window === 'undefined') return translations.fr;
  
  const { lang } = useContext(RegionContext);
  return translations[lang as keyof AltTagTranslations] || translations.fr;
};

export const validateAltTag = (alt: string): string => {
  if (!alt) {
    console.warn('Balise alt manquante pour l\'image');
    return '';
  }
  
  if (alt.length > 125) {
    console.warn(`Balise alt trop longue (${alt.length} caractères): ${alt}`);
    return alt.substring(0, 125);
  }
  
  if (alt.toLowerCase().startsWith('image de') || 
      alt.toLowerCase().startsWith('photo de')) {
    console.warn(`La balise alt ne doit pas commencer par "Image de" ou "Photo de": ${alt}`);
    return alt.replace(/^(image|photo) de /i, '');
  }
  
  return alt;
};