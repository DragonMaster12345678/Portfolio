import data from "@/data/experience.json";

const Experience = () => {
  return (
    <div className="mt-10">
      <h2 className="bg-orange-100 text-4xl uppercase text-gray-600">
        Experience
      </h2>
      <ul className="mb-10">
        {data.topics.map((topic) => (
          <li key={topic} className="text-xl">
            {topic}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-10">
        {data.events.map((event) => (
          <div key={event.name}>
            <h2 className="text-2xl">{event.name}</h2>
            <ul className="list-disc pl-6">
              {event.points.map((point) => (
                <li key={point} className="text-xl">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
