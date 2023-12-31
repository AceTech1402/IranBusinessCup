import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
// import { GroupSectionList } from "../../components/result-schedule/group-section-list/groupSectionList";
import { Tabs } from "../../components/result-schedule/tabs/tabs";
import classes from "./playOff.module.css";
import PlayOffSchedule from "../../components/play-off-schedule/playOffSchedule";
import PlayOffScheduleMobile from "../../components/play-off-schedule-mobile/playOffScheduleMobile";
import { Helmet } from "react-helmet";
import LinkToGS from "../../components/link-to-golden-sports/linkToGS";

const PlayOff = () => {
  return (
    <>
      <Helmet>
        <title>Result/schedule | play off</title>
      </Helmet>
      <LinkToGS />
      <Navbar />
      <div className={classes.PlayOffContent}>
        <Tabs />
        <PlayOffScheduleMobile />
        <PlayOffSchedule />
      </div>
      <Footer />
    </>
  );
};
export default PlayOff;
