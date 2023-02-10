import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { MakesAtom, TokenAtom } from "../../../../helper";
import { handelGetMakes } from "../../../../helper/server/services";
import { AddIcon, DeleteIcon, EditIcon } from "../../../icons";
import { Title } from "../../../title";
import AddMakeModal from "./AddMakeModal";
import ConfirmDeleteMake from "./ConfirmDeleteMake";
import { toast } from "react-toastify";
import { Loading } from "../../../loading";

const MainSection = () => {
  const [makes, setMakes] = useRecoilState(MakesAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [clickedName, setClickedName] = useState("");
  const [clickedFile, setClickedFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await handelGetMakes(token);
      if (res) {
        setMakes(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };
    if(openDeleteModal==false&&openModal==false&&token){
      getData();
      setClickedName("")
      setClickedFile("")
      setClickedId(0)
    }
  }, [openDeleteModal, openModal,token]);

  const handelDelete = (id: number) => {
    setClickedId(id);
    setOpenDeleteModal(true);
  };

  const handelUpdate = (name: string, img: string, id: number) => {
    setClickedName(name);
    setClickedFile(img);
    setClickedId(id);
    setOpenModal(true);
  };

  const handelTableBody = () => {
    return makes.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-5 w-[16%]">{item.id}</td>
          <td className="pl-6 w-[16%] text-blue1">
            <div className="w-12 h-12 py-2">
              <img src={item.logo} className="border" alt="" />
            </div>
          </td>
          <td className="pl-6 w-[16%] ">
            <div className="flex items-center space-x-14">
              <span className="block w-[150px]">{item.name}</span>
              <div className="flex items-center ">
                <button
                  onClick={() => handelUpdate(item.name, item.logo, item.id)}
                  title="edit"
                >
                  <EditIcon className="w-10 fill-green-700" />
                </button>
                <button onClick={() => handelDelete(item.id)} title="delete">
                  <DeleteIcon className="w-10 fill-red-600" />
                </button>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="py-12 px-7">
      {!loading ? (
        <div className="border rounded-xl  bg-gray2  pb-5">
          <Title>
            <div className="flex  w-full justify-between">
              <span>Makes</span>
              <button
                onClick={() => setOpenModal(true)}
                className="text-secoundary border font-semibold border-secoundary px-3 py-1 rounded-md"
              >
                Creat Item
              </button>
            </div>
          </Title>
          <div className="px-7 flex justify-end py-3"></div>
          <div className="overflow-x-auto  mt-5">
            <div className="overflow-hidden mx-5 border rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-[#E6E6E6] border-b ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      #id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      logo
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left "
                    >
                      name
                      {/* <button>
                      <img src="/arrows.svg" alt="" />
                    </button> */}
                    </th>
                  </tr>
                </thead>
                <tbody className=" ">{handelTableBody()}</tbody>
              </table>
            </div>
          </div>
          {openModal &&
            (clickedFile && clickedName ? (
              <AddMakeModal
                open={openModal}
                setOpen={setOpenModal}
                ClickedFile={clickedFile}
                ClickedName={clickedName}
                ClickId={clickedId}
              />
            ) : (
              <AddMakeModal open={openModal} setOpen={setOpenModal} />
            ))}
          {openDeleteModal && (
            <ConfirmDeleteMake
              open={openDeleteModal}
              setOpen={setOpenDeleteModal}
              id={clickedId}
            />
          )}
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
