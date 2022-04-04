import TableNew from "./TableNew";

export default function LandingPage(props) {
  const raceData = props.raceData;

  return (
    <div className="bg-white w-full flex justify-center mb-12">
      <TableNew raceData={raceData} />
    </div>
  );
}
