import "./Icons.style.css";

import { ReactComponent as Concept } from "./../resources/icons/concept.svg";
import { ReactComponent as Epilogue } from "./../resources/icons/epilog.svg";
import { ReactComponent as Episodes } from "./../resources/icons/episodes.svg";
import { ReactComponent as Feedback } from "./../resources/icons/feedback.svg";
import { ReactComponent as Finale } from "./../resources/icons/finale.svg";
import { ReactComponent as NextEpisode } from "./../resources/icons/next_episode.svg";
import { ReactComponent as Pilot } from "./../resources/icons/pilot.svg";
import { ReactComponent as Plotpoints } from "./../resources/icons/storyline.svg";
import { ReactComponent as Premise } from "./../resources/icons/premise.svg";
import { ReactComponent as Prologue } from "./../resources/icons/prolog.svg";
import { ReactComponent as Protagonists } from "./../resources/icons/protagonists.svg";
import { ReactElement } from "react";
import { ReactComponent as Review } from "./../resources/icons/future.svg";
import { ReactComponent as Trailer } from "./../resources/icons/trailer.svg";
import { ReactComponent as Welcome } from "./../resources/icons/intro.svg";

const s = 24;

export const WelcomeIcon = () => <Welcome width={s} height={s} />;

export const ConceptIcon = () => <Concept width={s} height={s} />;

export const ProtagonistsIcon = () => <Protagonists width={s} height={s} />;

export const PilotIcon = () => <Pilot width={s} height={s} />;

export const FeedbackIcon = () => <Feedback width={s} height={s} />;

export const EpisodesIcon = () => <Episodes width={s} height={s} />;

export const PremiseIcon = () => <Premise width={s} height={s} />;

export const PrologueIcon = () => <Prologue width={s} height={s} />;

export const TrailerIcon = () => <Trailer width={s} height={s} />;

export const PlotpointsIcon = () => <Plotpoints width={s} height={s} />;

export const FinaleIcon = () => <Finale width={s} height={s} />;

export const EpilogueIcon = () => <Epilogue width={s} height={s} />;

export const ReviewIcon = () => <Review width={s} height={s} />;

export const NextEpisodeIcon = () => <NextEpisode width={s} height={s} />;

export const ICONS: { [key: string]: ReactElement } = {
  Welcome: <WelcomeIcon />,
  Concept: <ConceptIcon />,
  Protagonists: <ProtagonistsIcon />,
  Pilot: <PilotIcon />,
  Feedback: <FeedbackIcon />,
  Episodes: <EpisodesIcon />,
  Premise: <PremiseIcon />,
  Prologue: <PrologueIcon />,
  Trailer: <TrailerIcon />,
  Plotpoints: <PlotpointsIcon />,
  Finale: <FinaleIcon />,
  Epilogue: <EpilogueIcon />,
  Review: <ReviewIcon />,
  NextEpisode: <NextEpisodeIcon />,
};
