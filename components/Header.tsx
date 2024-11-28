import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-sage-700">
          YogaBuddy
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="text-sage-600 hover:text-sage-800">About</Link></li>
            <li><Link href="/features" className="text-sage-600 hover:text-sage-800">Features</Link></li>
            <li><Button variant="ghost" className="text-sage-600 hover:text-sage-800">Login</Button></li>
            <li><Button variant="outline" className="text-sage-600 hover:text-sage-800">Sign Up</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

