import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[1.25rem] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-5 mb-1">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite font-normal text-base leading-5">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Ultimate sales? <br className="sm:block hidden" />
          mentorship and outreach.
        </h2>
        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5 leading-8`}>
          With MaestroMentor, every step of the instrument transaction process is improved for every stakeholder involved.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feat, i) => (
          <FeatureCard key={feat.id} {...feat} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
