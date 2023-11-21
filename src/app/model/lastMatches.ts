export interface LastMatches {
  "info": Info
}

interface Info {
  "gameMode": String,
  "gameStartTimestamp": number,
  "participants": Participants[]
}

interface Participants {
  "assists": number,
  "challenges": Challenges,
  "championId": number,
  "championName": String,
  "deaths": number,
  "kills": number,
  "iconSummoner1Id": String,
  "iconSummoner2Id": String,
  "summonerName": String,
  "totalDamageDealtToChampions": number,
  "win": boolean,
  "iconoChampion": String
}

interface Challenges {
    "kda": number,
    "killParticipation" : number
}

