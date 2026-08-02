import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import StickyCard from '../components/StickyCard'
import ProgressiveBlur from '../components/ProgressiveBlur'
import { designCategories } from '../data/designs'

const categoryKeys = Object.keys(designCategories)

export default function DesignArchive() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const categoryId = designCategories[requestedCategory] ? requestedCategory : categoryKeys[0]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

  const activeData = designCategories[categoryId]
  const currentIndex = categoryKeys.indexOf(categoryId)
  const nextCategoryKey = categoryKeys[(currentIndex + 1) % categoryKeys.length]
  const nextCategoryData = designCategories[nextCategoryKey]
  const items = activeData.images.map((image, index) => ({
    title: `${activeData.title} 0${index + 1}`,
    image,
  }))

  const openNextCategory = () => {
    setSearchParams({ category: nextCategoryKey })
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-bg text-text-primary"
    >
      <section className="relative z-10 flex min-h-[70vh] w-full flex-col justify-center px-6 pb-16 pt-32 md:px-12 lg:px-24">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-7xl lg:text-[10vw]"
          >
            {activeData.title}
          </motion.h1>
          <div className="mt-4 flex flex-col gap-2 md:mt-8">
            <p className="text-xl uppercase tracking-wide text-white/80 md:text-3xl">
              {activeData.description}
            </p>
            <p className="font-mono text-sm uppercase tracking-widest text-accent-blue md:text-base">
              {activeData.year}
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="absolute right-6 top-12 font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-white md:right-12 lg:right-24"
        >
          [ Close × ]
        </Link>
      </section>

      <section className="relative flex w-full flex-col items-center gap-[10vh] px-4 pb-[50vh] pt-[30vh]">
        {items.map((item) => (
          <StickyCard key={item.title} item={item} />
        ))}
        <ProgressiveBlur
          position="bottom"
          backgroundColor="#0A0D12"
          height="6rem"
          blurAmount="8px"
        />
      </section>

      <section className="relative z-20 flex min-h-[50vh] w-full flex-col items-center justify-center border-t border-border bg-bg py-32">
        <button
          onClick={openNextCategory}
          className="group flex cursor-pointer flex-col items-center gap-4 text-center"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-accent-blue">
            Next category →
          </span>
          <span className="text-4xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-accent-blue md:text-7xl">
            {nextCategoryData.title}
          </span>
        </button>
      </section>
    </motion.main>
  )
}
