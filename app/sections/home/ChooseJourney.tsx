import { useNavigate } from "react-router";
import Button from "~/components/Button";

function ChooseJourney() {
  const navigate = useNavigate();
  return (
    <section className="bg-neutral-100 flex flex-col gap-16 pt-20 md:pt-48 not-md:px-5">
      <div className="container mx-auto flex flex-col items-center gap-y-11">
        <div className="text-3xl md:text-[46px] font-sora font-regular text-background md:w-2/3 text-center">
          Unlock is built for players that want to reach their true potential and forward-thinking clubs.
          <span className="text-neutral-400"> Choose your path.</span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 md:gap-x-3 font-inter font-regular  md:text-2xl">
          <Button onClick={() => navigate("/clubs")} label="Clubs" inverted />
          <Button onClick={() => navigate("/players")} label="Players" inverted />
        </div>
      </div>
    </section>
  );
}

export default ChooseJourney;
