"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"

export default function Home() {
  const newsItems = [
    { id: 1, date: "September 28, 2019", title: "ADDICTION WHEN GAMBLING BECOMES...", image: "/news-laptop.jpg", description: "Understanding the fine line between entertainment and addiction in modern gambling culture." },
    { id: 2, date: "September 28, 2019", title: "HYPNOSIS 12 STEPS TO ACQUIRE MIND POWER...", image: "/news-magazine.jpg", description: "Discover the transformative power of hypnosis and unlock your mind's full potential." },
    { id: 3, date: "September 28, 2019", title: "ADDICTION WHEN GAMBLING BECOMES...", image: "/news-laptop-2.jpg", description: "Exploring the psychological aspects of gambling addiction and recovery strategies." },
    { id: 4, date: "October 5, 2019", title: "MINDFULNESS TECHNIQUES FOR DAILY LIFE...", image: "/news-meditation.jpg", description: "Learn practical mindfulness exercises to reduce stress and improve mental clarity." },
    { id: 5, date: "October 12, 2019", title: "THE SCIENCE OF SLEEP PATTERNS...", image: "/news-sleep.jpg", description: "Understanding circadian rhythms and how to optimize your sleep for better health." },
    { id: 6, date: "October 19, 2019", title: "DIGITAL DETOX IN MODERN WORLD...", image: "/news-phone.jpg", description: "Strategies for reducing screen time and reconnecting with the real world." },
    { id: 7, date: "October 26, 2019", title: "NUTRITION FOR MENTAL HEALTH...", image: "/news-food.jpg", description: "How diet impacts brain function and emotional well-being." },
    { id: 8, date: "November 2, 2019", title: "EXERCISE AND DEPRESSION RELIEF...", image: "/news-exercise.jpg", description: "The powerful connection between physical activity and mental health improvement." },
    { id: 9, date: "November 9, 2019", title: "SOCIAL MEDIA ANXIETY SOLUTIONS...", image: "/news-social.jpg", description: "Coping mechanisms for social media-induced stress and comparison anxiety." },
    { id: 10, date: "November 16, 2019", title: "MEDITATION FOR BEGINNERS...", image: "/news-zen.jpg", description: "A comprehensive guide to starting your meditation journey and finding inner peace." }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const maxIndex = newsItems.length - 1 // scroll one card at a time

  const scrollToIndex = useCallback((index) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const card = container.firstChild
    if (!card) return
    const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight)
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    })
    setCurrentIndex(index)
  }, [])

  const scrollLeft = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex
    scrollToIndex(newIndex)
  }, [currentIndex, maxIndex, scrollToIndex])

  const scrollRight = useCallback(() => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }, [currentIndex, maxIndex, scrollToIndex])

  // Auto-scroll one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex < maxIndex ? prevIndex + 1 : 0
        scrollToIndex(newIndex)
        return newIndex
      })
    }, 4000) // every 4 seconds

    return () => clearInterval(interval)
  }, [maxIndex, scrollToIndex])

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button onClick={scrollLeft} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            LATEST NEWS & BLOGS
          </h1>
          <button onClick={scrollRight} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4 snap-center">
                <div className="group hover:shadow-lg transition-shadow duration-300 border border-gray-200 shadow-sm h-full bg-white rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] flex items-center justify-center bg-gray-100">
                    <div className="text-4xl">📰</div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3 font-medium">{item.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <button
                      onClick={() => alert(`Opening blog: ${item.title}`)}
                      className="w-full py-2 px-4 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors rounded-md text-sm font-medium"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
