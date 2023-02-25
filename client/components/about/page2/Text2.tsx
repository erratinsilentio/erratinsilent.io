const classnames = "underline hover:uppercase hover:text-yellow-300";

export const Text2 = () => {
  return (
    <>
      <p className="mb-6 text-center italic">
        Physically and mentally - i definitely felt pushed to my boundaries many
        times. It can be VERY demanding job.
      </p>
      <p className="text-center italic">
        It teached me <span className={classnames}>patience</span>,{" "}
        <span className={classnames}>focus</span>, ability to{" "}
        <span className={classnames}>organize</span> my job. Quick{" "}
        <span className={classnames}>decision making</span>, as well as
        cooperating with others -{" "}
        <span className={classnames}>communication</span> and{" "}
        <span className={classnames}>team work</span>.
      </p>
    </>
  );
};
