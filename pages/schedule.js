import { useState } from "react";
import Table from "../components/Table";

function Schedule({ raceData }) {
  const [schedule, setSchedule] = useState(raceData);

  return (
    <div className="">
      <Table schedule={schedule} />
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

export default Schedule;
