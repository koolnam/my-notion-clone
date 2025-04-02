
import Button from "./Buttons"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left Column - Logo, Social, Language */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <a href="/" className="inline-flex items-center">
                <div className="bg-black rounded p-1 mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 5.5V18.5C20 19.8807 18.8807 21 17.5 21H6.5C5.11929 21 4 19.8807 4 18.5V5.5C4 4.11929 5.11929 3 6.5 3H17.5C18.8807 3 20 4.11929 20 5.5Z"
                      fill="white"
                    />
                    <path
                      d="M14.5 7L8.5 7.75C8 7.75 7.5 8.25 7.5 8.75V16.25C7.5 16.75 8 17 8.5 17L15 16.25C15.5 16.25 16 15.75 16 15.25V7.75C16 7.25 15.5 7 15 7L14.5 7ZM14.5 8.25V15.25L8.5 16V8.75L14.5 8.25ZM13.5 10.75C13.5 11.25 13 11.75 12.5 11.75C12 11.75 11.5 11.25 11.5 10.75C11.5 10.25 12 9.75 12.5 9.75C13 9.75 13.5 10.25 13.5 10.75Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Notion</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/notionhq/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://twitter.com/NotionHQ" target="_blank" rel="noopener" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/notionhq/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/NotionHQ/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCoSvlWS5XcwaSzIcbuJ-Ysg"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div>
              <Button
                variant="outline"
                className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-base"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.2 4.8h-2.4c-.2-1-.6-1.9-1.1-2.7 1.4.5 2.6 1.5 3.5 2.7zM8 2c.6 0 1.3 1.1 1.7 2.8H6.3C6.7 3.1 7.4 2 8 2zm-6.2 8c-.1-.5-.2-1-.2-1.5s.1-1 .2-1.5h2.8c-.1.5-.1 1-.1 1.5s0 1 .1 1.5H1.8zm.8 1.6h2.4c.2 1 .6 1.9 1.1 2.7-1.4-.5-2.6-1.5-3.5-2.7zm2.4-6.4H2.6c.9-1.2 2.1-2.2 3.5-2.7-.5.8-.9 1.7-1.1 2.7zM8 14c-.6 0-1.3-1.1-1.7-2.8h3.4c-.4 1.7-1.1 2.8-1.7 2.8zm2.1-4.4H5.9c-.1-.5-.1-1-.1-1.5s0-1 .1-1.5h4.2c.1.5.1 1 .1 1.5s0 1-.1 1.5zm.4 4.3c.5-.8.9-1.7 1.1-2.7h2.4c-.9 1.2-2.1 2.2-3.5 2.7zm1.5-4.3c.1-.5.1-1 .1-1.5s0-1-.1-1.5h2.8c.1.5.2 1 .2 1.5s-.1 1-.2 1.5h-2.8z" />
                </svg>
                English
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Privacy Info */}
            <div className="space-y-2">
              <p className="text-base">We do not sell or share your personal information</p>
              <Button variant="link" className="text-base text-gray-600 p-0 h-auto">
                Cookie settings
              </Button>
              <p className="text-base">© 2025 Notion Labs, Inc.</p>
            </div>
          </div>

          {/* Right Columns - Footer Links */}
          <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-base hover:text-gray-600">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-base hover:text-gray-600">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/security" className="text-base hover:text-gray-600">
                    Security
                  </a>
                </li>
                <li>
                  <a href="https://status.notion.so" className="text-base hover:text-gray-600">
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/28ffdd083dc3473e9c2da6ec011b58ac"
                    className="text-base hover:text-gray-600"
                  >
                    Terms & privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Download Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Download</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/mobile" className="text-base hover:text-gray-600">
                    iOS & Android
                  </a>
                </li>
                <li>
                  <a href="/desktop" className="text-base hover:text-gray-600">
                    Mac & Windows
                  </a>
                </li>
                <li>
                  <a href="/product/calendar/download" className="text-base hover:text-gray-600">
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="/web-clipper" className="text-base hover:text-gray-600">
                    Web Clipper
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/help" className="text-base hover:text-gray-600">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-base hover:text-gray-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-base hover:text-gray-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/community" className="text-base hover:text-gray-600">
                    Community
                  </a>
                </li>
                <li>
                  <a href="/integrations" className="text-base hover:text-gray-600">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="/templates" className="text-base hover:text-gray-600">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="/affiliates" className="text-base hover:text-gray-600">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>

            {/* Notion For Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Notion for</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/enterprise" className="text-base hover:text-gray-600">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="/teams" className="text-base hover:text-gray-600">
                    Small business
                  </a>
                </li>
                <li>
                  <a href="/personal" className="text-base hover:text-gray-600">
                    Personal
                  </a>
                </li>
              </ul>
              <div className="mt-6 ">
                <a
                  href="/explore"
                  className="font-bold text-base text-black hover:text-gray-600 inline-flex items-center"
                >
                  Explore more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="ml-1">
                    <path d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

