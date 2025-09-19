export default function SecondaryHeader() {
    return (
        <div className="max-w-7xl h-16 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-16 overflow-x-auto text-gray-500">
            {["Latest", "Editorial", "Commercial", "Portfolio", "Beauty", "Corporate Profiles"].map((item) => (
                <h2 key={item} className="relative group cursor-pointer">
                    <span className="inline-block">{item}</span>
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </h2>
            ))}
        </div>
    )
}