import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import { Home, AboutPage, CausesPage, WorkPage, MediaPage, GalleryPage, ContactPage, DonatePage, NotFound, ScrollManager } from './pages/Pages'

export default function App() {
  const { pathname, hash } = useLocation()
  return (
    <>
      <ScrollManager pathname={pathname} hash={hash} />
      <Navbar />
      <main id="main" className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
