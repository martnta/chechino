// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import BeltCarousel from '@/components/BeltCarousel';

export default function Home() {
  return (
    <>
      {/* Hero — full bleed, minimal */}
      <section className="relative h-screen min-h-[600px] flex items-end bg-neutral-950">
        <Image src="/chec-farai.jpg" alt="Chechino Dojo Training" fill style={{ objectFit: "cover" }} className="opacity-40" priority />
        <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-28">
          <span className="highlight-line" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-6">
            Chechino Kyokushin Karate Academy
          </h1>
          <p className="text-serif text-white/60 text-lg md:text-xl max-w-lg mb-8 italic">
            &ldquo;Discipline is a Must — Let love lead.&rdquo;
          </p>
          <div className="flex gap-4">
            <Link href="/classes">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-sm font-medium rounded-none">View Programs</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-black hover:bg-white/10 px-8 py-3 text-sm font-medium rounded-none">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <BeltCarousel />

      {/* About strip */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">A Malawian academy preserving the true meaning of Kyokushin</h2>
              <div className="w-12 h-[2px] bg-red-600 mb-8" />
            </div>
            <div className="space-y-5 text-neutral-600 leading-relaxed">
              <p>We provide Kyokushin karate training, physical and mental fitness, aerobics and athletics, self-defense, combat training, gym and team building services.</p>
              <p>Our instructors are university graduates professionally trained by local and international institutions, holding internationally approved karate and fitness instructor certificates.</p>
              <p>We are affiliated with International Budokai Union — IBU KYODO, members of the Malawi Full Contact Karate Federation, and guided by Malawi Council of Sports through Malawi Karate Union.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission — asymmetric two-column */}
      <section className="bg-neutral-950 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-neutral-950 p-10 md:p-14">
              <span className="section-label text-neutral-500">Vision</span>
              <p className="text-xl md:text-2xl font-light leading-relaxed">Empower the youth and children with good mental health and self-defense skills.</p>
            </div>
            <div className="bg-neutral-950 p-10 md:p-14">
              <span className="section-label text-neutral-500">Mission</span>
              <p className="text-xl md:text-2xl font-light leading-relaxed">To revive and preserve the true meaning of Kyokushin Karate in Malawi through professional training, partnerships, and tournament participation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs — stacked editorial layout */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <span className="section-label">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-16">Programs & Services</h2>

          {/* Kids */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20 items-center">
            <div className="lg:col-span-3 relative h-[360px] md:h-[420px]">
              <Image src="/boy-karate.jpeg" alt="Kids Karate Training" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Kids Karate</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">We train in-school and out-of-school youth in discipline, self-defense, mental and physical fitness, leadership, and combat skills.</p>
              <p className="text-neutral-500 text-sm border-l-2 border-red-600 pl-4 italic">Pick-up and drop-off service available at your doorstep.</p>
            </div>
          </div>

          {/* Adults + Combat — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              <div className="relative h-[280px] mb-6">
                <Image src="/karate-1.jpg" alt="Adult Karate" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Adult Karate</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Discipline, self-defense, mental and physical fitness, leadership, weapon use, and combat techniques for all adult skill levels.</p>
            </div>
            <div>
              <div className="relative h-[280px] mb-6">
                <Image src="/male-k-back.png" alt="Combat Training" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Combat & Security Training</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Tailor-made training for security companies and bodyguards — weapon use, hand-to-hand combat, tactical movement, and coordination.</p>
            </div>
          </div>

          {/* Fitness + Team — reversed layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Fitness & Teambuilding</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">Weight loss, body shaping, muscle relaxation, athletics, and body coordination. We also organize retreats, conferences, and team-building exercises with games, music, and dance.</p>
              <p className="text-neutral-600 leading-relaxed">We offer a dedicated self-defense program for women and girls to protect against gender-based violence and build confidence.</p>
            </div>
            <div className="lg:col-span-3 relative h-[360px] md:h-[420px] order-1 lg:order-2">
              <Image src="/kids.jpg" alt="Fitness and Teambuilding" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations — simple text strip */}
      <section className="border-y border-neutral-200 py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-neutral-400 font-medium">
            <span>International Budokai Union — IBU KYODO</span>
            <span className="hidden md:inline text-neutral-200">|</span>
            <span>Malawi Full Contact Karate Federation</span>
            <span className="hidden md:inline text-neutral-200">|</span>
            <span>Malawi Council of Sports</span>
            <span className="hidden md:inline text-neutral-200">|</span>
            <span>Malawi Karate Union</span>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-neutral-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="section-label">Trusted By</span>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {['ABC Academy', 'Bambino High School', 'Bedir International Schools', 'Amref Health Africa', 'Mount Sinai International School'].map((name, i) => (
              <span key={i} className="border border-neutral-200 px-5 py-2 text-sm text-neutral-500">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Training With Us</h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10">Join Chechino Dojo at Bingu National Stadium, Lilongwe. All ages and skill levels welcome.</p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 text-sm font-medium rounded-none">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  );
}