import ProcessTime from "./ProcessTime";

function Table({ schedule }) {
  // fetch("https://extreme-ip-lookup.com/json/?key=iWIR5qXnQoUnpsOIZniE")
  //   .then((res) => res.json())
  //   .then((response) => {
  //     console.log("Country: ", response.country);
  //   })
  //   .catch((data, status) => {
  //     console.log("Request failed");
  //   });

  // http://ip-api.com/json
  // https://ipinfo.io/
  // https://geoip-db.com

  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  let currentDate = new Date();

  const finished = schedule.filter((race) => new Date(race.date) < currentDate);
  const remaining = schedule.filter((race) => new Date(race.date) > currentDate);

  return (
    <table className="table-auto text-white w-full md:w-11/12">
      <thead>
        {/* <tr>
          <th>Race Name</th> */}
        {/* <th className="hidden md:block">Circuit Name</th> */}
        {/* <th>Date</th>
          <th>Time</th>
        </tr> */}
      </thead>
      <tbody>
        {finished.map((race) => (
          <tr key={race.raceName} className="line-through decoration-red-700 text-gray-300">
            <td>{race.raceName}</td>
            {/* <td className="hidden md:block">{race.Circuit.circuitName}</td> */}
            <td>{new Date(race.date).toLocaleDateString("en-US", options).slice(8, -6)}</td>
            <td>
              {new Date(race.date + "T" + race.time).toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
            </td>
          </tr>
        ))}
        {remaining.map((race) => (
          <tr key={race.raceName} className="">
            <td>{race.raceName}</td>
            {/* <td className="hidden md:block">{race.Circuit.circuitName}</td> */}
            <td>{new Date(race.date).toLocaleDateString("en-US", options).slice(8, -6)}</td>
            <td>
              {new Date(race.date + "T" + race.time).toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
