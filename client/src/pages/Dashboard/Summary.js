import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { Loading, StatsContainer, ChartsContainer } from "../../components";

const Summary = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>Summary</h3>
        <Loading center />;
      </>
    );
  }

  return (
    <>
      <h3>Summary</h3>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Summary;
