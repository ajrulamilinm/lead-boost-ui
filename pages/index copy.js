import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              <span className="text-xl font-semibold text-gray-900">Your Company</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="space-x-4">
              <a href="#section1" className="text-sm font-medium text-gray-900 hover:text-indigo-600">Home</a>
              <a href="#section2" className="text-sm font-medium text-gray-900 hover:text-indigo-600">About</a>
              <a href="#section3" className="text-sm font-medium text-gray-900 hover:text-indigo-600">Contact</a>
              <a href="#section4" className="text-sm font-medium text-gray-900 hover:text-indigo-600">Services</a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Slider */}
        <div className="relative h-96">
          <div className="absolute inset-0">
            {/* Slider Images */}
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/random"
              alt="Slider Image 1"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h1 className="text-3xl font-semibold text-white">Welcome to Your Company</h1>
            <p className="mt-2 text-lg text-gray-300">Explore our services and solutions.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Section 1 */}
          <div id="section1" className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="object-cover w-full h-56"
              src="https://source.unsplash.com/random"
              alt="Section 1"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">Section 1</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section2" className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="object-cover w-full h-56"
              src="https://source.unsplash.com/random"
              alt="Section 2"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">Section 2</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section3" className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="object-cover w-full h-56"
              src="https://source.unsplash.com/random"
              alt="Section 3"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">Section 3</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div id="section4" className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
          <img
            className="object-cover w-full h-56"
            src="https://source.unsplash.com/random"
            alt="Section 4"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900">Section 4</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
