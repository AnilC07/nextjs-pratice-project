
import styles from './resultsTitle.module.css';
import Button from './UI/Button';

function ResultsTitle({date}) {
 

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
