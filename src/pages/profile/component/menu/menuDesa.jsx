import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../../../redux/actions";
import { getApi } from "../../../../API/restApi";

export default function MenuDesa({ show, type, getData }) {
  const [menu1, setMenu1] = React.useState(show);
  // const [load, setLoad] = React.useState(true);
  const [desa, setDesa] = React.useState([]);
  const [desaId, setDesaId] = React.useState([]);

  const [desaError, setDesaError] = React.useState(false);
  const [loadDesa, setLoadDesa] = React.useState(true);
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      changeState({
        desa_id: desaId,
        status: state?.status,
      })
    );
  }, [desaId.length]);

  const getDesa = async () => {
    try {
      await getApi("desa").then((res) => {
        setDesa(res.data.data);
        setLoadDesa(false);
      });
    } catch (error) {
      console.log(error);
      setLoadDesa(false);
      setDesaError(true);
    }
  };

  React.useEffect(() => {
    getDesa();
  }, []);
  return (
    <>
      {/* Filter 1 */}
      <div className="flex flex-col space-y-2">
        <div className={"cursor-pointer flex items-center space-x-1"}>
          <div
            className="inline-flex items-center justify-between w-full"
            onClick={() => setMenu1(!menu1)}
          >
            <p>{type}</p>
            {menu1 ? (
              <ArrowUp2 className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
            ) : (
              <ArrowDown2 className="ml-2 -mr-1 h-5 w-5 " aria-hidden="true" />
            )}
          </div>
        </div>
        {!loadDesa ? (
          desa.map((i, key) => (
            <Desa
              setDesaId={setDesaId}
              getData={getData}
              menu={menu1}
              data={i}
              key={key}
              desa={desa}
              load={loadDesa}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      {/* Filter 1 */}
    </>
  );
}

function Desa({ data, menu, desa, load, setDesaId }) {
  const [menu2, setMenu2] = React.useState(false);
  console.log(data);
  return (
    <>
      {/* <Transition
          show={menu}
          as={Fragment}
          enter="transition-all ease-in duration-100"
          enterFrom="transform opacity-0 scale-95 translate-y-1"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95 -translate-y-1"
        >
          
        </Transition> */}
      <div
        className={`flex-col space-y-2 space-x-3 ${menu ? "flex" : "hidden"}`}
      >
        <div className={"cursor-pointer flex items-center space-x-1"}>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={(e) => {
              if (e.target.checked) {
                setDesaId((val) => [...val, data.id]);
                setMenu2(true);
              } else {
                setDesaId((prevState) =>
                  prevState.filter((prevItem) => prevItem !== data.id)
                );
                setMenu2(false);
              }
            }}
            className={`form-check-input appearance-none h-4 w-4 lg:h-3.5 lg:w-3.5 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-black focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer mr-3`}
          />
          <div
            className="inline-flex items-center justify-between w-full"
            onClick={() => setMenu2(!menu2)}
          >
            <p>{data.nama_desa}</p>
           
          </div>
        </div>
      </div>
    </>
  );
}
