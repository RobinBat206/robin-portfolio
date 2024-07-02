/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DQpX3BYuqOb
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
import Link from "next/link"
import { ResponsiveBar } from "@nivo/bar"
import { JSX, ClassAttributes, HTMLAttributes } from "react"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="/placeholder.svg"
              width="300"
              height="300"
              alt="User Profile"
              className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover"
            />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">John Doe</h1>
              <p className="text-muted-foreground md:text-xl">Software Engineer & Adventurer</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hi, I'm John Doe, a passionate software engineer with a love for adventure and exploration. I've worked on
              a variety of projects, from building web applications to developing mobile apps. In my free time, you can
              find me hiking, traveling, or trying out new hobbies.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Work Experience</h2>
            <div className="space-y-2">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-muted-foreground">Acme Inc. | 2019 - Present</p>
                <p className="text-muted-foreground">
                  Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with
                  cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Intern</h3>
                <p className="text-muted-foreground">Globex Corporation | 2018</p>
                <p className="text-muted-foreground">
                  Gained hands-on experience in web development, participating in the creation of a responsive website
                  using HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Work Experience"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg" width="300" height="200" alt="Hobby 1" className="rounded-lg object-cover" />
              <img src="/placeholder.svg" width="300" height="200" alt="Hobby 2" className="rounded-lg object-cover" />
              <img src="/placeholder.svg" width="300" height="200" alt="Hobby 3" className="rounded-lg object-cover" />
              <img src="/placeholder.svg" width="300" height="200" alt="Hobby 4" className="rounded-lg object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hobbies</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              In my free time, I enjoy a variety of hobbies that help me stay active and explore new interests. From
              hiking and photography to learning new languages and playing the guitar, I'm always discovering new ways
              to challenge myself and have fun.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
            <div className="space-y-2">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University of Somewhere | 2015 - 2019</p>
                <p className="text-muted-foreground">
                  Graduated with a 3.8 GPA, specializing in software engineering and web development.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">High School Diploma</h3>
                <p className="text-muted-foreground">Acme High School | 2011 - 2015</p>
                <p className="text-muted-foreground">
                  Maintained a strong academic record and participated in various extracurricular activities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/placeholder.svg"
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
            <BarChart className="aspect-[4/3]" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Travels</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Exploring new places and experiencing different cultures is one of my greatest passions. I've had the
              opportunity to travel to various countries around the world, from the bustling cities of Europe to the
              serene landscapes of Asia. Each trip has been an adventure, filled with unforgettable memories and a
              deeper appreciation for the diversity of our planet.
            </p>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            LinkedIn
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            GitHub
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Twitter
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}
