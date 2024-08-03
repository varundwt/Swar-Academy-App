
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Swar Academy is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/919627385102"
              className="hover:text-white transition-colors duration-300"
            >
              WhatsApp
            </a>
            <a
              href="mailto:varundwt@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="tel:+919627385102"
              className="hover:text-white transition-colors duration-300"
            >
              Telephone
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Swar Academy</p>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: varundwt@gmail.com</p>
          <p>Phone: (962) 738-5102</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Swar Academy. All rights reserved.</p>        
    </footer>
  )
}

export default Footer