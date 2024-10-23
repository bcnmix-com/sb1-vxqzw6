import { Search, Menu, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 mr-4 cursor-pointer hover:text-gray-900" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Wanderlust
            </h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search experiences in Barcelona"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center cursor-pointer hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1">Cart</span>
            </div>
            <div className="flex items-center cursor-pointer hover:text-blue-600">
              <User className="h-6 w-6" />
              <span className="ml-1">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}