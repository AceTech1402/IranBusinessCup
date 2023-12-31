import { MatchInGroupData } from "../../../../../types/types";
import clockIcon from "./../../../../../assets/images/result-schedule/clock.svg";
import classes from "./matches.module.css";
import { Team } from "./team/team";

export const Matches: React.FC<{ matches: MatchInGroupData[] }> = ({
  matches,
}) => {
  return (
    <ul className={classes.matches}>
      {matches.map((match) => (
        <li className={classes.matchContainer}>
          <div className={classes.match}>
            <Team team={match.homeTeam} />
            <div className={classes.result}>
              <span>{match.homeTeam.score}</span>
              <span> - </span>
              <span>{match.awayTeam.score}</span>
            </div>
            <Team team={match.awayTeam} rowReverse="!flex-row-reverse" />
          </div>
          <span className={classes.time}>
            <span className={classes.clock}><img src={clockIcon} /></span>
            <span className={classes.txt}>11:00</span>
          </span>
        </li>
      ))}
    </ul>
  );
};