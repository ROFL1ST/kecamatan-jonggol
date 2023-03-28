import React from "react";
import { useParams } from "react-router-dom";

export default function DetailDesa() {
  const { slug } = useParams();
  const [name] = slug.split("-");

  React.useEffect(() => {
    document.title = `Desa ${name}`;
  });
  return (
    <>
      <div className="pt-[100px]  w-full">
        <div className="lg:px-16 px-10">
          {/* top */}
          <div className="flex flex-col gap-y-10 mb-20">
            <div className="mt-20 flex justify-start">
              <div className="flex  bg-[#3C903C] cursor-default  rounded-xl lg:px-7 px-4 py-3 gap-x-4">
                <p className="text-3xl text-white font-semibold capitalize">
                  {name}
                </p>
              </div>
            </div>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur. Tortor risus dolor platea
              non urna sapien ac. Tincidunt sem sed interdum vel. Mauris mauris
              sagittis morbi sed sed et ut at ut. Mauris potenti odio purus elit
              amet. Sit viverra at sed cras. Pretium accumsan augue nulla
              aliquet libero. Lorem ipsum dolor sit amet consectetur. Tortor
              risus dolor platea non urna sapien ac. Tincidunt sem sed interdum
              vel. Mauris mauris sagittis morbi sed sed et ut at ut. Mauris
              potenti odio purus elit amet. Sit viverra at sed cras. Pretium
              accumsan augue nulla aliquet libero.
            </p>
          </div>
          {/* top */}
          {/* Penduduk */}

          {/* Penduduk */}
        </div>
      </div>
    </>
  );
}
