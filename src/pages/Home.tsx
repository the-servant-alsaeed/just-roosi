import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Track Your Roosi Journey
          </h1>
          <p className="text-xl text-gray-600">
            Discover, collect, and share your favorite roosi experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-red-500">Your Collection</h3>
            <p className="text-3xl font-bold text-gray-100">0</p>
            <p className="text-gray-400">Roosis tried</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-red-500">Achievements</h3>
            <p className="text-3xl font-bold text-gray-100">0</p>
            <p className="text-gray-400">Badges earned</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-red-500">Rank</h3>
            <p className="text-3xl font-bold text-gray-100">#0</p>
            <p className="text-gray-400">This month</p>
          </div>
        </div>

        {/* Featured Roosis Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Roosis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for Roosi cards */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <p className="text-gray-400">No roosis available yet</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;