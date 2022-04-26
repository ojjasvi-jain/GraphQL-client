import React from "react";
import { Layout } from "../components";
import { gql } from "@apollo/client";

const TRACKS = gql`
  query getData {
    tracksForHome {
      id
      title
      thumbnail
      moduleCount
      length
      author {
        id
        name
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
