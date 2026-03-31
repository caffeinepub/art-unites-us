import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

const FLYER_1 =
  "/assets/uploads/whatsapp_image_2026-03-27_at_12.36.47-019d3582-221a-77d7-9c94-21e10b8c6c86-1.jpeg";
const FLYER_2 =
  "/assets/uploads/chatgpt_image_mar_27_2026_12_38_04_pm-019d3582-2395-73f2-8e7f-17e901d2ffab-2.png";

const ARTISTS = [
  "DEV DARSHAN .K",
  "VIJAYARAGHAVAN. K",
  "Sujith NM",
  "Vidhyuth NM",
  "T. R. Yaazh Amudhan",
  "C  U Kavin",
  "Vishruthi C U",
  "Tanav Velrajan Nandhini",
  "Jeshurun Samuel P G",
  "THIVNESH. H",
  "Jishnu harisankar",
  "Nihaan Krishnan",
  "Srisaileeswari Sugumar",
  "THANYASRI SAI S",
  "Avantika A",
  "THRIYAMBIGA A V",
  "G.Divyasri",
  "Nandakumar",
  "Daksha.H.Iyer",
  "Rubesh KL",
  "NIRANJAN SRIJITH",
  "SAHANA. M.S",
  "A. J. Gionn Millus",
  "G. Sithalakshmy",
  "Dhuruvan",
  "Ramya v",
  "P. Nishchal",
  "Jothi Abilasha K",
  "A. Vasanthakumari",
  "Aarav Ajit",
  "Vallika Chennuri",
  "A. Shrivathsa",
  "Sidhiksha Pradhan",
  "SAMYUKTHAA AJITH",
  "THANVI MILIRA .P",
  "PARNIKA KAKARLA",
  "DHEETHA AADHIRAI B",
  "Rithvika Vishnu",
  "K.Lasritha varnika",
  "Adithya Shri R",
  "Srilaya MNG",
  "Samridhi Saravanakumar",
  "ANBU DEVISRI K.P",
  "Priyadarshini Periaswamy",
  "S. Kensiya",
  "AEGAN RS",
  "Aadhya J.V.",
  "Kavin Prasath G",
  "Mithra Yogesh",
  "Athreya R",
  "M MOHAMMED ASIF",
  "Sai Krishna.G",
  "S Prisha",
  "Monisha.M",
  "Karthikeyani",
  "C SreeNarayani",
  "R Harish",
  "Maya Nishanth",
  "Daisyrani S",
  "Hadhvitha.M",
  "Shoba S",
  "Tania Sebastian",
];

const EVENT_HIGHLIGHTS = [
  {
    title: "Welcome Address",
    desc: "Opening remarks to set the tone for a celebration of art and creativity.",
  },
  {
    title: "Felicitation of Dignitaries",
    desc: "Honouring our distinguished Chief Guest and Guest of Honour.",
  },
  {
    title: "Opening of Art Book Abstract",
    desc: "Ceremonial opening by Chief Guest Chitra Kala Ratna Nagai Manoharan & Guest of Honour Zareen Shaikh.",
  },
  {
    title: "Address by Distinguished Guests",
    desc: "Inspiring words from our Chief Guest and Guest of Honour.",
  },
  {
    title: "Inauguration Ceremony",
    desc: "Lighting of the Kuthuvillaku and grand opening of the Art Hall.",
  },
  {
    title: "Awarding Ceremony",
    desc: "April 4, 2026 · 10:00 AM – 12:00 Noon · Certificates and trophies awarded to our talented artists.",
  },
  {
    title: "Exhibition Display",
    desc: "April 4 & 5, 2026 · 10:00 AM – 5:00 PM · Explore artworks from 62 participating artists.",
  },
];

// ── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({
  label,
  title,
  labelColor = "oklch(0.63 0.085 67)",
  titleColor = "oklch(0.2 0.015 40)",
  dividerColor = "oklch(0.63 0.085 67)",
}: {
  label: string;
  title: string;
  labelColor?: string;
  titleColor?: string;
  dividerColor?: string;
}) {
  return (
    <div className="text-center mb-12">
      <p
        className="text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-2"
        style={{ color: labelColor }}
      >
        {label}
      </p>
      <h2
        className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      <div
        className="w-16 h-px mx-auto mt-4"
        style={{ backgroundColor: dividerColor }}
      />
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
// Section 1: Deep warm — rich saffron/terracotta/amber
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-10 pb-20 overflow-hidden"
      data-ocid="hero.section"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.55 0.15 50) 0%, oklch(0.62 0.17 45) 40%, oklch(0.58 0.14 55) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.18 65) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.12 35) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs font-sans font-semibold uppercase tracking-[0.4em] text-amber">
            Virtuoso Art School Presents
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl font-bold uppercase tracking-widest leading-none mb-3"
          style={{ color: "oklch(0.97 0.025 80)" }}
        >
          Art Unites Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mb-8"
        >
          <span
            className="ml-4 font-serif text-3xl md:text-4xl font-bold tracking-widest"
            style={{ color: "oklch(0.90 0.08 75)" }}
          >
            2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm font-sans mb-6"
          style={{ color: "oklch(0.92 0.03 75)" }}
        >
          <span className="flex items-center gap-1.5">
            <Star size={13} style={{ color: "oklch(0.88 0.12 75)" }} />
            April 4 &amp; 5, 2026 · 10:00 AM – 5:00 PM
          </span>
          <span style={{ color: "oklch(0.88 0.12 75)" }}>·</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} style={{ color: "oklch(0.88 0.12 75)" }} />
            Laburnum &amp; Indigo Galleries, Cholamandal Artists Village, ECR,
            Chennai
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10"
        >
          <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-sans font-semibold tracking-widest uppercase text-xs px-4 py-1.5">
            Free Entry
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: "1px solid oklch(0.75 0.10 65 / 0.4)" }}
          >
            <img
              src={FLYER_1}
              alt="Art Unites Us – Event Flyer with Chief Guest Nagai Manoharan"
              className="w-full h-auto object-contain"
            />
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ border: "1px solid oklch(0.75 0.10 65 / 0.4)" }}
          >
            <img
              src={FLYER_2}
              alt="Art Unites Us – Programme Schedule and Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#highlights"
            data-ocid="hero.highlights.button"
            className="px-7 py-3 font-sans font-semibold text-sm uppercase tracking-widest rounded-full transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              backgroundColor: "oklch(0.97 0.025 80)",
              color: "oklch(0.45 0.13 45)",
            }}
          >
            View Programme
          </a>
          <a
            href="#rsvp"
            data-ocid="hero.rsvp.button"
            className="px-7 py-3 font-sans font-semibold text-sm uppercase tracking-widest rounded-full border-2 transition-all hover:bg-white/10"
            style={{
              borderColor: "oklch(0.90 0.08 75)",
              color: "oklch(0.97 0.025 80)",
            }}
          >
            RSVP Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ── Event Highlights ─────────────────────────────────────────────────────────
// Section 2: Warm-to-neutral — golden peach / soft apricot
function EventHighlights() {
  return (
    <section
      id="highlights"
      className="py-20"
      data-ocid="highlights.section"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.93 0.07 60) 0%, oklch(0.95 0.055 68) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Programme"
          title="Event Highlights"
          labelColor="oklch(0.50 0.13 45)"
          titleColor="oklch(0.25 0.04 40)"
          dividerColor="oklch(0.55 0.13 50)"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EVENT_HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`highlights.item.${i + 1}`}
              className="flex gap-4 p-5 rounded-xl shadow-sm"
              style={{
                backgroundColor: "oklch(0.99 0.01 75 / 0.85)",
                border: "1px solid oklch(0.82 0.06 60 / 0.4)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "oklch(0.88 0.09 58)" }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "oklch(0.40 0.10 45)" }}
                >
                  {i + 1}
                </span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold mb-1"
                  style={{ color: "oklch(0.25 0.04 40)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-sans leading-relaxed"
                  style={{ color: "oklch(0.40 0.03 50)" }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Distinguished Guests ──────────────────────────────────────────────────────
// Section 3: Warm neutral — soft sandy / rose gold
function DistinguishedGuests() {
  const guests = [
    {
      role: "Chief Guest",
      name: "Chitra Kala Ratna Nagai Manoharan",
      bio: "Artist, Founder & Principal, Ajanta School of Arts, Chennai",
    },
    {
      role: "Guest of Honour",
      name: "Zareen Shaikh",
      bio: "Artist, Principal, Shaikh Drawing Class, Chennai",
    },
  ];

  return (
    <section
      id="guests"
      className="py-20"
      data-ocid="guests.section"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.88 0.055 30) 0%, oklch(0.90 0.045 40) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Distinguished Guests"
          title="Our Honoured Guests"
          labelColor="oklch(0.55 0.10 35)"
          titleColor="oklch(0.22 0.04 35)"
          dividerColor="oklch(0.60 0.10 35)"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guests.map((guest, i) => (
            <motion.div
              key={guest.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              data-ocid={`guests.item.${i + 1}`}
              className="text-center p-8 rounded-2xl shadow-md"
              style={{
                backgroundColor: "oklch(0.97 0.015 35 / 0.75)",
                border: "1px solid oklch(0.75 0.07 35 / 0.3)",
              }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: "oklch(0.82 0.08 35)",
                  border: "3px solid oklch(0.60 0.10 35)",
                }}
              >
                <span
                  className="font-serif text-2xl font-bold"
                  style={{ color: "oklch(0.98 0.01 35)" }}
                >
                  {guest.name.charAt(0)}
                </span>
              </div>
              <p
                className="text-xs font-sans font-semibold uppercase tracking-[0.3em] mb-2"
                style={{ color: "oklch(0.55 0.10 35)" }}
              >
                {guest.role}
              </p>
              <h3
                className="font-serif text-xl font-bold mb-2 leading-tight"
                style={{ color: "oklch(0.22 0.04 35)" }}
              >
                {guest.name}
              </h3>
              <p
                className="text-sm font-sans"
                style={{ color: "oklch(0.42 0.04 35)" }}
              >
                {guest.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Curators ──────────────────────────────────────────────────────────────────
// Section 4: Transitional — muted mauve / blush (bridge warm→cool)
function Curators() {
  return (
    <section
      id="curators"
      className="py-20"
      data-ocid="curators.section"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.88 0.045 355) 0%, oklch(0.86 0.040 320) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="Curated by"
          title="The Curators"
          labelColor="oklch(0.48 0.12 340)"
          titleColor="oklch(0.22 0.04 340)"
          dividerColor="oklch(0.52 0.12 340)"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["Shoba S", "Tania Sebastian"].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`curators.item.${i + 1}`}
              className="flex items-center gap-4 p-6 rounded-2xl shadow-sm"
              style={{
                backgroundColor: "oklch(0.97 0.012 340 / 0.8)",
                border: "1px solid oklch(0.75 0.06 340 / 0.3)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.10 340), oklch(0.62 0.12 320))",
                  border: "2px solid oklch(0.52 0.12 340)",
                }}
              >
                <span className="font-serif text-xl font-bold text-white">
                  {name.charAt(0)}
                </span>
              </div>
              <div>
                <h3
                  className="font-serif text-lg font-bold"
                  style={{ color: "oklch(0.22 0.04 340)" }}
                >
                  {name}
                </h3>
                <p
                  className="text-xs font-sans tracking-wide"
                  style={{ color: "oklch(0.48 0.12 340)" }}
                >
                  Virtuoso Art School
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Artists ───────────────────────────────────────────────────────────────────
// Section 5: Cool-neutral — soft lavender / periwinkle
function ArtistsSection() {
  return (
    <section
      id="artists"
      className="py-20"
      data-ocid="artists.section"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.88 0.040 280) 0%, oklch(0.86 0.045 265) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Participants"
          title="Participating Artists"
          labelColor="oklch(0.42 0.14 268)"
          titleColor="oklch(0.22 0.05 268)"
          dividerColor="oklch(0.45 0.14 268)"
        />
        <p
          className="text-center text-sm font-sans mb-10 -mt-6"
          style={{ color: "oklch(0.42 0.06 268)" }}
        >
          {ARTISTS.length} talented artists from Virtuoso Art School
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {ARTISTS.map((name, i) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: duplicate artist names require index key
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 10) * 0.04 }}
              data-ocid={`artists.item.${i + 1}`}
              className="px-3 py-3 rounded-lg text-center transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.97 0.012 268 / 0.85)",
                border: "1px solid oklch(0.72 0.07 268 / 0.35)",
              }}
            >
              <p
                className="text-xs font-sans leading-snug"
                style={{ color: "oklch(0.28 0.06 268)" }}
              >
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── RSVP & Contact ────────────────────────────────────────────────────────────
// Section 6: Cool — teal / indigo gradient
function RSVPContact() {
  return (
    <section
      id="rsvp"
      className="py-20"
      data-ocid="rsvp.section"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.55 0.12 220) 0%, oklch(0.50 0.14 255) 50%, oklch(0.48 0.13 240) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionHeading
          label="RSVP & Contact"
          title="Join Us"
          labelColor="oklch(0.82 0.09 200)"
          titleColor="oklch(0.96 0.015 220)"
          dividerColor="oklch(0.78 0.10 200)"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base font-sans leading-relaxed mb-10 italic"
          style={{ color: "oklch(0.88 0.04 220)" }}
        >
          &ldquo;We would be honoured by your presence to grace the occasion and
          encourage our budding artists.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl shadow-md p-8 space-y-5 text-left"
          style={{
            backgroundColor: "oklch(0.97 0.012 220 / 0.12)",
            border: "1px solid oklch(0.75 0.08 220 / 0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.65 0.10 220 / 0.5)" }}
            >
              <Mail size={16} style={{ color: "oklch(0.92 0.05 200)" }} />
            </div>
            <div>
              <p
                className="text-xs font-sans mb-0.5"
                style={{ color: "oklch(0.75 0.06 220)" }}
              >
                RSVP &amp; Email
              </p>
              <a
                href="mailto:virtuosoartschool@gmail.com"
                data-ocid="rsvp.email.link"
                className="text-sm font-sans font-medium transition-colors hover:opacity-80"
                style={{ color: "oklch(0.97 0.015 220)" }}
              >
                virtuosoartschool@gmail.com
              </a>
            </div>
          </div>

          <Separator
            style={{ backgroundColor: "oklch(0.75 0.08 220 / 0.25)" }}
          />

          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "oklch(0.65 0.10 220 / 0.5)" }}
            >
              <Phone size={16} style={{ color: "oklch(0.92 0.05 200)" }} />
            </div>
            <div>
              <p
                className="text-xs font-sans mb-0.5"
                style={{ color: "oklch(0.75 0.06 220)" }}
              >
                Phone
              </p>
              <a
                href="tel:9840691027"
                data-ocid="rsvp.phone.link"
                className="text-sm font-sans font-medium transition-colors hover:opacity-80"
                style={{ color: "oklch(0.97 0.015 220)" }}
              >
                9840691027
              </a>
            </div>
          </div>

          <Separator
            style={{ backgroundColor: "oklch(0.75 0.08 220 / 0.25)" }}
          />

          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "oklch(0.65 0.10 220 / 0.5)" }}
            >
              <MapPin size={16} style={{ color: "oklch(0.92 0.05 200)" }} />
            </div>
            <div>
              <p
                className="text-xs font-sans mb-0.5"
                style={{ color: "oklch(0.75 0.06 220)" }}
              >
                Venue
              </p>
              <p
                className="text-sm font-sans font-medium leading-relaxed"
                style={{ color: "oklch(0.97 0.015 220)" }}
              >
                Laburnum &amp; Indigo Galleries
                <br />
                Cholamandal Artists Village, ECR, Chennai
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
// Section 7: Deep cool — dark indigo / navy
function Footer() {
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;
  return (
    <footer
      className="py-8 text-center"
      data-ocid="footer.section"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.30 0.10 265) 0%, oklch(0.22 0.08 255) 100%)",
        color: "oklch(0.82 0.04 255)",
      }}
    >
      <p className="font-sans text-sm mb-1">
        © {new Date().getFullYear()} Virtuoso Art School · Art Unites Us
      </p>
      <p className="font-sans text-xs opacity-60">
        Built with ❤ using{" "}
        <a
          href={utmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Programme", href: "#highlights" },
    { label: "Guests", href: "#guests" },
    { label: "Artists", href: "#artists" },
    { label: "RSVP", href: "#rsvp" },
  ];
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-amber/20 backdrop-blur-md"
      style={{ backgroundColor: "oklch(0.975 0.012 75 / 0.9)" }}
      aria-label="Main navigation"
    >
      <a
        href="#home"
        data-ocid="nav.home.link"
        className="font-serif text-base font-bold tracking-widest uppercase text-charcoal hover:text-amber transition-colors"
      >
        Art Unites Us
      </a>
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-ocid={`nav.${l.label.toLowerCase()}.link`}
            className="text-xs font-sans font-semibold uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <EventHighlights />
        <DistinguishedGuests />
        <Curators />
        <ArtistsSection />
        <RSVPContact />
      </main>
      <Footer />
    </div>
  );
}
