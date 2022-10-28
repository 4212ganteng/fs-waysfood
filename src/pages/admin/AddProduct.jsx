import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import { GlobalButton } from "../../components";
import { API } from "../../config/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

const AddProduct = () => {
  let navigate = useNavigate();

  const [preview, setPreview] = useState(null); //For image preview

  const [form, setForm] = useState({
    image: "",
    title: "",
    price: 0,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      formData.set("image", form.image[0], form.image[0].name);
      formData.set("title", form.title);
      formData.set("price", form.price);

      const data = await API.post("/product/create", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setForm({
        image: "",
        title: "",
        price: 0,
      });
      setPreview(null);
      navigate("/add-product");
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <form onSubmit={(e) => handleSubmit.mutate(e)}>
      <section className="container px-4 mt-8 xl:px-[197px] xl:mt-14">
        <h1 className="text-3xl font-bold my-6">Add Product</h1>
        {preview && (
          <div>
            <img
              src={preview}
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
              alt={preview}
            />
          </div>
        )}
        <div className="lg:grid grid-cols-4 lg:gap-5">
          <div className="col-span-3">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Title"
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
          <input
            type="file"
            name="image"
            onChange={handleChange}
            id="upload"
            hidden
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            placeholder="Price"
            className="shadow-lg w-full border-2 h-14 rounded-md px-3 mb-5 lg:mb-10"
          />
        </div>
        <div className="lg:text-end">
          <GlobalButton title="Save" styled="w-full lg:w-2/6 h-14" />
        </div>
      </section>
    </form>
  );
};

export default AddProduct;
