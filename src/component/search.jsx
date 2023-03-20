import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const addItem = () => {
    let list = JSON.parse(localStorage.getItem("history"));
    if (!searches) {
    } else {
      if (list.find((item) => item === searches)) {
      } else {
        setRecent([...recent, searches]);
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
    navigate(`berita?search=${submittedValue}`);
    addItem();
    // const updatedSearch = { ...recent, search: submittedValue };
    // setRecent(updatedSearch);
    // localStorage.setItem("recent-search", JSON.stringify(updatedSearch));
    setOpen(false);
  }

  React.useEffect(() => {
    setSearches(query);
  }, [query]);

  //   React.useEffect(() => {
  //     const storedUser = localStorage.getItem("recent-search");
  //     if (storedUser) {
  //       setRecent(JSON.parse(storedUser));
  //     }
  //   }, []);
  console.log(recent.filter((i) => i.includes(searches)));
  console.log(searches, "p");
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
                      <div className="left relative  w-full">
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
                        <form onSubmit={handleSubmit}>
                          <input
                            value={searches}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {
                              setSearches(e.target.value);

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
                    {recent.length != 0 &&
                    recent.filter((i) => i.includes(searches == null ? "" : searches)).length != 0 ? (
                      <div className="flex flex-col gap-y-3 ">
                        <h1 className="font-bold mb-2 px-6 pt-6 text-lg">
                          Recent
                        </h1>
                        <div className="flex flex-col mb-2">
                          {recent
                            .filter((i) => i.includes(searches == null ? "" : searches))
                            .map((i, key) => (
                              <>
                                <div
                                  key={key}
                                  className="flex justify-between w-full py-4 px-6 cursor-pointer items-center hover:bg-[#F3F2F3]"
                                >
                                  <h3
                                    onClick={() => {
                                      navigate(`berita?search=${i}`);
                                      addItem();
                                      setOpen(false);
                                    }}
                                  >
                                    {i}
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
