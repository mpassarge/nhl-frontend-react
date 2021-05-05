export interface Team {
    id: number,
    name: string,
    points: number,
    gamesPlayed: number
}

export interface Division {
    divisionName: string,
    teams: Team[]
}