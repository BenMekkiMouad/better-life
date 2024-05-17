import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-red-500 ">
     <p className='text-5xl'>
        Hello World
     </p>
    </div>
  )
}
