"use client"

import type React from "react"
import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { MessageCircle, Bell, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const initialProfiles = [
  {
    id: 1,
    username: "alice_j",
    bio: "Adventure seeker & coffee lover",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 2,
    username: "bob_s",
    bio: "Foodie and amateur chef",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 3,
    username: "charlie_b",
    bio: "Musician and night owl",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 4,
    username: "diana_r",
    bio: "Bookworm and cat person",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 5,
    username: "ethan_h",
    bio: "Fitness enthusiast & traveler",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
]

const SwipeableProfileCards: React.FC = () => {
  const [profiles, setProfiles] = useState(initialProfiles)
  const [showInterested, setShowInterested] = useState(false)

  const removeProfile = (id: number) => {
    setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id))
  }

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      const profileId = Number.parseInt(eventData.event.currentTarget.id)
      setShowInterested(true)
      setTimeout(() => {
        removeProfile(profileId)
        setShowInterested(false)
      }, 1000)
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-blue-500 border-b">
        <h1 className="text-xl font-bold text-white">Ohsocious</h1>
        <div className="flex space-x-2 sm:space-x-4">
          <button className="p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className="sr-only">Chat</span>
          </button>
          <button className="p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className="sr-only">Notifications</span>
          </button>
          <button className="p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <span className="sr-only">Account</span>
          </button>
        </div>
      </header>
      <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
        <AnimatePresence>
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Card {...handlers} id={profile.id.toString()} className="mb-4 overflow-hidden">
                <CardContent className="p-0 relative">
                  <img
                    src={profile.image || "/placeholder.svg"}
                    alt={profile.username}
                    className="w-full h-[70vh] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                    <h2 className="text-2xl font-bold mb-2">{profile.username}</h2>
                    <p>{profile.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showInterested && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-green-500 text-white text-3xl font-bold p-8 rounded-lg shadow-lg">Interested!</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SwipeableProfileCards

