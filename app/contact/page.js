import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-950 py-32 md:py-40">
        <div className="container mx-auto px-6">
          <span className="highlight-line" />
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">Get in Touch</h1>
          <p className="text-white/50 mt-6 max-w-lg">Ready to start training? Reach out and we will plan together.</p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Details — left column */}
            <div className="lg:col-span-2">
              <span className="section-label">Location</span>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Chechino Dojo</h2>

              <div className="space-y-8 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium mb-2">Training Venue</p>
                  <p className="text-neutral-700">Bingu National Stadium</p>
                  <p className="text-neutral-700">North Wing — Indoor Athletics Track</p>
                  <p className="text-neutral-700">Lilongwe, Malawi</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium mb-2">Phone</p>
                  <p className="text-neutral-700">+265 990 077 426</p>
                  <p className="text-neutral-700">+265 882 354 356</p>
                  <p className="text-neutral-700">+265 999 152 454</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium mb-2">Email</p>
                  <a href="mailto:chechinoadojo@gmail.com" className="text-neutral-700 hover:text-red-600 transition-colors block">chechinoadojo@gmail.com</a>
                  <a href="mailto:innocentntalika@gmail.com" className="text-neutral-700 hover:text-red-600 transition-colors block">innocentntalika@gmail.com</a>
                  <a href="mailto:twambimwabungulu@yahoo.co.uk" className="text-neutral-700 hover:text-red-600 transition-colors block">twambimwabungulu@yahoo.co.uk</a>
                </div>


              </div>

              {/* References */}
              <div className="mt-14 pt-10 border-t border-neutral-100">
                <span className="section-label">References</span>
                <div className="space-y-4 mt-4">
                  {[
                    { name: 'ABC Academy', person: 'Miss Yami, Club Coordinator', phone: '+265 994 843 060' },
                    { name: 'Bambino High School', person: 'Mr Kaniki, Sports Teacher', phone: '+265 888 776 756' },
                    { name: 'Bedir International Schools', person: 'Muhammed Wines, Clubs Coordinator', phone: '+265 992 610 118' },
                    { name: 'Amref Health Africa', person: 'Mr Blessings Salima, Contracting Officer', phone: '+265 999 875 868' },
                    { name: 'Mount Sinai International School', person: 'Mr D Mvula, School Director', phone: '+265 999 935 566' },
                  ].map((ref, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-medium text-neutral-900">{ref.name}</p>
                      <p className="text-neutral-400">{ref.person} — {ref.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form — right column */}
            <div className="lg:col-span-3">
              <span className="section-label">Send a Message</span>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Enquire About a Program</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.12em] text-neutral-400 font-medium mb-2">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:outline-none focus:ring-0 transition-colors bg-transparent text-neutral-900" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.12em] text-neutral-400 font-medium mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:outline-none focus:ring-0 transition-colors bg-transparent text-neutral-900" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.12em] text-neutral-400 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:outline-none focus:ring-0 transition-colors bg-transparent text-neutral-900" required />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-[0.12em] text-neutral-400 font-medium mb-2">Program Interest</label>
                  <select id="interest" name="interest" className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:outline-none focus:ring-0 transition-colors bg-transparent text-neutral-600">
                    <option value="">Select...</option>
                    <option value="kids">Kids Karate Training</option>
                    <option value="adult">Adult Karate Training</option>
                    <option value="fitness">Fitness & Athletics</option>
                    <option value="combat">Combat Skills & Weapon Use</option>
                    <option value="teambuilding">Teambuilding</option>
                    <option value="women">Women & Girls Self-Defense</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.12em] text-neutral-400 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-0 py-3 border-0 border-b border-neutral-200 focus:border-neutral-900 focus:outline-none focus:ring-0 transition-colors bg-transparent text-neutral-900 resize-none" required></textarea>
                </div>

                <Button type="submit" className="bg-neutral-950 hover:bg-neutral-800 text-white px-10 py-3 text-sm font-medium rounded-none mt-4">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}