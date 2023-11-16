export interface LastMatches {
  "info": Info
}

interface Info {
  "gameEndTimestamp": number,
  "gameId": number,
  "gameMode": String,
  "gameStartTimestamp": number,
  "participants": Participants[]
  "killsTeam": number
}

interface Participants {
  "assists": number,
  "championId": number,
  "championName": String,
  "deaths": number,
  "kills": number,
  "puuid": String,
  "summonerName": String,
  "teamId": number,
  "totalDamageDealtToChampions": number,
  "win": boolean,
  "gameId": number,
  "percentP": number,
  "iconoChampion": String
}


