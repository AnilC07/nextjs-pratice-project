import Image from "next/image";
import Calendar from "../icons/Calendar";
import Location from "../icons/Location";
import RightArrow from "../icons/RightArrow";

import styles from './eventItem.module.css'
import Button from "./UI/Button";


const EventItem = ({ title, image, date, location, id }) => {
  const readableHumanDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `events/${id}`
  return (
    <li className={styles.item}>
      <Image src={'/' + image} alt={`image of ${title}`}   width={200} height={200}/>
      <div className={styles.summary}>
        <div >
          <h2>{title}</h2>
          <div className={styles.date}>
          <Calendar />
            <time>{readableHumanDate}</time>
          </div>
          <div className={styles.address}>
          <Location />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={styles.icon}><RightArrow /></span></Button>
          
        </div>
      </div>
    </li>
  );
};

export default EventItem;
