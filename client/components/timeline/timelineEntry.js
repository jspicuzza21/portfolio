import React from "react";

const TimelineEntry = ({ job }) => {
  const { id, title, company, period, description, position } = job;
  // Determine if the ID is odd or even
  const isOdd = id % 2 !== 0;

  return (
    <div
      className={`timeline-entry ${isOdd ? "odd-entry" : "even-entry"}`}
      style={{ left: `${position}%` }}
    >
      {!isOdd && <div className="vertical-line top-line"></div>}
      <div className="timeline-entry-content">
        {!isOdd && (
          <p>
            <strong className="period">{period}</strong>
          </p>
        )}
        <em>{title}</em>
        <p className="company">{company}</p>
        {isOdd && <strong className="period">{period}</strong>}
      </div>
      {isOdd && <div className="vertical-line bottom-line"></div>}
    </div>
  );
};

export default TimelineEntry;
