import { FiPaperclip } from "react-icons/fi";
import { TfiMapAlt } from "react-icons/tfi";
import { GlobalButton } from "../components";

const EditProfile = () => {
  return (
    <section className="container px-4 mt-8 xl:px-[197px] xl:mt-14">
      <h1 className="text-3xl font-bold my-6">Edit Profile</h1>
      <div className="lg:grid grid-cols-4 lg:gap-5">
        <div className="col-span-3">
          <input
            type="text"
            placeholder="Full Name"
            className="shadow-lg w-full border-2 h-14 rounded-md px-3 mb-5 lg:mb-10"
          />
        </div>
        <div className="shadow-xl lg:shadow-none">
          <label
            htmlFor="upload"
            className="flex items-center p-5 justify-between border-2 h-14 rounded-md mb-5 lg:mb-10"
          >
            <span className="text-slate-400">Attach Image</span>
            <FiPaperclip />
          </label>
        </div>
        <input type="file" id="upload" hidden />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="shadow-lg w-full border-2 h-14 rounded-md px-3 mb-5 lg:mb-10"
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Phone"
          className="shadow-lg w-full border-2 h-14 rounded-md px-3 mb-5 lg:mb-10"
        />
      </div>
      <div className="lg:grid grid-cols-4 lg:gap-5">
        <div className="col-span-3">
          <input
            type="text"
            placeholder="Location"
            className="shadow-lg w-full border-2 h-14 rounded-md px-3 mb-5 lg:mb-10"
          />
        </div>
        <div>
          <button className="w-full bg-secondary text-white py-3 rounded-md h-14 mb-5 lg:mb-28">
            Select On Map
            <TfiMapAlt className="inline-block ml-2" />
          </button>
        </div>
      </div>
      <div className="lg:text-end">
        <GlobalButton title="Save" styled="w-full lg:w-2/6 h-14" />
      </div>
    </section>
  );
};

export default EditProfile;
