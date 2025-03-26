import React from "react";
import { useParams } from "react-router-dom";

const BranchSingle = () => {
  const { id } = useParams();
  return <div>{id}-id тай салбар байна</div>;
};

export default BranchSingle;
