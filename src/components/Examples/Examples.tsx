import ExamplesOverview from "./ExamplesOverview";
import { STORIES } from "../App/App";
import StoryTimeline from "./StoryTimeline/StoryTimeline";
import { useParams } from "react-router-dom";

export default function Examples() {
  const { storyId } = useParams<{ storyId: string }>();

  let activeStory = undefined;
  for (let i = 0; i < STORIES.length; i++) {
    const story = STORIES[i];
    if (story.id === storyId) {
      activeStory = story;
      break;
    }
  }

  return (
    <>
      {activeStory ? (
        <StoryTimeline story={activeStory} />
      ) : (
        <ExamplesOverview />
      )}
    </>
  );
}
