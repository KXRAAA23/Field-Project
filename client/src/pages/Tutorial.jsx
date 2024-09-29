import React from "react";
import styled from "styled-components";
import squat from "../utils/Images/squat.mp4";
import bench from "../utils/Images/bench.mp4";
import deadlift from "../utils/Images/deadlift.mp4";

const tutorialsData = [
  {
    id: 1,
    title: "How to perfect your squat",
    description: "Here's how to perform a perfect squat, step-by-step guide!",
    videoUrl: squat,  
  },
  {
    id: 2,
    title: "How to perfect your squat",
    description: "Here's how to perform a perfect bench, step-by-step guide!",
    videoUrl: bench,
  },
  {
    id: 3,
    title: "How to perfect your squat",
    description: "Here's how to perform a perfect deadlift, step-by-step guide!",
    videoUrl: deadlift,
  },
];

const TutorialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.bg_secondary};
`;

const TutorialCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

const TutorialVideo = styled.video`
  width: 50%;
  height: 150px;
  border-radius: 8px;
  margin-top: 20px;
`;

const TutorialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const TutorialTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const TutorialDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const Tutorials = () => {
  return (
    <TutorialsContainer>
      {tutorialsData.map((tutorial) => (
        <TutorialCard key={tutorial.id}>
          <TutorialContent>
            <TutorialTitle>{tutorial.title}</TutorialTitle>
            <TutorialDescription>{tutorial.description}</TutorialDescription>
          </TutorialContent>
          {tutorial.videoUrl && (
            <TutorialVideo controls>
              <source src={tutorial.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </TutorialVideo>
          )}
        </TutorialCard>
      ))}
    </TutorialsContainer>
  );
};

export default Tutorials;
