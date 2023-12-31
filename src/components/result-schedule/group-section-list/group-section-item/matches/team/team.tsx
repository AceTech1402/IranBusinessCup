import { TeamInMatch } from "../../../../../../types/types";
import classes from "./team.module.css";

interface TeamProps {
  team: TeamInMatch;
  rowReverse?: string;
}

export const Team: React.FC<TeamProps> = ({ team, rowReverse }) => {
  return (
    <div className={`${classes.team} ${rowReverse}`}>
      <span className={classes.flag}>
        <img />
      </span>
      <span className={classes.name}>{team.name}</span>
    </div>
  );
};
