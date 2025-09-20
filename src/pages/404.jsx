import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/') // Navigate to home page
    }

    const handleGoBack = () => {
        navigate(-1) // Go back to previous page
    }

    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-9"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <img src="https://merakiui.com/images/components/illustration.svg" alt="404 Illustration" />
            <div className="mt-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <h2 className="mt-4 text-2xl font-semibold text-blue-600" style={{ fontFamily: "'Poppins', sans-serif" }}>404 error</h2>
                <h1 className="text-4xl font-bold mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Page Not Found</h1>
                <p className="mt-2 text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>
                <div className="mt-6 flex space-x-4">
                    <button 
                        onClick={handleGoHome}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-200"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Go to Homepage
                    </button>
                    <button 
                        onClick={handleGoBack}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Previous Page
                    </button>
                </div>
            </div>
        </div>
    )
}