import React from "react";
import moment from "moment";

interface Props {
  date: string;
}

export default ({ date }: Props) => {
  moment.locale("ja");
  return <span>{moment(date).format("LL")}</span>;
};
