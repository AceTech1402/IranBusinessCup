import { Helmet } from "react-helmet";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { GroupSectionList } from "../../components/result-schedule/group-section-list/groupSectionList";
// import { Tabs } from "../../components/result-schedule/tabs/tabs";
import classes from './resultSchedule.module.css';

const ResultSchedule = () => {
  return (
    <>
      <Helmet>
        <title>جدول و برنامه‌ی بازی‌ها</title>
      </Helmet>
      <Navbar />
      <div className={classes.resultScheduleContent}>
        <h2>جدول و برنامه‌ی بازی‌ها</h2>
        {/* <Tabs /> */}
        <GroupSectionList />
      </div>
      <Footer />
    </>
  );
};
export default ResultSchedule;
