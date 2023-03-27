import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading />;
  } else if (props.list.length === 0) {
    if (props.emptylistUI) {
      return props.emptylistUI;
    }
    return <>There is no elements to display</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptylistUI?: ReactElement;
  children: ReactElement;
}
