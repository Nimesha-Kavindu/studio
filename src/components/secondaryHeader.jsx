export default function SecondaryHeader() {
    const firstRow = ["Latest", "Editorial", "Commercial"];
    const secondRow = ["Portfolio", "Beauty", "Corporate Profiles"];
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop View - Single Row */}
            <div className="hidden md:flex h-16 justify-center items-center space-x-8 lg:space-x-16 overflow-x-auto text-gray-500">
                {["Latest", "Editorial", "Commercial", "Portfolio", "Beauty", "Corporate Profiles"].map((item) => (
                    <h2 key={item} className="relative group cursor-pointer">
                        <span className="inline-block">{item}</span>
                        <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </h2>
                ))}
            </div>
            
            {/* Mobile View - Two Rows */}
            <div className="md:hidden py-4 text-gray-500">
                {/* First Row */}
                <div className="flex justify-center items-center space-x-6 mb-3">
                    {firstRow.map((item) => (
                        <h2 key={item} className="relative group cursor-pointer text-sm">
                            <span className="inline-block">{item}</span>
                            <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </h2>
                    ))}
                </div>
                
                {/* Second Row */}
                <div className="flex justify-center items-center space-x-6">
                    {secondRow.map((item) => (
                        <h2 key={item} className="relative group cursor-pointer text-sm">
                            <span className="inline-block">{item}</span>
                            <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </h2>
                    ))}
                </div>
            </div>
        </div>
    )
}