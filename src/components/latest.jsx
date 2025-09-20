import { useState, useEffect } from 'react'

export default function Latest() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])

    // Your original image data
    const imageData = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Nature",
            title: "Explore Nature",
            description: "Discover the beauty of the natural world",
            size: "large"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Food",
            title: "Culinary Delights",
            size: "small"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Technology",
            title: "Tech Innovations",
            size: "small"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Travel",
            title: "Travel Adventures",
            size: "medium"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Art",
            title: "Artistic Expressions",
            size: "medium"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Swimming",
            size: "medium"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Chess",
            size: "medium"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Nature",
            title: "Explore Nature",
            description: "Discover the beauty of the natural world",
            size: "large"
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Football",
            size: "medium"
        },
        {
            id: 10,
            src: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Cricket",
            size: "medium"
        },
        {
            id: 11,
            src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Football",
            size: "wide"
        },
        {
            id: 12,
            src: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Cricket",
            size: "medium"
        },
        {
            id: 13,
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Technology",
            title: "Tech Innovations",
            size: "medium"
        },
        {
            id: 14,
            src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Travel",
            title: "Travel Adventures",
            size: "medium"
        },
        {
            id: 15,
            src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Art",
            title: "Artistic Expressions",
            size: "medium"
        },
        {
            id: 16,
            src: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
            alt: "Sport",
            title: "Chess",
            size: "wide"
        }
    ]

    // Load items progressively with smoother timing
    useEffect(() => {
        // Initial loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
            
            // Load items one by one with staggered timing for smooth effect
            imageData.forEach((item, index) => {
                setTimeout(() => {
                    setLoadedItems(prev => [...prev, { ...item, loaded: true }])
                }, index * 150) // Stagger each item by 150ms for smooth appearance
            })
        }, 1000) // Reduced initial loading time

        return () => clearTimeout(timer)
    }, [])

    // Function to get CSS classes based on item size
    const getSizeClasses = (size) => {
        if (size === 'large') return "md:col-span-2 md:row-span-2"
        if (size === 'wide') return "md:col-span-2"
        return ""
    }

    // Function to render an item with smooth fade-in animation
    const renderItem = (item, index) => {
        const sizeClasses = getSizeClasses(item.size)
        
        return (
            <div 
                key={item.id} 
                className={`relative overflow-hidden shadow-lg group ${sizeClasses} transition-all duration-500 ease-out transform ${
                    item.loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={`w-full object-cover transition-opacity duration-300 ${
                        item.size === 'large' ? 'h-full' : 'h-48'
                    }`}
                    loading="lazy"
                    onLoad={(e) => {
                        e.target.style.opacity = '1'
                    }}
                    onError={(e) => {
                        e.target.style.opacity = '0.5'
                    }}
                    style={{ opacity: '0' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className={`font-bold text-white ${item.size === 'large' ? 'text-2xl' : 'text-xl'}`}>
                            {item.title}
                        </h3>
                        {item.description && (
                            <p className="text-white">{item.description}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    // Loading skeleton component with smoother animation
    const LoadingSkeleton = ({ count = 8 }) => (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div 
                    key={`skeleton-${index}`} 
                    className="relative overflow-hidden shadow-lg animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
                </div>
            ))}
        </>
    )

    if (isLoading) {
        return (
            <div>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Loading skeleton - Large item */}
                        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden shadow-lg animate-pulse">
                            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
                        </div>

                        {/* Loading skeleton - Other items */}
                        <LoadingSkeleton count={7} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {loadedItems.map((item, index) => renderItem(item, index))}
                </div>
            </div>
        </div>
    )
}