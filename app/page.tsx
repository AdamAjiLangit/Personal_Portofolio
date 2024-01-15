import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import ProjectsSection from '@/components/sub/ProjectSection'
import Image from 'next/image'
import Projects from '@/components/backup/Projects'
import StarsCanvas from '@/components/main/StarBackground'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ProjectsSection />
      </div>
    </main>
  )
}
