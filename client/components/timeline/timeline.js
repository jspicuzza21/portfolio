import React, { useMemo } from "react";
import TimelineEntry from "./timelineEntry";

const Timeline = () => {
  const jobs = [
    {
      id: 1,
      title: "Student",
      company: "Rutgers University",
      period: "May 2016",
      description:
        "Started my career developing web applications using React and Node.js.",
      expanded: false,
      timestamp: new Date("May 1, 2016").getTime(),
    },
    {
      id: 2,
      title: "Digital Forensic Analyst",
      company: "Monmouth County Prosecutor's Office",
      period: "June 2016",
      description:
        "Led development of customer-facing applications and improved system architecture.",
      expanded: false,
      timestamp: new Date("June 1, 2016").getTime(),
    },
    {
      id: 3,
      title: "Digital Forensic Analyst",
      company: "Complete Discovery Source",
      period: "September 2018",
      description:
        "Managed a team of developers and implemented CI/CD pipelines.",
      expanded: false,
      timestamp: new Date("September 1, 2018").getTime(),
    },
    {
      id: 4,
      title: "Cybersecurity Analyst",
      company: "T&M Protection Resources",
      period: "May 2019",
      description:
        "Currently leading architecture decisions and mentoring junior developers.",
      expanded: false,
      timestamp: new Date("May 1, 2019").getTime(),
    },
    {
      id: 5,
      title: "Agent",
      company: "Somerset County Prosecutor's Office",
      period: "June 2020",
      description:
        "Currently leading architecture decisions and mentoring junior developers.",
      expanded: false,
      timestamp: new Date("June 1, 2020").getTime(),
    },
    {
      id: 6,
      title: "Junior Web Developer",
      company: "BetMGM",
      period: "March 2021",
      description:
        "Currently leading architecture decisions and mentoring junior developers.",
      expanded: false,
      timestamp: new Date("March 1, 2021").getTime(),
    },
    {
      id: 7,
      title: "Software Engineer",
      company: "EverTrue",
      period: "June  2022",
      description:
        "Currently leading architecture decisions and mentoring junior developers.",
      expanded: false,
      timestamp: new Date("June 1, 2022").getTime(),
    },
    {
      id: 8,
      title: "Software Engineer II",
      company: "EverTrue",
      period: "April  2023",
      description:
        "Currently leading architecture decisions and mentoring junior developers.",
      expanded: false,
      timestamp: new Date("April 1, 2023").getTime(),
    },
  ];

  // Calculate the earliest and latest timestamps to determine the timeline range
  const timelineData = useMemo(() => {
    const earliestTimestamp = Math.min(...jobs.map((job) => job.timestamp));
    const latestTimestamp = Math.max(...jobs.map((job) => job.timestamp));
    const timelineRange = latestTimestamp - earliestTimestamp;

    // Calculate position percentage for each job
    return jobs.map((job) => ({
      ...job,
      position: ((job.timestamp - earliestTimestamp) / timelineRange) * 100,
    }));
  }, [jobs]);

  return (
    <div className="timeline-container">
      <h1>Experience</h1>
      <div style={{ marginTop: "200px" }}>
        <div className="timeline-line"></div>
        <div className="entries-container">
          {timelineData.map((job) => (
            <TimelineEntry key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
