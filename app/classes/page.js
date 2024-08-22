// app/classes/page.js
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Classes() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Classes</h1>
        <div className="flex flex-wrap -mx-4">
          {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
            <div key={level} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="relative h-48 mb-4">
                  <Image src={`/${level.toLowerCase()}-class.jpg`} alt={`${level} Class`} fill style={{objectFit: "cover"}} className="rounded" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{level} Class</h3>
                <p className="mb-4">Perfect for those {level === 'Beginner' ? 'new to' : level === 'Intermediate' ? 'with some experience in' : 'mastering'} karate.</p>
                <Button variant="outline">Sign Up</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}