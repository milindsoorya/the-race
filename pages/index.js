import Container from "../components/Container";
import LandingPage from "../components/LandingPage";

export default function Home({ processedRaceData }) {
  return (
    <Container>
      <LandingPage raceData={processedRaceData} />
    </Container>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch currSeasonData from external API
  const res = await fetch(`http://ergast.com/api/f1/current.json`);
  const finishedRaceDataRes = await fetch("http://ergast.com/api/f1/2022/results/1.json");

  const currSeasonData = await res.json();
  const finishedRaceData = await finishedRaceDataRes.json();

  // TODO: process currSeasonData
  const raceData = currSeasonData.MRData.RaceTable.Races;
  const raceResults = finishedRaceData.MRData.RaceTable.Races;

  const winners = [];

  raceResults.map((x) => {
    const results = x.Results;
    results.map((result) => {
      const driverName = result.Driver.givenName + " " + result.Driver.familyName;
      winners.push(driverName);
    });
  });

  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  let currentDate = new Date();

  const finished = raceData.filter((race) => new Date(race.date) < currentDate);
  const remaining = raceData.filter((race) => new Date(race.date) > currentDate);

  let finishedRaceList = [];
  let remainingRaceList = [];

  finished.forEach((race, index) => {
    const raceName = race.raceName;
    const raceTime = new Date(race.date + "T" + race.time).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    const raceDate = new Date(race.date).toLocaleDateString("en-US", options).slice(8, -6);
    const winner = winners[index];

    finishedRaceList = [...finishedRaceList, { raceName, raceTime, raceDate, winner }];
  });

  remaining.map((race) => {
    const raceName = race.raceName;
    const raceTime = new Date(race.date + "T" + race.time).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    const raceDate = new Date(race.date).toLocaleDateString("en-US", options).slice(8, -6);

    remainingRaceList = [...remainingRaceList, { raceName, raceTime, raceDate }];
  });

  const processedRaceData = [finishedRaceList, remainingRaceList];

  // Pass currSeasonData to the page via props
  return { props: { processedRaceData } };
}
