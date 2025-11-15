// Repo refreshed on 2025-11-15
import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

// Only initialize GA in production or if TRACKING_ID is provided
const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
if (typeof window !== 'undefined' && TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
