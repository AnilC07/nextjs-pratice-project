import EventItem from "./EventItem";
import styles from './eventList.module.css'

const EventList = ({items}) => {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem 
        key={event.id}
        id={event.id}
        title={event.title}
        image={event.image}
        location={event.location}
        date={event.date} />
      ))}
    </ul>
  );
};

export default EventList;
