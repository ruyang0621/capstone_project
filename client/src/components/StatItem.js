import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ title, count, color }) => {
  return (
    <Wrapper color={color}>
      <p className="stat-title">{title}</p>
      <h5 className="count">{count}</h5>
    </Wrapper>
  );
};
export default StatItem;
