interface TeamInTable {
  name: string;
  wins: string;
  lose: string;
  points: string;
  id: string;
}

export interface TableInGroupData {
  groupName: string;
  teams: TeamInTable[];
}

export interface TeamInMatch {
  name: string;
  flag: string;
  score: number;
}

export interface MatchInGroupData {
  homeTeam: TeamInMatch;
  awayTeam: TeamInMatch;
  id: string;
}

export interface GroupDataType {
  table: TableInGroupData;
  matches: MatchInGroupData[];
  id: string;
}
export interface PlayOffDataType {
  matches: MatchInGroupData[];
  id: string;
}

export interface MatchesType {
  matches: {
    id: number;
    homeTeam: TeamInMatch;
    awayTeam: TeamInMatch;
    levelGame: string;
  }[];
}