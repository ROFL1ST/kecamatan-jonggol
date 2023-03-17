import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Search({ open, setOpen, cancelButtonRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");
  const [recent, setRecent] = React.useState([]);
  const [searches, setSearches] = React.useState();
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
    console.log(submittedValue);
    navigate(`berita?search=${submittedValue}`);
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full gap-x-2">
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
                      <button className="h-10 w-10 text-xs font-bold border-[0.5px] border-gray-400 rounded-xl">
                        ESC
                      </button>
                    </div>
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
