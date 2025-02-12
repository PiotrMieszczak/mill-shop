export interface TypographyUtility {
    type: string;
    mobileFontSize: string;
    mobileLineHeight: string;
    desktopFontSize: string;
    desktopLineHeight: string;
    mobileClassName: string;
    desktopClassName: string;
  }

export const typographyUtilities: TypographyUtility[] = [
  {
    type: 'h1',
    mobileFontSize: '2.5rem',
    mobileLineHeight: '2',
    desktopFontSize: '3.75rem',
    desktopLineHeight: '2',
    mobileClassName: '.h1',
    desktopClassName: '.h1-d',
  },
  {
    type: 'h2',
    mobileFontSize: '2rem',
    mobileLineHeight: '1.75',
    desktopFontSize: '3rem',
    desktopLineHeight: '1.75',
    mobileClassName: '.h2',
    desktopClassName: '.h2-d',
  },
  {
    type: 'body1',
    mobileFontSize: '1rem',
    mobileLineHeight: '1.5',
    desktopFontSize: '1.25rem',
    desktopLineHeight: '1.5',
    mobileClassName: '.body1',
    desktopClassName: '.body1-d',
  },
  {
    type: 'body2',
    mobileFontSize: '0.875rem',
    mobileLineHeight: '1.3',
    desktopFontSize: '1rem',
    desktopLineHeight: '1.5',
    mobileClassName: '.body2',
    desktopClassName: '.body2-d',
  },
  {
    type: 'small',
    mobileFontSize: '0.75rem',
    mobileLineHeight: '1.2',
    desktopFontSize: '0.875rem',
    desktopLineHeight: '1.3',
    mobileClassName: '.small',
    desktopClassName: '.small-d',
  },
  {
    type: 'title1',
    mobileFontSize: '3.75rem',
    mobileLineHeight: '2',
    desktopFontSize: '3.75rem',
    desktopLineHeight: '2',
    mobileClassName: '.title1',
    desktopClassName: '.title1-d',
  },
  {
    type: 'title2',
    mobileFontSize: '2rem',
    mobileLineHeight: '1.75',
    desktopFontSize: '2.5rem',
    desktopLineHeight: '1.75',
    mobileClassName: '.title2',
    desktopClassName: '.title2-d',
  },
  {
    type: 'price1',
    mobileFontSize: '2.5rem',
    mobileLineHeight: '1.75',
    desktopFontSize: '3rem',
    desktopLineHeight: '1.75',
    mobileClassName: '.price2',
    desktopClassName: '.price2-d',
  },
  {
    type: 'price2',
    mobileFontSize: '1.5rem',
    mobileLineHeight: '1.5',
    desktopFontSize: '2rem',
    desktopLineHeight: '1.5',
    mobileClassName: '.price1',
    desktopClassName: '.price1-d',
  },
];