import { GroupDataType } from '../../../../types/types';
import classes from './groupSectionItem.module.css';
import { Matches } from './matches/matches';
import { Table } from './table/table';

export const GroupSectionItem: React.FC<{ groupData: GroupDataType }> = ({ groupData }) => {
  return (
    <section className={classes.groupItem}>
      <Table table={groupData.table} />
      <Matches matches={groupData.matches}/>
    </section>
  )
};