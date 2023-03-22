import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/events/UI/Button";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import ErrorAlert from "./ErrorAlert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  console.log({ filteredYear, filteredMonth });
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  console.log({ numYear, numMonth });

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    console.log("invalid filter");
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    console.log("no filter");
    return (
      <>
        <ErrorAlert>
          <p className="center">No events for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
