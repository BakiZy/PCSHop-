import classes from "./HardwareSummary.module.css";

const HardwareSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Hardware stuff</h2>
      <p>
        Make sure you check for availability of a hardware in stock before
        ordering, due to current situation of hardware. Especially for GPUs.
      </p>
    </section>
  );
};

export default HardwareSummary;
