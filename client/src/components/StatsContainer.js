import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";

const StatsContainer = () => {
  const { stats } = useAppContext();
  const statsList = [
    {
      title: "jobs applied",
      count: stats.applied || 0,
      color: "#395ad2",
    },
    {
      title: "applications pending",
      count: stats.pending || 0,
      color: "#f7a600",
    },
    {
      title: "interviews scheduled",
      count: stats.interviewing || 0,
      color: "#2c6947",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      color: "#d65556",
    },
  ];
  return (
    <Wrapper>
      {statsList.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
