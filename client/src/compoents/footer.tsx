export  function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">&copy; 2023 Playground. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm hover:text-blue-400">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-blue-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}