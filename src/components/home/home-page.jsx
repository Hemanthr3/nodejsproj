import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((e) => (
        <Link className="card" key={e.id} href={`/events/${e.id}`}>
          <div className="image" >
            <Image alt={e.title} width={400} height={300} src={e.image} />
          </div>
          <div className="content">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
