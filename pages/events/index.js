import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((e) => (
        <Link className="card" key={e.id} href={`events/${e.id}`}>
          <Image width={400} height={400} src={e.image} alt={e.title} />
          <h2>{e.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
