// log the pageview with their URL
export const pageview = (url) => {sadsadadasa
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,a 
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
}; asa
     
// Google Analytics Measurement ID afas';
afsafa
