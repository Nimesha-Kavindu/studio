import Header from "../components/Header";

export default function MyPortfolio() {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex">
                <div className="w-1/2 h-full p-20 pl-40">
                    <h2 className="text-3xl font-mono tracking-widest text-gray-700">ARANTHA ~ SIRIMANNE</h2>
                    <p className="mt-4 text-gray-500 text-justify">Recognized as one of Asia’s most coveted Fashion Photographers. Arantha Sirimanne’s photographs have created iconic portraits in Fashion Editorial globally and is currently one of the highest demanded photographers in the region.</p>
                    <p className="mt-2 text-gray-500 text-justify">The Sri Lankan-born photographer took to photography at a young age. A self-taught photographer who immersed himself in a world of light and objects and constant experimentation. A trait that he holds deeply to be the key to his creative success today and his drive for creating extraordinary pieces of art. “Taking photographs is easy, creating exciting engaging moments requires a high definition of understanding and practice” says Arantha.</p>
                    <p className="mt-2 text-gray-500 text-justify">His creative vocabulary had enabled him to take Sri Lankan Fashion photography by storm. Taking beautiful photographs that not only created benchmarks in Fashion Editorial but enabled Arantha to become the Exclusive Photographer for Miss Sri Lanka for Miss world In 2011 and again 2012. A title that Propelled him into the international fashion editorial arena which he took on with laden enthusiasm and anticipation. Shooting for Fashion Television and a myriad of international agencies. His ability to create excitement in his pieces were easily distinguishable and remain timestamps of his creative effort</p>
                    <p className="mt-2 text-gray-500 text-justify">While Arantha takes on bigger more creative fashion editorial projects globally, He continues to contribute to more glamorous pageants in Sri Lanka. Most recently titled Official photographer for Miss Tourism Sri Lanka International – 2016.</p>
                    <img src="https://aranthaphotography.com/wp-content/uploads/2016/05/Arantha-Sign.jpg" alt="" className="mt-6"/>
                </div>
                <div className="bg-blue-300 w-1/2 h-full"></div>
            </div>
        </>
    )
}