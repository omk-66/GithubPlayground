export  function Features() {
    const features = [
        {
            icon: '🚀',
            title: 'Join Playgrounds',
            description: 'Collaborate with others by joining shared playgrounds.',
        },
        {
            icon: '📊',
            title: 'Track Progress',
            description: 'Monitor your repository stats, commits, and stars.',
        },
        {
            icon: '💻',
            title: 'Showcase Your Work',
            description: 'Share your GitHub repositories with the community.',
        },
    ];

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}