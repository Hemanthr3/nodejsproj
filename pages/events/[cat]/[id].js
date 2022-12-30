import React from "react";
import SingleEvent from "../../../src/components/events/single-event";

const EventsPage = ({ data }) => {
  return (
   <SingleEvent data={data} />
  );
};

export default EventsPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city.toString(),
        id: path.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
//   console.log("This is allevents", allEvents);
  const id = context.params.id;
  const data = allEvents.find((e) => e.id === id);
  return {
    props: { data },
  };
}

// export async function getStaticProps(context) {
//   console.log("This is context", context);
//   const id = context?.params.cat;
//   const { allEvents } = await import("/data/data.json");
//   console.log(id);

//   const data = allEvents.filter((e) => e.city === id);
//   console.log("This is data", data);
//   return {
//     props: { data },
//   };
// }
