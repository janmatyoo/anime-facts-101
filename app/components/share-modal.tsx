'use client'

import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export default function ShareModal({ isOpen, onClose, videoUrl }: ShareModalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10)
    } else {
      setShow(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const encodedUrl = encodeURIComponent(videoUrl)

  const shareOptions = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: '#1877F2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check this out!`,
      color: '#000000',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M4.167 3h3.503L12 8.63 16.331 3h3.502l-6.108 7.78L21 21h-3.503l-4.81-6.172L7.68 21H4.167l6.525-8.314L3 3Z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedUrl}`,
      color: '#25D366',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.52 3.48c-2.18-2.19-5.15-3.48-8.28-3.48-6.45 0-11.7 5.25-11.7 11.7 0 2.06.54 4.09 1.56 5.88l-1.65 6.02 6.17-1.62c1.72.94 3.65 1.43 5.62 1.43h.01c6.45 0 11.7-5.25 11.7-11.7 0-3.13-1.29-6.1-3.48-8.28zM12.24 20.52h-.01c-1.73 0-3.43-.46-4.91-1.34l-.35-.21-3.66.96.97-3.57-.23-.37c-1.01-1.58-1.54-3.4-1.54-5.27 0-5.44 4.43-9.87 9.87-9.87 2.63 0 5.1 1.03 6.96 2.89s2.89 4.33 2.89 6.96c0 5.44-4.43 9.87-9.87 9.87zm5.36-7.54c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.63.15-.18.29-.73.94-.9 1.13-.16.18-.34.2-.63.05-.29-.15-1.24-.46-2.37-1.48-.88-.78-1.47-1.74-1.64-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.03-.5-.08-.15-.63-1.52-.87-2.07-.23-.55-.47-.47-.63-.48-.16-.01-.35-.01-.54-.01-.18 0-.48.07-.73.36s-.96.94-.96 2.3c0 1.36.98 2.67 1.11 2.85.13.17 1.92 2.93 4.65 4.11.65.28 1.15.45 1.54.57.65.21 1.24.18 1.71.11.52-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=Check this out!`,
      color: '#0088cc',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
        </svg>
      ),
    },
  ]

  const handleCopy = async () => {
    await navigator.clipboard.writeText(videoUrl)
    alert('Copied link to clipboard!')
    onClose()
  }

  const handleShareClick = () => {
    setTimeout(() => onClose(), 500)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative transform transition-all duration-300 ${show ? 'scale-100' : 'scale-95'}`}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold text-center text-[#133162] mb-6">Share This Reel</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              style={{ backgroundColor: option.color }}
              aria-label={`Share on ${option.name}`}
              title={`Share on ${option.name}`}
              onClick={handleShareClick}
            >
              {option.icon}
            </a>
          ))}

          <button
            onClick={handleCopy}
            className="w-12 h-12 rounded-full bg-[#f43d01] hover:bg-[#d63601] flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Copy Link"
            title="Copy Link"
          >
            📋
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">Copy link or share this reel with friends!</p>
      </div>
    </div>
  )
}
