export default function Footer() {
    return (
        <footer className="pb-12 mt-16" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                        <i className="fab fa-instagram text-gray-400 text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                        <i className="fab fa-facebook-f text-gray-400 text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                        <i className="fab fa-youtube text-gray-400 text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                        <i className="fab fa-google-plus-g text-gray-400 text-lg"></i>
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-center text-gray-500 text-sm mb-4" style={{ letterSpacing: '0.07em' }}>
                    <p>M: +94 71 6 641 330 | E: info@aranthaphotography.com</p>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-xs" style={{ letterSpacing: '0.07em' }}>
                    <p>
                        COPYRIGHTS © ARANTHA PHOTOGRAPHY, 2025 | DESIGN + CODE BY{' '}
                        <span className="inline-flex items-center">
                            <span className="w-4 h-4 bg-red-500 rounded-full ml-1"></span>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}