import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import Backdrop from "./Backdrop";

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <Backdrop />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map(launch => {
        return <LaunchItem key={launch.flight_number} launch={launch} />;
      })}
    </div>
  );
}

export default Launches;
