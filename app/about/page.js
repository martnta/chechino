import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 py-32 md:py-40">
        <Image src="/karate-1.jpg" alt="Dojo" fill style={{ objectFit: "cover" }} className="opacity-25" />
        <div className="relative z-10 container mx-auto px-6">
          <span className="highlight-line" />
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">About the Academy</h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Preserving Kyokushin in Malawi</h2>
              <div className="w-12 h-[2px] bg-red-600 mb-8" />
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>Chechino Kyokushin Karate & Fitness Academy is a Malawian recognized academy based at Bingu National Stadium in Lilongwe. We are affiliated with International Budukai Union — IBU KYODO.</p>
                <p>We are members of the Malawi Full Contact Karate Federation and guided by Malawi Council of Sports through Malawi Karate Union.</p>
                <p>Our services are of international standards. Our instructors are university graduates with high passion for martial arts, professionally trained by local and international institutions, holding internationally approved certificates.</p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <Image src="/chec-farai.jpg" alt="Chechino Dojo" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Motto / Vision / Mission — text-only strip */}
      <section className="bg-neutral-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-14 md:pr-10">
              <span className="section-label text-neutral-500">Motto</span>
              <p className="text-serif italic text-lg text-white/80 leading-relaxed">&ldquo;Discipline is a Must — Let love lead; if everyone were a true karate practitioner, the world would be a better and peaceful place.&rdquo;</p>
            </div>
            <div className="py-14 md:px-10">
              <span className="section-label text-neutral-500">Vision</span>
              <p className="text-lg text-white/80 leading-relaxed">Empower the youth and children with good mental health and self-defense skills.</p>
            </div>
            <div className="py-14 md:pl-10">
              <span className="section-label text-neutral-500">Mission</span>
              <p className="text-lg text-white/80 leading-relaxed">To revive and preserve the true meaning of Kyokushin Karate in Malawi through professional training, partnerships, and tournaments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto px-6">
          <span className="section-label">Core Values</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">Human Rights</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">We value and respect human rights in everything we do.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">Protection</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Child and women rights protection is our core business.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900">Excellence</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">We are committed to providing top-notch, internationally recognized training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <span className="section-label">Leadership</span>
          <h2 className="text-3xl font-bold text-neutral-900 mb-16">Management Team</h2>

          {/* Sensei — full-width editorial layout */}
          <div className="border-t border-neutral-200 pt-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <p className="text-xs uppercase tracking-[0.15em] text-red-600 font-medium mb-1">Founder & Chief Instructor</p>
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">Innocent Hope Ntalika</h3>
                <p className="text-neutral-400 text-sm mb-6">Sensei</p>

                <div className="space-y-2 text-sm text-neutral-500">
                  <p>President, Malawi Full Contact Karate Federation</p>
                  <p>National Technical Director (Coach)</p>
                  <p>Deputy Branch Chief, IKO Matsushima — Malawi</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4 text-neutral-600 leading-relaxed text-[15px]">
                <p>Innocent Hope Ntalika is a martial artist, instructor, and community leader with nearly 30 years in martial arts. He has dedicated his career to training students, coaching athletes, and promoting Kyokushin Karate across Malawi. Through his teaching, he emphasizes discipline, confidence, respect, and self-control.</p>
                <p>Through the academy, he trains hundreds of children, students, young people, women, professionals, and security personnel. He also teaches karate at Bedir International High School, ABC Academy, Mount Sinai International Schools, and Bambino High School, and works with NGOs such as Amref Health Africa providing fitness, wellness, and team-building programs.</p>
                <p>An important part of his work is supporting women and girls through self-defense training programs aimed at combating gender-based violence and building personal safety awareness.</p>

                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium mb-4">Qualifications</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-sm text-neutral-500">
                    <span>2nd Dan Kyokushin Karate</span>
                    <span>2nd Dan Shotokan Karate</span>
                    <span>International Level B Instructor</span>
                    <span>1st Dan Goju-Ryu Karate</span>
                    <span>1st Dan Jujitsu</span>
                    <span>1st Kyu Shorinji Kempo</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-4">BSc Forestry — University of Malawi, Bunda College</p>
                  <p className="text-sm text-neutral-400 italic mt-1">Specializes in Kumite (full-contact fighting)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sempai */}
          <div className="border-t border-neutral-200 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <p className="text-xs uppercase tracking-[0.15em] text-red-600 font-medium mb-1">Director of Administration & Partnerships</p>
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">Twambilire Mwabungulu</h3>
                <p className="text-neutral-400 text-sm mb-6">Sempai</p>

                <div className="space-y-2 text-sm text-neutral-500">
                  <p>BA Political Science — Chancellor College</p>
                  <p>Green Belt, Chanco Kyokushin Dojo</p>
                  <p>Orange Belt, Chechino Dojo</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4 text-neutral-600 leading-relaxed text-[15px]">
                <p>Sempai Twambilire has over 10 years of practical experience in Kyokushin karate from various dojos. As senior student and team leader at Chancellor College Kyokushin Karate Club, he participated in various competitions and won gold medal awards in Kumite and Kata at the University of Malawi Chancellors Trophy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}