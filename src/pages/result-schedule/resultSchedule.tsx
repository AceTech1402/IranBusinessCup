import { Helmet } from "react-helmet";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { GroupSectionList } from "../../components/result-schedule/group-section-list/groupSectionList";
import { Tabs } from "../../components/result-schedule/tabs/tabs";
import classes from './resultSchedule.module.css';
import LinkToGS from "../../components/link-to-golden-sports/linkToGS";

const ResultSchedule = () => {
  return (
    <>
      <LinkToGS />
      <Helmet>
        <title>Result/schedule | tables</title>
      </Helmet>
      <Navbar />
      <div className={classes.resultScheduleContent}>
        <Tabs />
        <GroupSectionList />
      </div>
      <Footer />
    </>
  );
};
export default ResultSchedule;
