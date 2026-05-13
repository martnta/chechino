'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const kyuBelts = [
  {
    rank: '10th Kyu',
    belt: 'White',
    color: '#FFFFFF',
    textDark: true,
    meaning: 'Purity & Beginning',
    description: 'The starting point. A blank canvas representing the student\'s openness to learn. No prior knowledge is assumed — only the willingness to begin.',
    requirements: ['Basic stances (Zenkutsu-dachi, Kokutsu-dachi)', 'Straight punch (Seiken Tsuki)', 'Low block (Gedan Barai)', 'Front kick (Mae Geri)'],
    time: 'Entry level',
  },
  {
    rank: '9th Kyu',
    belt: 'Orange',
    color: '#F97316',
    textDark: false,
    meaning: 'First Light',
    description: 'The sun begins to rise. The student has taken the first real step and starts to grasp fundamental techniques and dojo etiquette.',
    requirements: ['Combination punching', 'Inside & outside blocks (Soto/Uchi Uke)', 'Roundhouse kick (Mawashi Geri)', 'Basic kata: Taikyoku Sono Ichi'],
    time: '~3 months',
  },
  {
    rank: '8th Kyu',
    belt: 'Orange w/ Stripe',
    color: '#EA580C',
    textDark: false,
    meaning: 'Growing Warmth',
    description: 'Confidence is building. Techniques become more natural, and the student begins to understand the "why" behind each movement.',
    requirements: ['Kata: Taikyoku Sono Ni', 'Knife-hand block (Shuto Uke)', 'Knee kicks (Hiza Geri)', 'Basic sparring drills'],
    time: '~6 months',
  },
  {
    rank: '7th Kyu',
    belt: 'Blue',
    color: '#2563EB',
    textDark: false,
    meaning: 'Sky — Expanding Horizons',
    description: 'The student looks upward. Training intensifies and the practitioner begins to see how deep the art truly goes.',
    requirements: ['Kata: Taikyoku Sono San', 'Back kick (Ushiro Geri)', 'Elbow strikes (Empi Uchi)', 'Controlled kumite introduction'],
    time: '~9 months',
  },
  {
    rank: '6th Kyu',
    belt: 'Yellow',
    color: '#EAB308',
    textDark: true,
    meaning: 'Sunrise — Growing Strength',
    description: 'The sun climbs higher. The student\'s foundation is solid and they begin developing personal style and sharper reflexes.',
    requirements: ['Kata: Pinan Sono Ichi', 'Spinning techniques', 'Advanced blocking combinations', 'Semi-contact sparring'],
    time: '~1 year',
  },
  {
    rank: '5th Kyu',
    belt: 'Yellow w/ Stripe',
    color: '#CA8A04',
    textDark: false,
    meaning: 'High Sun',
    description: 'Midway through the kyu ranks. The practitioner is no longer a beginner — commitment and consistency define this stage.',
    requirements: ['Kata: Pinan Sono Ni', 'Combination kicks', 'Speed and timing drills', 'Extended sparring rounds'],
    time: '~1.5 years',
  },
  {
    rank: '4th Kyu',
    belt: 'Green',
    color: '#16A34A',
    textDark: false,
    meaning: 'Growth — Deep Roots',
    description: 'Like a tree taking root. The student\'s techniques have matured and mental discipline becomes as important as physical ability.',
    requirements: ['Kata: Pinan Sono San', 'Advanced kumite strategy', 'Breaking techniques (Tameshiwari)', 'Teaching junior students'],
    time: '~2 years',
  },
  {
    rank: '3rd Kyu',
    belt: 'Brown',
    color: '#78350F',
    textDark: false,
    meaning: 'Earth — Grounding',
    description: 'Close to the earth, close to mastery. The brown belt represents maturity and a deep understanding of Kyokushin principles.',
    requirements: ['Kata: Pinan Sono Yon, Sono Go', 'Full-contact sparring proficiency', 'Advanced breaking', 'Leadership in the dojo'],
    time: '~3 years',
  },
  {
    rank: '2nd Kyu',
    belt: 'Brown w/ Stripe',
    color: '#5C2D0E',
    textDark: false,
    meaning: 'Deep Earth',
    description: 'Preparation for the ultimate test. Every technique is refined, every kata internalized. The mind is being forged as much as the body.',
    requirements: ['Kata: Sanchin, Tsuki No Kata', 'Tournament-level kumite', 'Multi-opponent drills', 'Endurance testing'],
    time: '~3.5 years',
  },
  {
    rank: '1st Kyu',
    belt: 'Brown w/ Gold Stripe',
    color: '#451A03',
    textDark: false,
    meaning: 'Threshold',
    description: 'Standing at the gate of Shodan. This is the final preparation — technically, mentally, and spiritually — before the black belt grading.',
    requirements: ['All Pinan and Taikyoku kata mastery', '40-man kumite preparation', 'Advanced Tameshiwari', 'Written examination on Kyokushin philosophy'],
    time: '~4 years',
  },
];

const danBelts = [
  {
    rank: 'Shodan',
    dan: '1st Dan',
    meaning: 'First Degree — The Real Beginning',
    description: 'In Kyokushin, the black belt is not the end — it\'s where real training begins. Shodan means "first step." The student has proved basic mastery and is now ready to truly learn.',
    test: 'The legendary 40-man kumite — fighting 40 consecutive full-contact rounds.',
    time: '4-5 years total',
  },
  {
    rank: 'Nidan',
    dan: '2nd Dan',
    meaning: 'Second Degree — Deepening',
    description: 'The practitioner refines and deepens all knowledge. Teaching becomes a serious responsibility. Techniques are not just performed — they are understood.',
    test: '50-man kumite. Demonstrated mastery of advanced kata and teaching ability.',
    time: '7-8 years total',
  },
  {
    rank: 'Sandan',
    dan: '3rd Dan',
    meaning: 'Third Degree — Technical Expert',
    description: 'A recognized technical expert. The practitioner begins to develop their own interpretation of Kyokushin while honoring its traditions.',
    test: '60-man kumite. Original kata interpretation. International seminar participation.',
    time: '10-12 years total',
  },
  {
    rank: 'Yondan',
    dan: '4th Dan',
    meaning: 'Fourth Degree — Sensei',
    description: 'The title of Sensei (teacher) is formally earned. The practitioner is a leader, mentor, and guardian of the art. Their focus shifts from self-improvement to developing others.',
    test: '70-man kumite. Published contribution to Kyokushin. Dojo leadership.',
    time: '15-20 years total',
  },
  {
    rank: 'Godan',
    dan: '5th Dan',
    meaning: 'Fifth Degree — Master Instructor',
    description: 'A master-level practitioner whose influence extends beyond a single dojo. They shape the direction of Kyokushin in their region or country.',
    test: '100-man kumite (historically). Exceptional lifetime contribution.',
    time: '20+ years total',
  },
];

export default function Grading() {
  const [activeBelt, setActiveBelt] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-950 py-32 md:py-40">
        <div className="container mx-auto px-6">
          <span className="highlight-line" />
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">The Belt Journey</h1>
          <p className="text-white/40 mt-6 max-w-xl text-lg">From white to black — every belt tells a story of discipline, perseverance, and growth. This is the Kyokushin grading path.</p>
        </div>
      </section>

      {/* Kyu Grades — Visual Timeline */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <span className="section-label">Kyu Grades</span>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">The Path to Black Belt</h2>
          <p className="text-neutral-500 mb-16 max-w-lg">Ten stages of transformation. Each belt represents not just skill, but character development.</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-neutral-200" />

            <div className="space-y-2">
              {kyuBelts.map((belt, i) => (
                <motion.div
                  key={belt.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setActiveBelt(activeBelt === i ? null : i)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-start gap-6 md:gap-8 py-5 pl-0">
                      {/* Belt dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: belt.color }}
                        >
                          <span className={`text-xs font-bold ${belt.textDark ? 'text-neutral-800' : 'text-white'}`}>
                            {belt.rank.split(' ')[0]}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="text-lg font-bold text-neutral-900">{belt.belt} Belt</h3>
                          <span className="text-xs text-neutral-400">{belt.rank}</span>
                          <span className="text-xs text-neutral-300 ml-auto hidden md:inline">{belt.time}</span>
                        </div>
                        <p className="text-sm text-neutral-400 text-serif italic mt-1">{belt.meaning}</p>

                        {/* Expandable content */}
                        <AnimatePresence>
                          {activeBelt === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 pb-2">
                                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{belt.description}</p>
                                <div>
                                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium mb-2">Key Requirements</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                                    {belt.requirements.map((req, j) => (
                                      <span key={j} className="text-sm text-neutral-500 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-red-600 flex-shrink-0" />
                                        {req}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <p className="text-xs text-neutral-300 mt-3 md:hidden">Typical timeline: {belt.time}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                  {i < kyuBelts.length - 1 && <div className="border-b border-neutral-50 ml-20 md:ml-24" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transition strip */}
      <section className="bg-neutral-950 py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-neutral-500 text-sm uppercase tracking-[0.2em] mb-3">Beyond the Kyu Grades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Dan Ranks</h2>
          <p className="text-neutral-500 mt-4 max-w-lg mx-auto">In Kyokushin, the black belt is not the destination — it is where the real journey begins.</p>
        </div>
      </section>

      {/* Dan Grades */}
      <section className="bg-neutral-950 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-px">
            {danBelts.map((dan, i) => (
              <motion.div
                key={dan.rank}
                className="border-l-2 border-white/10 pl-8 py-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Dan marker */}
                <div className="absolute -left-[9px] top-10 w-4 h-4 rounded-full bg-neutral-950 border-2 border-red-600" />

                <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                  <span className="text-red-500 text-sm font-bold">{dan.dan}</span>
                  <h3 className="text-xl font-bold text-white">{dan.rank}</h3>
                  <span className="text-neutral-600 text-xs ml-auto">{dan.time}</span>
                </div>
                <p className="text-serif italic text-white/30 text-sm mb-3">{dan.meaning}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{dan.description}</p>
                <div className="bg-white/5 px-4 py-3 rounded">
                  <p className="text-xs uppercase tracking-[0.12em] text-neutral-500 font-medium mb-1">The Test</p>
                  <p className="text-neutral-300 text-sm">{dan.test}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="bg-white py-16 border-t border-neutral-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
            Grading timelines are approximate and vary by student. Advancement in Kyokushin is earned through consistent training, character development, and demonstration of skill — never by time alone.
          </p>
        </div>
      </section>
    </>
  );
}
