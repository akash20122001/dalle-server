import React from "react";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://dalle-clone-0fbm.onrender.com/api/v1/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex justify-center mt-12 mb-12">
          <h1 className="font-extrabold text-[#222328] text-5xl mx-1">The</h1>
          <motion.h1
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              //   // ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-extrabold text-blue-500 text-5xl mx-1"
          >
            Community
          </motion.h1>
          <h1 className="font-extrabold text-[#222328] text-5xl mx-1">
            Showcase
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-2 mx-auto text-center text-[#666e75] text-xl max-w-[500px]"
        >
          "From the Community, for the Community" Witness the Vibrant Creations
          of Our Users
        </motion.p>
      </motion.div>

      <div className="mt-16 flex justify-center items-center">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-blue-500 text-white text-md px-4 h-12 rounded-lg mx-3 mt-2"
        >
          Search
        </motion.button>
        <FormField
          // labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                //   // ease: [0, 0.71, 0.2, 1.01],
              }}
              className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3"
            >
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
