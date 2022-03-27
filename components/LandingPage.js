import Table from "./Table";

export default function LandingPage(props) {
  const raceData = props.raceData;
  return (
    <header className="bg-gray-900 w-full flex justify-center">
      <Table schedule={raceData} />
    </header>
  );
}
