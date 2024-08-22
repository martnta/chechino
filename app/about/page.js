import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">About Chechino Dojo</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="relative h-[400px]">
              <Image src="/dojo-image.jpg" alt="Chechino Dojo" fill style={{objectFit: "cover"}} className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">Chechino Dojo was founded in 1985 with a mission to bring the art of karate to our community. For over three decades, we`ve been dedicated to teaching discipline, respect, and self-defense to students of all ages.</p>
            <p className="mb-4">Our experienced instructors are passionate about karate and committed to helping each student reach their full potential. Whether you`re looking to improve your fitness, learn self-defense, or compete at a high level, Chechino Dojo has a program for you.</p>
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Respect for oneself and others</li>
              <li>Continuous self-improvement</li>
              <li>Mind-body balance</li>
              <li>Community engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}