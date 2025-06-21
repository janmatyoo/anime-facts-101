export interface AnimeFact {
  id: string
  anime: string
  title: string
  preview: string
  fullText: string
  image: string
}

export const animeFacts: AnimeFact[] = [
  {
    id: "1",
    anime: "One Piece",
    title: "Oda's 3-Hour Sleep Schedule",
    preview: "Eiichiro Oda, creator of One Piece, only sleeps 3 hours per night to maintain his weekly manga schedule.",
    fullText:
      "Eiichiro Oda, the mastermind behind One Piece, maintains an incredibly demanding schedule, sleeping only 3 hours per night. He works from 5 AM to 2 AM the next day, taking only short breaks for meals. This dedication has allowed him to consistently produce weekly chapters for over 25 years, making One Piece one of the longest-running and most successful manga series in history.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    anime: "Dragon Ball Z",
    title: "Goku's Hair Color Mystery",
    preview: "Super Saiyan transformation was created because Akira Toriyama got tired of coloring Goku's black hair.",
    fullText:
      "The iconic Super Saiyan transformation with blonde hair was actually born out of practical necessity. Akira Toriyama, Dragon Ball's creator, was exhausted from constantly having to color in Goku's black hair in every panel. By making Super Saiyan hair blonde, he could leave it uncolored, saving significant time and effort. This simple decision became one of anime's most recognizable transformations.",
    image: "https://res.cloudinary.com/dwcryn9sr/image/upload/af_127.png",
  },
  {
    id: "3",
    anime: "Naruto",
    title: "Ramen Shop Inspiration",
    preview: "Ichiraku Ramen shop was based on a real ramen restaurant that Masashi Kishimoto frequented.",
    fullText:
      "The beloved Ichiraku Ramen shop where Naruto spends most of his money is based on a real ramen restaurant in Fukuoka that Masashi Kishimoto used to visit regularly. The author was so fond of the place that he decided to immortalize it in his manga. The real restaurant has since become a pilgrimage site for Naruto fans from around the world.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    anime: "Attack on Titan",
    title: "Titan Design Origins",
    preview: "Hajime Isayama based Titan designs on mixed martial arts fighters and drunk people.",
    fullText:
      "Attack on Titan's terrifying Titans were inspired by Hajime Isayama's observations of mixed martial arts fighters and intoxicated people. He noticed how MMA fighters' faces would contort during intense matches, and how drunk people would move in unpredictable, unsettling ways. This combination created the uncanny valley effect that makes Titans so disturbing and memorable.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "5",
    anime: "Studio Ghibli",
    title: "No-Face's Silent Popularity",
    preview: "No-Face from Spirited Away has no dialogue but became one of Studio Ghibli's most popular characters.",
    fullText:
      "Despite having minimal dialogue and screen time, No-Face from Spirited Away has become one of Studio Ghibli's most beloved and merchandised characters. The character represents the loneliness and consumption culture of modern society, resonating with audiences worldwide. Miyazaki designed No-Face to be a mirror of human nature, which explains its universal appeal.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "6",
    anime: "Death Note",
    title: "Apple Product Placement",
    preview: "Light Yagami exclusively uses Apple products throughout Death Note as subtle product placement.",
    fullText:
      "Throughout Death Note, Light Yagami is consistently shown using Apple products - from his laptop to his phone. This wasn't accidental; it was deliberate product placement that also served a narrative purpose. The sleek, modern Apple aesthetic reinforced Light's image as a tech-savvy, methodical character, while the brand's association with innovation paralleled his god complex.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function getRandomFact(): AnimeFact {
  return animeFacts[Math.floor(Math.random() * animeFacts.length)]
}

export function getFactById(id: string): AnimeFact | undefined {
  return animeFacts.find((fact) => fact.id === id)
}