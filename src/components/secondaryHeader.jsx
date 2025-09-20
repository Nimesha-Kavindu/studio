import { Link, useLocation } from 'react-router-dom'

export default function SecondaryHeader() {
    const location = useLocation()
    const firstRow = [
        { name: "Latest", path: "/latest" },
        { name: "Editorial", path: "/editorial" },
        { name: "Commercial", path: "/commercial" }
    ];
    const secondRow = [
        { name: "Portfolio", path: "/portfolio" },
        { name: "Beauty", path: "/beauty" },
        { name: "Corporate Profiles", path: "/corporate-profiles" }
    ];
    
    const allItems = [...firstRow, ...secondRow];
    
    const isActive = (path) => location.pathname === path;
    
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop View - Single Row */}
            <div className="hidden md:flex h-16 justify-center items-center space-x-8 lg:space-x-16 overflow-x-auto text-gray-500">
                {allItems.map((item) => (
                    <Link 
                        key={item.name} 
                        to={item.path}
                        className={`relative group cursor-pointer ${
                            isActive(item.path) ? 'text-black' : 'text-gray-500'
                        }`}
                    >
                        <span className="inline-block">{item.name}</span>
                        <span className={`absolute left-0 -bottom-1 w-full h-[1px] bg-current transform transition-transform origin-left ${
                            isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`} />
                    </Link>
                ))}
            </div>
            
            {/* Mobile View - Two Rows */}
            <div className="md:hidden py-4 text-gray-500">
                {/* First Row */}
                <div className="flex justify-center items-center space-x-6 mb-3">
                    {firstRow.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            className={`relative group cursor-pointer text-sm ${
                                isActive(item.path) ? 'text-black' : 'text-gray-500'
                            }`}
                        >
                            <span className="inline-block">{item.name}</span>
                            <span className={`absolute left-0 -bottom-1 w-full h-[1px] bg-current transform transition-transform origin-left ${
                                isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`} />
                        </Link>
                    ))}
                </div>
                
                {/* Second Row */}
                <div className="flex justify-center items-center space-x-6">
                    {secondRow.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            className={`relative group cursor-pointer text-sm ${
                                isActive(item.path) ? 'text-black' : 'text-gray-500'
                            }`}
                        >
                            <span className="inline-block">{item.name}</span>
                            <span className={`absolute left-0 -bottom-1 w-full h-[1px] bg-current transform transition-transform origin-left ${
                                isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}