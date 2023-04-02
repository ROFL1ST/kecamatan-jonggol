import React from 'react';
import { useNavigate } from 'react-router-dom';
import siapmasjo from '../../assets/logo/siapmasjo.png';
import sipahadasi from '../../assets/logo/sipahadesi.png';
import sipaojol from '../../assets/logo/sipaojol.png';
import UnderlineButton from '../home/component/underlineButton';
import UnderlineButton2 from '../home/component/underlineButton2';
export default function Aplikasi() {
  const app = [
    {
      id: 1,
      url: siapmasjo,
      desc: 'Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.',
    },
    {
      id: 2,
      url: sipahadasi,
      desc: 'Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.',
    },
    {
      id: 3,
      url: sipaojol,
      desc: 'Lorem ipsum dolor sit amet consectetur. Eget laoreet donec commodo placerat viverra scelerisque ut. Sed lorem diam nunc cursus arcu nulla sapien. Non tempor donec suspendisse suspendisse egestas urna adipiscing feugiat. Sit velit eleifend eleifend felis arcu nisi. Eu gravida ultricies amet ut pretium purus aliquam porta a. Duis consectetur donec auctor lorem metus.',
    },
  ];
  return (
    <>
      <div className="w-screen pt-[100px]">
        <div className="lg:24-px px-10">
          <div className="mt-20 flex justify-center ">
            <div className=" rounded-full px-10 py-3 bg-[#3C903C] cursor-default">
              <h1 className="font-bold text-4xl text-white">
                Aplikasi Pemerintah
              </h1>
            </div>
          </div>
          <div className="mt-20 grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-20 gap-x-20 mb-20">
            {app.map((i, key) => (
              <CardApp key={key} data={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CardApp({ data }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-[#007100]  rounded-xl">
        <div className="atas bg-[#3C903C] bg-opacity-40 py-10 rounded-t-xl px-5 flex justify-center items-center">
          <div
            style={{ backgroundImage: `url(${data.url})` }}
            className="iconApp w-36 h-36 bg-cover bg-center rounded-full"
          ></div>
        </div>
        <div className="bawah   text-center text-white">
          <p className="py-10 2xl:px-16 lg:px-7 px-5 2xl:text-lg">
            {data.desc}
          </p>
          <div className="2xl:text-xl  justify-end font-bold 2xl:mb-10 mb-5 2xl:mr-10 mr-5  flex items-center ">
            <UnderlineButton2
              onClick={() => navigate(`/aplikasi/${data.id}`)}
              label={'Selengkapnya...'}
              styleP={'text-white text-[20px] before:text-kuningPrimary'}
              styleSvg={
                'text-transparent hover:text-kuningPrimary transform translate-x-4'
              }
              styleButton={'after:bg-kuningPrimary'}
            />
            {/* <p
              onClick={() => {
                navigate(`/aplikasi/${data.id}`);
              }}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`cursor-pointer ${
                isHovering
                  ? "text-[#3C903C] -translate-y-0.5 transition ease-in-out"
                  : "text-white transition ease-in-out"
              }`}
            >
              Selengkapnya...
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
