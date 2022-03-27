import Container from "../components/Container";
import LandingPage from "../components/LandingPage";

export default function Home({ raceData }) {
  return (
    <div className="h-screen">
      <Container>
        <LandingPage raceData={raceData} />
      </Container>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://ergast.com/api/f1/current.json`);
  const data = await res.json();

  // TODO: process data
  const raceData = data.MRData.RaceTable.Races;
  // Pass data to the page via props
  return { props: { raceData } };
}
