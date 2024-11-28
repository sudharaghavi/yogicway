'use client'
import { useState } from 'react'
import { Button } from '@/components/button'
import { Slider } from '@/components/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select'
import { Checkbox } from '@/components/checkbox'

export default function LandingPage() {
  const [duration, setDuration] = useState(30)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-sage-800 text-center mb-4">Craft Your Perfect Yoga Routine</h1>
      <p className="text-xl text-sage-600 text-center mb-8">Personalized yoga flows tailored to your goals, preferences, and schedule.</p>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-sage-700 mb-4">Your Preferences</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Duration: {duration} minutes</label>
            <Slider
              min={15}
              max={90}
              step={1}
              value={[duration]}
              onValueChange={(value: number[]) => setDuration(value[0])}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Time of Day</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time of day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="night">Night</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Last Meal</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select last meal time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="just-ate">Just Ate</SelectItem>
                <SelectItem value="1-2-hours">1-2 Hours Ago</SelectItem>
                <SelectItem value="3-plus-hours">More than 3 Hours Ago</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Health Conditions</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select health conditions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="back-pain">Back Pain</SelectItem>
                <SelectItem value="anxiety">Anxiety</SelectItem>
                <SelectItem value="pregnancy">Pregnancy</SelectItem>
                <SelectItem value="hypertension">Hypertension</SelectItem>
                <SelectItem value="arthritis">Arthritis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Environment</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="traveling">Traveling</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Experience Level</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Goals</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select goals" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stress-relief">Stress Relief</SelectItem>
                <SelectItem value="flexibility">Flexibility</SelectItem>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="posture">Posture Correction</SelectItem>
                <SelectItem value="energy">Energy Boost</SelectItem>
                <SelectItem value="sleep">Sleep Improvement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Intensity Level</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select intensity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Focal Areas</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select focal areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="neck-shoulders">Neck & Shoulders</SelectItem>
                <SelectItem value="core">Core</SelectItem>
                <SelectItem value="back">Back</SelectItem>
                <SelectItem value="hips">Hips</SelectItem>
                <SelectItem value="legs">Legs</SelectItem>
                <SelectItem value="full-body">Full Body</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">Equipment</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox id="mat" />
                <label htmlFor="mat" className="ml-2 text-sm text-sage-600">Mat</label>
              </div>
              <div className="flex items-center">
                <Checkbox id="blocks" />
                <label htmlFor="blocks" className="ml-2 text-sm text-sage-600">Blocks</label>
              </div>
              <div className="flex items-center">
                <Checkbox id="straps" />
                <label htmlFor="straps" className="ml-2 text-sm text-sage-600">Straps</label>
              </div>
              <div className="flex items-center">
                <Checkbox id="none" />
                <label htmlFor="none" className="ml-2 text-sm text-sage-600">None</label>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full mt-8 bg-sage-600 hover:bg-sage-700 text-white">
          Give Me My Yoga Flow
        </Button>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-sage-700 mb-4">Yoga Wisdom</h3>
        <p className="text-sage-600 italic">
          "Yoga takes you into the present moment, the only place where life exists."
        </p>
      </div>
    </div>
  )
}

