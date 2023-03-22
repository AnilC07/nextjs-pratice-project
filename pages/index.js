 import EventList from "@/components/events/EventList"
import { getFeaturedEvents } from "@/dummy-data"
import Link from "next/link"
 
 const HomePage = () => {

  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  )
}

export default HomePage
