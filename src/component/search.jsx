import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { getApi } from "../API/restApi";

const getHistory = () => {
  let list = localStorage.getItem("history");
  if (list) {
    return JSON.parse(localStorage.getItem("history"));
  } else {
    return [];
  }
};
export default function Search({ open, setOpen, cancelButtonRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");
  const [recent, setRecent] = React.useState(getHistory());
  const [searches, setSearches] = React.useState("");

  // recent history
  const addItem = (data) => {
    let list = JSON.parse(localStorage.getItem("history"));
    if (!data) {
    } else {
      if (list.find((item) => item.title === data.title)) {
      } else {
        setRecent([...recent, data]);
      }
    }
  };

  const deleteItem = (id) => {
    const updatedItems = recent.filter((i, key) => {
      return key != id;
    });

    setRecent(updatedItems);
  };

  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(recent));
  }, [recent]);

  function handleKeyDown(event) {
    // console.log(event);
    if (event.key === "enter") {
      event.preventDefault(); // Prevent default form submission behavior
      event.target.blur(); // Remove focus from the input field
      event.target.form.submit(); // Trigger form submission
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target); // Create a new FormData object from the form
    const submittedValue = formData.get("search");
    if (submittedValue.length < 4) {
      getBerita(submittedValue);
      // navigate(`berita?search=${submittedValue}`);
      addItem(submittedValue);
    }
    // const updatedSearch = { ...recent, search: submittedValue };
    // setRecent(updatedSearch);
    // localStorage.setItem("recent-search", JSON.stringify(updatedSearch));
    // setOpen(false);
  }

  React.useEffect(() => {
    setSearches(query);
  }, [query]);

  // Search
  const [berita, setBerita] = React.useState([]);
  const [loadBerita, setLoadBerita] = React.useState(false);
  const [beritaError, setBeritaError] = React.useState(false);

  const getBerita = async (val) => {
    try {
      await getApi(`berita?${val !== "" && val != null && `key=${val}`}`).then(
        (val) => {
          setBerita(val.data.data);
          console.log(berita);
          setLoadBerita(false);
        }
      );
    } catch (error) {
      console.log(error);
      setLoadBerita(false);
      setBeritaError(true);
    }
  };
  // console.log(searches == null || (searches == "" && "NULL"));

  return (
    <>
      <Transition.Root show={open} appear as={React.Fragment}>
        <Dialog
          as="div"
          className={"relative z-[99]"}
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000000] bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full lg:items-center items-start justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full gap-x-2 items-center  p-6 border-b-[0.5px] border-b-gray-400">
                      <div className="left relative flex items-center w-full">
                        {!loadBerita ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        ) : (
                          <>
                            <div
                              className="absolute top-0 bottom-0 w-6 h-6 my-auto  animate-spin rounded-full border-4 border-solid border-gray-400  border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                              role="status"
                            ></div>
                          </>
                        )}
                        <form onSubmit={handleSubmit}>
                          <input
                            value={searches}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                              setSearches(e.target.value);
                              // console.log(searches.length);

                              if (e.target.value.length != 0) {
                                setLoadBerita(true);
                                getBerita(e.target.value);
                              }

                              // if (e.target.value == undefined || e.target.value == null) {
                              //   navigate("/berita");
                              // }
                            }}
                            type="text"
                            name="search"
                            className="block w-full pl-12 px-4 py-2  bg-white  rounded-full focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search..."
                          />
                        </form>
                      </div>
                      <button
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="h-8 w-10 text-xs font-semibold border-[0.5px] border-gray-400 rounded-lg"
                      >
                        ESC
                      </button>
                    </div>
                    {searches == null || searches == "" ? (
                      recent.length != 0 ? (
                        <div className="flex flex-col gap-y-3 ">
                          <h1 className="font-bold mb-2 px-6 pt-6 text-lg">
                            Riwayat
                          </h1>
                          <div className="flex flex-col mb-2">
                            {recent.map((i, key) => (
                              <>
                                <div
                                  key={key}
                                  className="flex justify-between w-full py-4 px-6 cursor-pointer items-center hover:bg-[#F3F2F3]"
                                >
                                  <h3
                                    className="anti-blos2 w-11/12"
                                    onClick={() => {
                                      navigate(`berita/${i.slug}`);
                                      addItem({
                                        title: i.title,
                                        slug: i.slug,
                                      });
                                      setOpen(false);
                                    }}
                                  >
                                    {i.title}
                                  </h3>
                                  <svg
                                    onClick={() => {
                                      deleteItem(key);
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 hover:text-gray-400"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                                    />
                                  </svg>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="px-10 py-16 flex justify-center items-center">
                            <h1 className="text-gray-300 font-medium">
                              Tidak Ada Riwayat
                            </h1>
                          </div>
                        </>
                      )
                    ) : // List  berita
                    searches.length != 0 && !loadBerita ? (
                      <div className="flex flex-col gap-y-3">
                        {berita.length != 0 && (
                          <h1 className="font-bold mb-2 px-6 pt-6 text-lg">
                            Hasil
                          </h1>
                        )}
                        {berita.length != 0 ? (
                          <div className="flex flex-col mb-2">
                            {berita.map((i, key) => (
                              <div
                                onClick={() => {
                                  navigate(`berita/${i.slug}`);
                                  addItem({ title: i.judul, slug: i.slug });
                                  setOpen(false);
                                }}
                                key={key}
                                className="flex justify-between w-full py-4 px-6 cursor-pointer items-center hover:bg-[#F3F2F3]"
                              >
                                <h3 className="anti-blos2 w-11/12">
                                  {i.judul}
                                </h3>
                                {/* <svg
                                  onClick={() => {
                                    deleteItem(key);
                                  }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 hover:text-gray-400"
                                  viewBox="0 0 256 256"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                                  />
                                </svg> */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-3 h-3 hover:text-gray-400"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"
                                  />
                                </svg>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <div className="px-10 py-16 flex justify-center items-center">
                              <h1 className="text-gray-300 font-medium">
                                Berita untuk "{searches}" tidak ditemukan
                              </h1>
                            </div>
                          </>
                        )}
                      </div>
                    ) : recent.filter((i) =>
                        i.title.includes(searches == null ? "" : searches)
                      ).length != 0 ? (
                      <div className="flex flex-col gap-y-3 ">
                        <h1 className="font-bold mb-2 px-6 pt-6 text-lg">
                          Riwayat
                        </h1>
                        <div className="flex flex-col mb-2">
                          {recent
                            .filter((i) =>
                              i.title.includes(searches == null ? "" : searches)
                            )
                            .map((i, key) => (
                              <>
                                <div
                                  key={key}
                                  className="flex justify-between w-full py-4 px-6 cursor-pointer items-center hover:bg-[#F3F2F3]"
                                >
                                  <h3
                                    className="anti-blos2 w-11/12"
                                    onClick={() => {
                                      navigate(`berita/${i.slug}`);
                                      addItem({
                                        title: i.title,
                                        slug: i.slug,
                                      });
                                      setOpen(false);
                                    }}
                                  >
                                    {i.title}
                                  </h3>
                                  <svg
                                    onClick={() => {
                                      deleteItem(key);
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 hover:text-gray-400"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                                    />
                                  </svg>
                                </div>
                              </>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="px-10 py-16 flex justify-center items-center">
                          <h1 className="text-gray-300 font-medium">
                            Tidak Ada Riwayat
                          </h1>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
