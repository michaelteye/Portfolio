import Image from 'next/image'
import HomePage from './components/Home'
import AboutPage from './about/page'

export default function Home() {
  return (
    <main className="max-w-full">
      <HomePage/>
    </main>
  )
}
