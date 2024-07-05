'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";

/* This loads the JSON data from the backend. */
const Page: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://167.99.57.54:8080/api/home")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="/profilePic.png"
              width="300"
              height="300"
              alt="User Profile"
              className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-contain"
            />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.name}</h1>
              <p className="text-muted-foreground md:text-xl">{data.title}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.about}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Work Experience</h2>
            {data.work_experience.map((work_expierence: any, index: number) => (
              <div className="space-y-2" key={index}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">{work_expierence.title}</h3>
                  <p className="text-muted-foreground">{work_expierence.company} | {work_expierence.duration}</p>
                  <p className="text-muted-foreground">{work_expierence.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">

          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            {data.hobbies.map((hobbies: any, index: number) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                <img
                  src={hobbies}
                  alt={`Hobby ${index + 1}`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hobbies</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {data.hobbiesDescription}
          </p>
        </div>
      </div>
    </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
            {data.education.map((edu: any, index: number) => (
              <div className="space-y-2" key={index}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.university} | {edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/NSC.png"
              width="550"
              height="310"
              alt="Education"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/travelMap.png"
              width="800"
              height="800"
              alt="Travel Map"
              className="rounded-full w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] object-contain"
            />

          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Travels</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.travels}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Page;
