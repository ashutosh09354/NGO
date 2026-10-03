import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Responsive image with graceful fallback. If the NGO photo has not been
 * added yet, a branded placeholder is shown instead of a broken image.
 * fit="cover" for photographs, fit="contain" for newspaper clippings.
 */
export default function Photo({ src, alt, fit = 'cover', position = 'center', className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div role="img" aria-label={alt} className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-royal-50 via-white to-leaf-50 text-royal/50 ${className}`}>
        <ImageIcon className="h-8 w-8" aria-hidden="true" />
        <span className="px-3 text-center text-xs font-medium">Photo to be added</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      style={{ objectPosition: position }}
      className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
    />
  )
}
