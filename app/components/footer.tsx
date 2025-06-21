import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/random", label: "Random" },
    { href: "/about", label: "About" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#133162] font-bold text-xl mb-4 md:mb-0">
            Anime Facts <span className="text-[#f43d01]">101</span>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1a1a1a] hover:text-[#f43d01] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2024 Anime Facts 101. All rights reserved.
        </div>
      </div>
    </footer>
  )
}