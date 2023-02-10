import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {  TokenAtom } from "../../../../helper";
import { handelGetHomeSlider } from "../../../../helper/server/services";
import HomeSliderType from "../../../../helper/type/home-slider/HomeSliderType";
import { DeleteIcon, EditIcon } from "../../../icons";
import { Loading } from "../../../loading";
import { Title } from "../../../title";
import AddimgModal from "./AddimgModal";
import DeletePhotoModal from "./DeletePhotoModal";

const MainSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [clickedName, setClickedName] = useState<number>();
  const [clickedFile, setClickedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [homeSlider, setHomeSlider] = useState<HomeSliderType[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await handelGetHomeSlider(token);
      if (res) {
        setHomeSlider(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };
    if (openDeleteModal == false && openModal == false&&token) {
      getData();
    }
  }, [openDeleteModal, openModal,token]);

  const handelDelete = (id: number) => {
    setClickedId(id);
    setOpenDeleteModal(true);
  };

  const handelUpdate = (order: number, img: string, id: number) => {
    setClickedName(order);
    setClickedFile(img);
    setClickedId(id);
    setOpenModal(true);
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          <div className="flex  w-full justify-between items-center">
            <span>Home Slider</span>
            <button
              onClick={() => setOpenModal(true)}
              className="text-secoundary border border-secoundary px-3 py-1 rounded-md"
            >
              Creat Item
            </button>
          </div>
        </Title>
        {!loading ? (
          <div className="px-5 py-10 grid grid-cols-3 gap-3">
            {homeSlider.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-[100%] h-[200px] border overflow-hidden"
                >
                  <div className="flex justify-end items-center py-1 bg-white">
                    <button
                      onClick={() =>
                        handelUpdate(item.order, item.img, item.id)
                      }
                      title="edit"
                    >
                      <EditIcon className="w-10 fill-green-700" />
                    </button>
                    <button
                      onClick={() => handelDelete(item.id)}
                      title="delete"
                    >
                      <DeleteIcon className="w-10 fill-red-600" />
                    </button>
                  </div>
                  <img
                    className="w-[100%] h-[200px]"
                    style={{ objectFit: "cover" }}
                    src={item.img}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Loading className="w-20" />
        )}

        {openModal &&
          (clickedFile && clickedName ? (
            <AddimgModal
              open={openModal}
              setOpen={setOpenModal}
              ClickedFile={clickedFile}
              ClickedName={clickedName}
              ClickId={clickedId}
            />
          ) : (
            <AddimgModal open={openModal} setOpen={setOpenModal} />
          ))}

        {openDeleteModal && (
          <DeletePhotoModal
            open={openDeleteModal}
            setOpen={setOpenDeleteModal}
            id={clickedId}
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;
