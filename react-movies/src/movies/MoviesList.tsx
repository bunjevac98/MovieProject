import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model.del";
import css from "./MoviesList.module.css";
import GenericList from "./utils/GenericList";
import Loading from "./utils/Loading";

export default function MoviesList(props: MoviesListProps) {
  return <GenericList list={props.movies}>
    <div className={css.div}>
      {props.movies?.map((movie) => (
        <IndividualMovie {...movie} key={movie.id} />
      ))}
    </div>
  </GenericList>;
}

interface MoviesListProps {
  movies?: movieDTO[];
}
