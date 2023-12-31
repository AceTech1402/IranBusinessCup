import { TableInGroupData } from "../../../../../types/types";
import classes from "./table.module.css";
export const Table: React.FC<{ table: TableInGroupData }> = ({ table }) => {
  return (
    <div className={classes.tableContainer}>
      <h1 className={classes.groupName}>GROUP {table.groupName}</h1>
      <table className={classes.table}>
        <thead className={classes.tags}>
          <th>#Team</th>
          <div className={classes.statsTags}>
            <th>W</th>
            <th>L</th>
            <th>PTS</th>
          </div>
        </thead>
        <tbody className={classes.teams}>
          {table.teams.map((team, index) => (
            <tr className={classes.team}>
              <div className={classes.nameFlag}>
                <td>{index + 1} .</td>
                <td className={classes.flag}>
                  <img />
                </td>
                <td className={classes.name}>{team.name}</td>
              </div>
              <div className={classes.stats}>
                <td className={classes.wins}>{team.wins}</td>
                <td className={classes.lose}>{team.lose}</td>
                <td className={classes.points}>{team.points}</td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
