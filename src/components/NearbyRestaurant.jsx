import { Link } from "react-router-dom";
import { NearbyRestaurantList } from "../data/NearbyRestauranList";

const NearbyRestaurant = () => {
  return (
    <section className="px-4 mt-8 container xl:px-[197px] xl:mt-14">
      <h1 className="text-3xl font-bold my-6">Restauran Near You</h1>
      <div className="xl:flex xl:gap-3 xl:flex-wrap">
        {NearbyRestaurantList.map((item, index) => (
          <Link to="/bensu-menu">
            <div
              key={index}
              className="shadow-xl p-3 border mb-5 rounded-lg xl:w-[272px]"
            >
              <img
                src={item.restaurantImage}
                className="w-full"
                alt={item.restaurantName}
              />
              <h2 className="font-bold text-xl py-3">{item.restaurantName}</h2>
              <p className="">{item.distance}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NearbyRestaurant;
