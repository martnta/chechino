import Image from 'next/image';
import { Button } from "@/components/ui/button";
import BeltCarousel from '@/components/BeltCarousel';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Chechino Dojo</h1>
            <p className="text-xl mb-6">Everything you need to know about self-defense</p>
            <Button variant="default">Join Us</Button>
          </div>
          <div className="w-1/3 relative h-[400px]">
            <Image src="/karate-instructor.jpg" alt="Karate Instructor" fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <BeltCarousel />

      {/* Karate for all ages */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Karate for all ages</h2>
              <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ipsum et urna facilisis tristique.</p>
              <Button variant="default">Enroll Now</Button>
            </div>
            <div className="md:w-1/2 relative h-[300px]">
              <Image src="/karate-students.jpg" alt="Karate Students" fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Join</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Dedicated</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Proven</h3>
                <p>Consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}