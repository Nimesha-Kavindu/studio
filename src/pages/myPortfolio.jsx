import Header from "../components/header";

export default function MyPortfolio() {
    return (
        <>
            <Header />
            <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white">
                <div className="w-full lg:w-1/2 h-full p-8 lg:p-16 lg:pl-32 lg:pr-16 animate-fade-in">
                    <h2 className="text-3xl font-mono mb-8 text-gray-800 tracking-widest opacity-0 animate-fade-in-delay-1">ARANTHA ~ SIRIMANNE</h2>
                    
                    <div className="space-y-6 opacity-0 animate-fade-in-delay-2">
                        <p className="text-gray-600 text-justify leading-relaxed">Recognized as one of Asia's most coveted Fashion Photographers. Arantha Sirimanne's photographs have created iconic portraits in Fashion Editorial globally and is currently one of the highest demanded photographers in the region.</p>
                        <p className="text-gray-600 text-justify leading-relaxed">The Sri Lankan-born photographer took to photography at a young age. A self-taught photographer who immersed himself in a world of light and objects and constant experimentation. A trait that he holds deeply to be the key to his creative success today and his drive for creating extraordinary pieces of art. "Taking photographs is easy, creating exciting engaging moments requires a high definition of understanding and practice" says Arantha.</p>
                        <p className="text-gray-600 text-justify leading-relaxed">His creative vocabulary had enabled him to take Sri Lankan Fashion photography by storm. Taking beautiful photographs that not only created benchmarks in Fashion Editorial but enabled Arantha to become the Exclusive Photographer for Miss Sri Lanka for Miss world In 2011 and again 2012. A title that Propelled him into the international fashion editorial arena which he took on with laden enthusiasm and anticipation. Shooting for Fashion Television and a myriad of international agencies. His ability to create excitement in his pieces were easily distinguishable and remain timestamps of his creative effort</p>
                        <p className="text-gray-600 text-justify leading-relaxed">While Arantha takes on bigger more creative fashion editorial projects globally, He continues to contribute to more glamorous pageants in Sri Lanka. Most recently titled Official photographer for Miss Tourism Sri Lanka International – 2016.</p>
                    </div>
                    
                    <img src="https://aranthaphotography.com/wp-content/uploads/2016/05/Arantha-Sign.jpg" alt="Signature" className="mt-8 mb-6 opacity-0 animate-fade-in-delay-3" />
                    
                    <div className="flex space-x-4 mb-6 opacity-0 animate-fade-in-delay-4">
                        <a href="#" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <i className="fab fa-instagram text-gray-500 text-lg"></i>
                        </a>
                        <a href="#" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <i className="fab fa-facebook-f text-gray-500 text-lg"></i>
                        </a>
                        <a href="#" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <i className="fab fa-youtube text-gray-500 text-lg"></i>
                        </a>
                        <a href="#" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <i className="fab fa-google-plus-g text-gray-500 text-lg"></i>
                        </a>
                    </div>

                    <div className="flex flex-col space-y-1 text-gray-500 opacity-0 animate-fade-in-delay-5">
                        <p>M: +94 71 664 1330</p>
                        <p>E: info@aranthaphotography.com</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-96 lg:h-145 relative lg:fixed lg:bottom-0 lg:right-0 bg-gray-100 opacity-0 animate-fade-in-delay-6">
                    <img 
                        src="https://aranthaphotography.com/wp-content/uploads/2016/07/Arantha.jpg" 
                        alt="Arantha Sirimanne Portrait" 
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </>
    )
}