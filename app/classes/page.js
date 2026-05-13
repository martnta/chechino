// app/classes/page.js
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Classes() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 py-32 md:py-40">
        <Image src="/kids.jpg" alt="Training" fill style={{ objectFit: "cover" }} className="opacity-25" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="highlight-line" />
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">Programs & Services</h1>
          <p className="text-white/50 mt-6 max-w-lg text-lg">Tailor-made packages in Karate and Fitness. We assess you, plan with you, and implement together.</p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">

          {/* Kids Karate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 mb-20 border-b border-neutral-100">
            <div className="relative h-[380px]">
              <Image src="/boy-karate.jpeg" alt="Kids Karate" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span className="section-label">01</span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-5">Kids Karate Training</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">We train in-school and out-of-school kids and youth. Our focus is instilling discipline, self-defense, mental and physical fitness, leadership skills, and combat awareness in your children.</p>
              <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Discipline & self-control</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Self-defense techniques</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Mental & physical fitness</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Leadership development</li>
              </ul>
              <p className="text-sm text-neutral-400 border-l-2 border-red-600 pl-4 italic">Pick-up and drop-off service available at your doorstep for a low fare.</p>
            </div>
          </div>

          {/* Adult Karate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 mb-20 border-b border-neutral-100">
            <div className="order-2 lg:order-1">
              <span className="section-label">02</span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-5">Adult Karate Training</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">Sessions designed for all adult skill levels, focusing on the full spectrum of Kyokushin practice.</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Discipline & mental fortitude</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Advanced self-defense</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Physical conditioning</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Weapon use & combat skills</li>
              </ul>
            </div>
            <div className="relative h-[380px] order-1 lg:order-2">
              <Image src="/karate-1.jpg" alt="Adult Karate" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Fitness & Athletics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 mb-20 border-b border-neutral-100">
            <div className="relative h-[380px]">
              <Image src="/girl-karate.jpeg" alt="Fitness" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span className="section-label">03</span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-5">Fitness & Athletics</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">Comprehensive fitness packages tailored for schools, individuals, and organizations.</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Weight loss & body shaping</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Muscle relaxation & recovery</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Physical education for schools</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Body coordination techniques</li>
              </ul>
            </div>
          </div>

          {/* Combat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 mb-20 border-b border-neutral-100">
            <div className="order-2 lg:order-1">
              <span className="section-label">04</span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-5">Combat Skills & Weapon Use</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">Professional training designed for security companies, bodyguards, and individuals seeking advanced tactical skills.</p>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Weapon handling</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Hand-to-hand combat</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Tactical movement</li>
                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-red-600 rounded-full" />Professional self-defense</li>
              </ul>
            </div>
            <div className="relative h-[380px] order-1 lg:order-2">
              <Image src="/male-k-back.png" alt="Combat Training" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Teambuilding + Women */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-t border-neutral-200 pt-10">
              <span className="section-label">05</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Teambuilding</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">We organize and support organisational retreats, conferences, meetings, and gatherings with team building exercises, games, music, dance, quizzes, and more.</p>
            </div>
            <div className="border-t border-neutral-200 pt-10">
              <span className="section-label">06</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Women & Girls Self-Defense</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">A tailor-made program helping women and girls protect themselves from gender-based violence and physical abuse, building confidence and personal safety awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a program?</h2>
          <p className="text-neutral-400 mb-8">We serve schools, companies, individuals, security firms, and other institutions.</p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-red-500 px-10 py-3 text-sm font-medium rounded-none">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </>
  );
}