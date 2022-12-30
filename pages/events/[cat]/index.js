import Image from "next/image";
import Link from "next/link";
import React from "react";
import CatEvent from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data }) => {
  console.log("City Data", data);
  return (
    <CatEvent data={data} />
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((e) => {
    return {
      params: {
        cat: e.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log("This is context", context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  console.log(id);

  const data = allEvents.filter((e) => e.city === id);
  console.log("This is data", data);
  return {
    props: { data },
  };
}
