export interface movieDTO{
    id:number;
    title:string;
    poster:string;
}
//upitnik znaci da je undefinded i da ce ga jos traziti
export interface landingPageDTO{
    inTheaters?:movieDTO[];
    upcomingReleases?:movieDTO[];
}