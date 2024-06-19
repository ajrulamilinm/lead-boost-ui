import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
      <meta name="dicoding:email" content="ajrulamilin9f@rocketmail.com"></meta>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6 lg:px-8">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="sr-only">LeadBoost</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              <span className="text-xl font-semibold text-gray-900">LeadBoost</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="space-x-4">
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-indigo-600">Home</a>
              <a href="#about" className="text-sm font-medium text-gray-900 hover:text-indigo-600">About</a>
              <a href="#team_project" className="text-sm font-medium text-gray-900 hover:text-indigo-600">Team Project</a>
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
              src="/LeadBoost-16x9.png"
              alt="Slider Image 1"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h1 className="text-3xl font-semibold text-white">Welcome to LeadBoost</h1>
            <p className="mt-2 text-lg text-gray-300">Explore our services and solutions.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl py-8 px-4 lg:px-8">
        <div>
        {/* Section 1 */}
        <div id="about" className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900 text-center">About This Project</h2>
            <p className="mt-2 text-gray-600 text-left">Banyak bisnis menghadapi kesulitan dalam menjangkau pelanggan baru dan memantau prospek bisnis secara efisien. Penggunaan WhatsApp sebagai alat komunikasi bisnis dapat menjadi solusi, namun integrasi dengan pembuatan proses pengajuan dan pelacakan leads masih menjadi tantangan.</p>
            <p className="mt-2 text-gray-600 text-left">Dengan semakin meningkatnya penggunaan WhatsApp sebagai platform komunikasi, bisnis memiliki peluang besar untuk memanfaatkannya dalam upaya mereka untuk menjangkau pelanggan baru. Namun, penggunaan WhatsApp dalam konteks bisnis seringkali memerlukan integrasi dengan berbagai fitur lain, seperti pembuatan proses pengajuan dan pelacakan leads. Dengan mengembangkan aplikasi berbasis web yang mengintegrasikan fitur-fitur tersebut, project ini bertujuan untuk memberikan solusi yang komprehensif bagi bisnis yang ingin meningkatkan interaksi dengan pelanggan potensial dan mengelola prospek bisnis secara efisien.</p>
            <p className="mt-2 text-gray-600 text-left">Project ini dipilih karena penggunaan WhatsApp dalam inisiatif bisnis memiliki potensi yang besar untuk meningkatkan kinerja bisnis. Dengan mengintegrasikan fitur-fitur WhatsApp, pembuatan formulir pengajuan, dan pelacakan leads dalam sebuah aplikasi berbasis web, project ini dapat memberikan solusi yang inovatif dan efektif bagi bisnis untuk mencapai tujuan mereka dalam menjangkau pelanggan baru dan memantau prospek bisnis. Dengan demikian, proyek ini akan memberikan dampak positif yang signifikan bagi bisnis dan pengembangan solusi teknologi untuk bisnis.</p>
          </div>
        </div>
        </div>
        {/* Section 1 */}
        <div id="team_project" className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900 text-center">Team Project</h2>
            <p className="mt-2 text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Row 1 */}
              <div className="bg-gray-100 rounded-md p-4">
                <img
                  className="object-cover w-full h-56"
                  src="https://media.licdn.com/dms/image/C5603AQEhhg4piHgovQ/profile-displayphoto-shrink_400_400/0/1647513491948?e=1724284800&v=beta&t=oNZeQbeZLnzWsaRBkgW2SN6dSja-k5apP8f7ppa9fYc"
                  alt="Section 3"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center">E242056</h3>
                <p className="mt-2 text-gray-600 text-center">Ajrul Amilin Muflih</p>
              </div>

              {/* Row 2 */}
              <div className="bg-gray-100 rounded-md p-4">
                <img
                  className="object-cover w-full h-56"
                  src="https://via.placeholder.com/800x600"
                  alt="Section 3"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center">E242068</h3>
                <p className="mt-2 text-gray-600 text-center">Vaya Assaniya</p>
              </div>

              {/* Row 3 */}
              <div className="bg-gray-100 rounded-md p-4">
                <img
                  className="object-cover w-full h-56 rounded-md"
                  src="https://via.placeholder.com/800x600"
                  alt="Section 3"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center">E242089</h3>
                <p className="mt-2 text-gray-600 text-center">Seno Aji Widodo</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 LeadBoost. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}