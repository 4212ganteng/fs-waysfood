import { GlobalButton } from "../components";
import { BensuMenuList } from "../data/BensuMenuList";

const BensuMenus = () => {
  return (
    <section className="container px-4 mt-8 xl:px-[197px] xl:mt-14">
      <h1 className="text-3xl font-bold my-6">Geprek Bensu, Menus</h1>
      <div className="xl:flex xl:flex-wrap xl:gap-3">
        {BensuMenuList.map((item, index) => (
          <div
            key={index}
            className="shadow-lg border rounded-md p-3 mb-5 xl:w-[272px] xl:h-[350px] xl:flex flex-col justify-between  "
          >
            <img src={item.image} alt="" className="w-full" />
            <h2 className="font-bold text-2xl my-3 lg:m-0 xl:text-lg">
              {item.name}
            </h2>
            <p className="text-red-500 my-3 lg:m-0 text-xl font-light">
              Rp {item.price}
            </p>
            <GlobalButton
              title="Add To Cart"
              bg="bg-primary"
              styled="w-full text-black font-bold my-3 lg:m-0 py-[10px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BensuMenus;
