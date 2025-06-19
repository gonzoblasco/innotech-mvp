// src/components/Navigation.tsx
import Link from 'next/link';
import AuthButton from './AuthButton';

export default function Navigation() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            InnoTech Solutions
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/test" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Test IA
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Dashboard
            </Link>
          </div>
          
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}