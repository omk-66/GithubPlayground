import { Github } from 'lucide-react'; // You can use any icon library

export  function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Github className="h-8 w-8 text-gray-800" />
                        <span className="ml-2 text-xl font-bold text-gray-800">Playground</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">Features</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
                    </div>

                    {/* Login Button */}
                    <a
                        href="/login"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Login with GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}