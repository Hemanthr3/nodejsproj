import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatEvent = ({data}) => {
  return (
    <div className="cat_events">
      <h1>Events in {data[0].city}</h1>
      <div className="content" >
        {data.map((e) => (
          <Link className="card" key={e.id} href={`/events/${e.city}/${e.id}`} passHref>
            <Image width={300} height={300} src={e.image} alt={e.title} />
            <h2>{e.title}</h2> <p>{e.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
