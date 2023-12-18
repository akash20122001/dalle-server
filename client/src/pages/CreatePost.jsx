import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://dalle-clone-0fbm.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://dalle-clone-0fbm.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        alert("Success");
        navigate("/home");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }
  };

  return (
    <section className="max-w-7xl mx-auto mt-8 flex justify-between px-24">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.25,
        //   // ease: [0, 0.71, 0.2, 1.01],
      }}
       className="flex flex-col">
        <div>
          <h1 className="mb-12 flex"><h1 className="font-extrabold text-black text-5xl mr-4">Create with </h1>
          <motion.h1 
          initial={{ opacity: 0, y:75 }}
          whileInView={{ opacity: 1, y:0}}
          transition={{
            duration: 0.8,
            delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
          }}
          className="font-extrabold text-blue-600 text-5xl ">Crea8Gen</motion.h1>
          </h1>
          <p className="mt-2 text-[#666e75] text-xl max-w-[500px]">
            Enter your desired Prompt or click the Surprise to be surprised !
          </p>
        </div>

        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              // className="font-bold text-green-300"
              placeholder="Ex., john doe"
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
          <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImage}
              className=" text-white bg-red-500 transition ease-in-out delay-150 mt-8 px-16 hover:scale-110 cursor-pointer duration-300   font-medium rounded-md text-lg w-full sm:w-auto py-2.5 text-center"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </motion.div>

      <div className="flex flex-col">
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[24rem] p-3 h-[24rem] flex justify-center items-center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>
        <div className="mt-10 flex justify-center">
          

          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white ml-3  bg-red-500 transition ease-in-out delay-150 mt-8 px-16 hover:scale-110 cursor-pointer duration-300   font-medium rounded-md text-lg w-32 sm:w-auto py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
