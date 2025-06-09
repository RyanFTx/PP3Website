"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Camera,
  Database,
  Cpu,
  DollarSign,
  Microscope,
  FileText,
  Archive,
  Headphones,
  Target,
  Shield,
  Leaf,
} from "lucide-react"

export default function MuseumDigitizationWebsite() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const teamMembers = [
    {
      name: "Charlotte",
      role: "Pinned Objects & Small Dry Objects Specialist",
      artifacts: "12 million specimens (50%)",
      budget: "$2.65M",
      icon: <Microscope className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Claudia",
      role: "Large/Heavy Dry & Liquid Preserved Objects Specialist",
      artifacts: "10.5 million objects (40.2%)",
      budget: "$1.76M",
      icon: <Archive className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "Leo",
      role: "Frozen Tissue & Paper-Based Objects Specialist",
      artifacts: "500,000+ items",
      budget: "$400K",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      name: "Ryan",
      role: "Assemblages & Audio-Visual Objects Specialist",
      artifacts: "1.5 million items",
      budget: "$10.4-13.3M",
      icon: <Headphones className="w-6 h-6" />,
      color: "bg-orange-500",
    },
  ]

  const keyFeatures = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Advanced Imaging",
      description: "High-resolution 3D scanning, RTI, and cryogenic imaging systems",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "RFID Tracking",
      description: "Real-time location monitoring and digital registry for all artifacts",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Machine learning for OCR, image enhancement, and artifact reconstruction",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cultural Sensitivity",
      description: "Indigenous community liaison and appropriate handling protocols",
    },
  ]

  const timeline = [
    { year: "Year 1", focus: "Planning & Setup", progress: 20 },
    { year: "Year 2", focus: "Infrastructure & Initial Digitization", progress: 40 },
    { year: "Year 3", focus: "Full-Scale Operations", progress: 60 },
    { year: "Year 4", focus: "Completion & Integration", progress: 80 },
    { year: "Year 5", focus: "Maintenance & Public Access", progress: 100 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">World Museum Digitization Project</h1>
              <p className="text-lg text-gray-600 mt-2">Preserving Heritage Through Technology</p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              5-Year Initiative
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Digitizing Cultural Heritage for Future Generations</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            A comprehensive 5-year plan to digitize all museum artifacts using cutting-edge technology, AI-powered
            analysis, and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <DollarSign className="w-8 h-8" />
              $18.11 Million Investment
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Target className="w-8 h-8" />
              24+ Million Artifacts
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Key Technologies & Approaches</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto text-blue-600 mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">5-Year Implementation Timeline</h3>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-24 text-right font-semibold text-lg">{phase.year}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-semibold text-lg">{phase.focus}</h4>
                    <Badge variant="outline">{phase.progress}%</Badge>
                  </div>
                  <Progress value={phase.progress} className="h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Specialized Teams & Collections</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${member.color} text-white`}>{member.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-base">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Artifacts:</span>
                      <span>{member.artifacts}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Budget:</span>
                      <span className="font-bold text-lg">{member.budget}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Detailed Implementation Plans</h3>

          <Tabs defaultValue="charlotte" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="charlotte">Charlotte</TabsTrigger>
              <TabsTrigger value="claudia">Claudia</TabsTrigger>
              <TabsTrigger value="leo">Leo</TabsTrigger>
              <TabsTrigger value="ryan">Ryan</TabsTrigger>
            </TabsList>

            <TabsContent value="charlotte" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Microscope className="w-6 h-6" />
                    Pinned Objects & Small Dry Objects
                  </CardTitle>
                  <CardDescription>12 million specimens representing 50% of the museum's collection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$457K</div>
                      <div className="text-sm text-gray-600">RFID Tracking System</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$457K</div>
                      <div className="text-sm text-gray-600">Imaging & Scanning</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$1.74M</div>
                      <div className="text-sm text-gray-600">AI/ML & Workforce</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Key Technologies:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Custom specimen holders and label extraction tools from Zebra</li>
                      <li>• 3D structured light scanning technology from EinStar</li>
                      <li>• AI-powered OCR models with 90% accuracy on handwritten labels</li>
                      <li>• Processing capacity: 1,200 objects per day at peak operation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="claudia" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Archive className="w-6 h-6" />
                    Large/Heavy Dry & Liquid Preserved Objects
                  </CardTitle>
                  <CardDescription>10.5 million objects comprising 40.2% of the museum's collection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">$18K</div>
                      <div className="text-sm text-gray-600">Imaging Equipment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600">$54K</div>
                      <div className="text-sm text-gray-600">AI/ML Systems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-600">$435K</div>
                      <div className="text-sm text-gray-600">RFID Tracking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-orange-600">$1.25M</div>
                      <div className="text-sm text-gray-600">Workforce</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Special Considerations:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Indigenous community liaison for cultural collection items</li>
                      <li>• Specialized equipment for safe transport of heavy objects</li>
                      <li>• Chemical safety protocols for toxic preservation materials</li>
                      <li>• Batch photography for efficient processing of similar specimens</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leo" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    Frozen Tissue & Paper-Based Objects
                  </CardTitle>
                  <CardDescription>500,000+ specialized items requiring controlled environments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$46K</div>
                      <div className="text-sm text-gray-600">Imaging Equipment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$35K</div>
                      <div className="text-sm text-gray-600">Tracking Systems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$275K</div>
                      <div className="text-sm text-gray-600">Personnel & AI</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Environmental Challenges:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Frozen samples require uninterrupted -80°C storage</li>
                      <li>• Paper documents need controlled humidity and minimal contact</li>
                      <li>• Cryogenic microscopy for detailed specimen analysis</li>
                      <li>• Non-contact overhead scanners for fragile documents</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ryan" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Headphones className="w-6 h-6" />
                    Assemblages & Audio-Visual Objects
                  </CardTitle>
                  <CardDescription>1.5 million items requiring advanced reconstruction and restoration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">$10.4M</div>
                      <div className="text-sm text-gray-600">Minimum Estimate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">$13.3M</div>
                      <div className="text-sm text-gray-600">Maximum Estimate</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Advanced Technologies:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 3D modeling with X-ray, infrared, and RTI imaging</li>
                      <li>• Machine learning for damage assessment and reconstruction</li>
                      <li>• Controlled lab environment for audio-visual preservation</li>
                      <li>• Categorized RFID tagging for assemblage grouping</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      Environmental Sustainability:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Solar-powered digitization lab</li>
                      <li>• Energy-efficient equipment and green cloud storage</li>
                      <li>• Waste minimization and recycling protocols</li>
                      <li>• Fully digital documentation to reduce paper use</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Project Team</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Charlotte - Pinned Objects</li>
                <li>Claudia - Large Objects</li>
                <li>Leo - Specialized Items</li>
                <li>Ryan - Audio-Visual</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>RFID Tracking</li>
                <li>AI/ML Analysis</li>
                <li>3D Imaging</li>
                <li>Digital Preservation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Timeline</h4>
              <ul className="space-y-2 text-gray-300">
                <li>5-Year Implementation</li>
                <li>Phased Approach</li>
                <li>Gradual Scaling</li>
                <li>Sustainable Operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Investment</h4>
              <ul className="space-y-2 text-gray-300">
                <li>$18.11M Total Budget</li>
                <li>Government Grants Available</li>
                <li>Private Donations Welcome</li>
                <li>Progressive Funding</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 World Museum Digitization Project. Preserving heritage through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
