import { ArtisanProfile } from "@/components/artisan/artisan-profile"
import { Header } from "@/components/layout/header"
import { notFound } from "next/navigation"

// Mock artisan data - in production this would come from your database
const artisans = {
  "maria-santos": {
    id: "maria-santos",
    name: "Maria Santos",
    location: "Oaxaca, Mexico",
    specialty: "Traditional Zapotec Weaving",
    rating: 4.9,
    reviews: 127,
    image: "/elderly-mexican-woman-weaving-colorful-traditional.jpg",
    coverImage: "/close-up-of-hands-weaving-colorful-zapotec-pattern.jpg",
    heritage: "5th Generation Weaver",
    yearsOfExperience: 25,
    joinedDate: "2019-03-15",
    bio: "Maria Santos is a master weaver from the Zapotec community in Oaxaca, Mexico. Born into a family of textile artists, she learned the ancient art of backstrap loom weaving from her grandmother at the age of seven. For over 25 years, Maria has dedicated her life to preserving the traditional techniques and symbolic patterns that have been passed down through five generations of her family.",
    story:
      "Growing up in the mountains of Oaxaca, Maria watched her grandmother transform simple wool into intricate tapestries that told stories of their ancestors. Each pattern held meaning - the diamond shapes representing the four directions, the zigzag lines symbolizing lightning and rain, essential for their agricultural community. When tourism began to threaten traditional crafts with mass-produced imitations, Maria made it her mission to keep authentic Zapotec weaving alive.",
    techniques: [
      "Backstrap Loom Weaving",
      "Natural Dye Preparation",
      "Traditional Pattern Design",
      "Wool Spinning",
      "Cultural Symbol Integration",
    ],
    materials: [
      "Hand-spun Wool",
      "Natural Dyes (Cochineal, Indigo, Pomegranate)",
      "Traditional Backstrap Loom",
      "Wooden Combs and Tools",
    ],
    achievements: [
      "UNESCO Intangible Cultural Heritage Recognition",
      "Mexican National Arts Award 2020",
      "Featured in Smithsonian Folklife Festival",
      "Master Teacher at Oaxaca Textile Center",
    ],
    impact: {
      studentsTrained: 45,
      techniquesPreserved: 12,
      communitySupported: 25,
      yearsActive: 25,
    },
    products: [
      {
        id: 1,
        name: "Zapotec Diamond Rug",
        price: 485,
        image: "/beautiful-handwoven-zapotec-diamond-pattern-rug-in.jpg",
        timeToMake: "3 weeks",
        sold: 23,
      },
      {
        id: 2,
        name: "Traditional Table Runner",
        price: 165,
        image: "/zapotec-table-runner.jpg",
        timeToMake: "1 week",
        sold: 41,
      },
      {
        id: 3,
        name: "Ceremonial Wall Hanging",
        price: 720,
        image: "/zapotec-wall-hanging.jpg",
        timeToMake: "5 weeks",
        sold: 8,
      },
    ],
    testimonials: [
      {
        id: 1,
        author: "Sarah Chen",
        rating: 5,
        content:
          "The rug I purchased from Maria is absolutely stunning. You can feel the love and tradition woven into every thread. The story behind each pattern makes it so much more meaningful.",
        date: "2024-01-15",
        verified: true,
      },
      {
        id: 2,
        author: "David Rodriguez",
        rating: 5,
        content:
          "Maria's work is exceptional. The quality is outstanding and knowing that I'm supporting traditional crafts makes it even more special. Highly recommend!",
        date: "2024-01-08",
        verified: true,
      },
    ],
  },
  "kenji-nakamura": {
    id: "kenji-nakamura",
    name: "Kenji Nakamura",
    location: "Kyoto, Japan",
    specialty: "Raku Ceramic Pottery",
    rating: 4.8,
    reviews: 89,
    image: "/japanese-master-potter-working-with-clay-on-potter.jpg",
    coverImage: "/japanese-tea-ceremony-with-raku-pottery-bowls-in-s.jpg",
    heritage: "Raku Pottery Master",
    yearsOfExperience: 30,
    joinedDate: "2018-11-20",
    bio: "Kenji Nakamura is a master potter specializing in the ancient Japanese art of Raku ceramics. Trained in the traditional methods passed down through centuries, he creates pieces that embody the Japanese philosophy of wabi-sabi - finding beauty in imperfection and impermanence.",
    story:
      "Born in Kyoto, Kenji was drawn to clay from childhood. He spent 15 years as an apprentice under Master Tanaka, learning not just the technical aspects of Raku firing, but the spiritual philosophy behind each piece. His work reflects the meditative nature of the tea ceremony and the profound connection between earth, fire, and human creativity.",
    techniques: ["Raku Firing", "Tea Bowl Shaping", "Glaze Formulation", "Reduction Firing", "Kintsugi Repair"],
    materials: ["Local Kyoto Clay", "Traditional Glazes", "Charcoal Kilns", "Natural Ash", "Gold Leaf (for Kintsugi)"],
    achievements: [
      "Japan Traditional Crafts Award",
      "Tea Master Certification",
      "International Ceramic Exhibition Winner",
      "Cultural Ambassador to UNESCO",
    ],
    impact: {
      studentsTrained: 32,
      techniquesPreserved: 8,
      communitySupported: 15,
      yearsActive: 30,
    },
    products: [
      {
        id: 1,
        name: "Raku Tea Bowl Set",
        price: 320,
        image: "/elegant-japanese-raku-ceramic-bowls-with-crackled-.jpg",
        timeToMake: "2 weeks",
        sold: 15,
      },
      {
        id: 2,
        name: "Meditation Vase",
        price: 280,
        image: "/raku-ceramic-vase.jpg",
        timeToMake: "10 days",
        sold: 22,
      },
    ],
    testimonials: [
      {
        id: 1,
        author: "Emily Watson",
        rating: 5,
        content:
          "Kenji's tea bowls are works of art. The imperfect beauty of Raku ceramics brings such peace to my daily tea ritual. Truly masterful craftsmanship.",
        date: "2024-01-20",
        verified: true,
      },
    ],
  },
}

interface ArtisanPageProps {
  params: {
    id: string
  }
}

export default function ArtisanPage({ params }: ArtisanPageProps) {
  const artisan = artisans[params.id as keyof typeof artisans]

  if (!artisan) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArtisanProfile artisan={artisan} />
      </main>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(artisans).map((id) => ({
    id,
  }))
}
