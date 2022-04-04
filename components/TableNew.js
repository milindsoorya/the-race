function TableNew({ raceData }) {
  const finished = raceData[0];
  const remaining = raceData[1];

  return (
    <div className="w-10/12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Race Name
            </th>
            <th scope="col" className="px-6 py-3">
              Schedule
            </th>
            <th scope="col" className="px-6 py-3">
              Winner
            </th>
          </tr>
        </thead>
        <tbody>
          {finished.map((race) => (
            <tr
              key={race.raceName}
              className="line-through decoration-red-700 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {race.raceName}
              </th>
              <td className="px-6 py-4">
                {race.raceTime}
                {", "}
                {race.raceDate}
              </td>
              <td>{race.winner}</td>
            </tr>
          ))}

          {remaining.map((race) => (
            <tr
              key={race.raceName}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {race.raceName}
              </th>
              <td className="px-6 py-4">
                {race.raceTime}
                {", "}
                {race.raceDate}
              </td>
              <td>{race.winner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableNew;
