// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import BeltCarousel from '@/components/BeltCarousel';


// Arrays for image sources
const featuredClassImages = [
  '/boy-karate.jpeg',
  '/girl-karate.jpeg',
  '/male-k-back.png'
];

const galleryImages = [
  '/boy-karate.jpeg',
  '/girl-karate.jpeg',
  '/kids.jpg',
  '/male-k-back.jpg',
  '/karate-1.jpg',
  '/chec-farai.jpg',
  '/karate-2.jpg',
  '/outdoor-8.jpg'
];
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Chechino Dojo</h1>
            <p className="text-xl mb-6">Discover the art of karate and unleash your potential</p>
            <Button variant="default">Start Your Journey</Button>
          </div>
          <div className="w-1/2 relative h-[400px]">
            <Image src="/chec-farai.jpg" alt="Karate Hero" fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <BeltCarousel />

      {/* Featured Classes */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Beginner Karate', 'Advanced Kata', 'Sparring Techniques'].map((className, index) => (
              <div key={className} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image src={featuredClassImages[index]} alt={className} fill style={{objectFit: "cover"}} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{className}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link href="/classes" className="text-blue-600 hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karate for all ages */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Karate for All Ages</h2>
              <p className="mb-6">At Chechino Dojo, we believe that karate is for everyone. Our classes cater to all age groups, from children developing discipline and confidence to adults seeking fitness and self-defense skills.</p>
              <Button variant="default">Explore Classes</Button>
            </div>
            <div className="md:w-1/2 relative h-[300px]">
              <Image src="/kids.jpg" alt="Karate for All Ages" fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
           {/* Activities Section */}
           <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Dojo Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kata Presentations */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src="/boy-karate.jpeg" alt="Kata Presentation" fill style={{objectFit: "cover"}} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Kata Presentations</h3>
                <p className="text-gray-600 mb-4">Showcase your skills and precision in our regular kata presentation events. Perfect your form and demonstrate your understanding of karate techniques.</p>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image src="/karate-1.jpg" alt="Karate Certification" fill style={{objectFit: "cover"}} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
                <p className="text-gray-600 mb-4">Earn official certifications as you progress through your karate journey. Our structured program ensures recognition for your hard work and dedication.</p>
                <Button variant="outline">View Certifications</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John D.", quote: "Chechino Dojo transformed my life. I'm more confident and fit than ever!" },
              { name: "Sarah L.", quote: "The instructors here are world-class. I've learned so much in just a few months." },
              { name: "Mike R.", quote: "My kids love their karate classes. It's amazing to see their progress and discipline." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                <p className="italic mb-4">{testimonial.quote}</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Dojo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative h-48 md:h-64">
                <Image src={src} alt={`Gallery Image ${index + 1}`} fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Join Chechino Dojo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Instructors", description: "Learn from certified black belt instructors with years of experience." },
              { title: "Modern Facilities", description: "Train in our state-of-the-art dojo equipped with the latest training gear." },
              { title: "Flexible Schedule", description: "Choose from a variety of class times to fit your busy lifestyle." },
              { title: "Supportive Community", description: "Join a family of karate enthusiasts who support and motivate each other." }
            ].map((reason, index) => (
              <div key={index} className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Karate Journey?</h2>
          <p className="text-xl mb-8">Join Chechino Dojo today and transform your life through the power of martial arts.</p>
          <Button variant="default" size="lg">Sign Up for a Free Trial Class</Button>
        </div>
      </section>
    </>
  );
}