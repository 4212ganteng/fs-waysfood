import { PopularList } from "../data/PopularList";

const Popular = () => {
  return (
    <section className="mt-8 px-4 container xl:px-[197px] xl:mt-14">
      <h1 className="text-3xl font-bold my-6">Popular Restaurant</h1>
      <div className="flex flex-col lg:flex-row xl:gap-3 xl:flex-wrap">
        {PopularList.map((item, index) => (
          <div
            className="shadow-lg border flex items-center px-5 py-3 rounded-md justify-start mb-5  xl:flex-none xl:w-[272px]"
            key={index}
          >
            <img src={item.logo} alt="bk" />
            <h2 className="pl-5 text-2xl font-bold">{item.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
