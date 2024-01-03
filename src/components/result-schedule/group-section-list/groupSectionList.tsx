import classes from "./groupSectionList.module.css";
import { GroupDataType } from "../../../types/types";
import { GroupSectionItem } from "./group-section-item/groupSectionItem";

const groupsData: GroupDataType[] = [
  {
    table: {
      groupName: "A",
      teams: [
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "1" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "2" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "3" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "4" },
      ],
    },
    matches: [
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "1",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "2",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "3",
      },
    ],
    id: '1',
  },
  {
    table: {
      groupName: "A",
      teams: [
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "1" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "2" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "3" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "4" },
      ],
    },
    matches: [
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "1",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "2",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "3",
      },
    ],
    id: '2',
  },
  {
    table: {
      groupName: "A",
      teams: [
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "1" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "2" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "3" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "4" },
      ],
    },
    matches: [
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "1",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "2",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "3",
      },
    ],
    id: '3',
  },
  {
    table: {
      groupName: "A",
      teams: [
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "1" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "2" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "3" },
        { name: "Team Name", wins: "-", lose: "-", points: "-", id: "4" },
      ],
    },
    matches: [
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "1",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "2",
      },
      {
        homeTeam: { name: "Team Name", flag: "", score: 0 },
        awayTeam: { name: "Team Name", flag: "", score: 0 },
        id: "3",
      },
    ],
    id: '4',
  },
];

export const GroupSectionList: React.FC = () => {
  return (
    <ul className={classes.groupSectionList}>
      {groupsData.map(groupData => <GroupSectionItem groupData={groupData} key={groupData.id} />)}
    </ul>
  );
};