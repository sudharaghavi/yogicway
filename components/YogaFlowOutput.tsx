import { Button } from './ui/button'
import Image from 'next/image'

export default function YogaFlowOutput() {
  // This is a mock-up of what the yoga flow might look like
  const yogaFlow = [
    {
      name: "Downward Dog",
      image: "/placeholder.svg",
      description: "Stretches the hamstrings, calves, and back. Strengthens arms and shoulders.",
      instructions: "Start on your hands and knees, then lift your hips up and back, straightening your arms and legs.",
      modification: "Keep your knees slightly bent if your hamstrings are tight."
    },
    // Add more poses here...
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-sage-800 text-center mb-8">Your Customized Yoga Flow</h1>
      
      <div className="space-y-8">
        {yogaFlow.map((pose, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-sage-700 mb-4">{pose.name}</h2>
            <div className="md:flex">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <Image src={pose.image} alt={pose.name} width={300} height={300} className="rounded-lg" />
              </div>
              <div className="md:w-2/3 md:pl-6">
                <p className="text-sage-600 mb-2"><strong>Benefits:</strong> {pose.description}</p>
                <p className="text-sage-600 mb-2"><strong>Instructions:</strong> {pose.instructions}</p>
                <p className="text-sage-600"><strong>Modification:</strong> {pose.modification}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <Button className="bg-sage-600 hover:bg-sage-700 text-white">
          Save This Routine
        </Button>
        <Button variant="outline" className="text-sage-600 hover:text-sage-700">
          Track My Progress
        </Button>
      </div>

      <p className="text-center text-sage-600 italic mt-8">
        Transform your practice, one pose at a time.
      </p>
    </div>
  )
}

