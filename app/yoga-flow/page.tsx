import Header from '../components/Header'
import Footer from '../components/Footer'
import YogaFlowOutput from '../components/YogaFlowOutput'

export default function YogaFlowPage() {
  return (
    <div className="min-h-screen flex flex-col bg-sage-50">
      <Header />
      <main className="flex-grow">
        <YogaFlowOutput />
      </main>
      <Footer />
    </div>
  )
}

