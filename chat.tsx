import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Profile {
  name: string
  image: string
  status: "online" | "offline"
}

const profiles: Profile[] = [
  {
    name: "Youssef Eid",
    image: "https://i.pravatar.cc/150?img=1",
    status: "online",
  },
  {
    name: "Sarah Chen",
    image: "https://i.pravatar.cc/150?img=2",
    status: "offline",
  },
  {
    name: "Mike Ross",
    image: "https://i.pravatar.cc/150?img=3",
    status: "online",
  },
  {
    name: "Emma Wilson",
    image: "https://i.pravatar.cc/150?img=4",
    status: "online",
  },
  {
    name: "Alex Kumar",
    image: "https://i.pravatar.cc/150?img=5",
    status: "offline",
  },
  {
    name: "Lisa Park",
    image: "https://i.pravatar.cc/150?img=6",
    status: "online",
  },
]

export function ChatHeader() {
  return (
    <div className="p-4 border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4">
          {profiles.map((profile) => (
            <div key={profile.name} className="relative inline-block">
              <Avatar className="h-12 w-12 border-2 border-white">
                {profile.image ? <AvatarImage src={profile.image} alt={profile.name} /> : null}
                <AvatarFallback>
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                  profile.status === "online" ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

