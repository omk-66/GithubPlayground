export  function Hero() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Collaborate and Showcase Your GitHub Projects
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Join playgrounds, share your repositories, and track your progress with ease.
                </p>
                <a
                    href="/login"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}