import React, { useEffect, useState } from "react";
import { Title } from "../../../title";
import "react-quill/dist/quill.snow.css";
import { DeleteIcon, EditIcon } from "../../../icons";
import FAQType from "../../../../helper/type/faq/FAQType";
import { handelGetFaq } from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import AddFAQModa from "./AddFAQModa";
import { BaseButton } from "../../../buttons";
import DeleteFAQModal from "./DeleteFAQModal";

const MainSectoins = () => {
  const [answer, setAnswer] = useState("");
  const [qestion, setQuation] = useState("");
  const [faq, setFaq] = useState<FAQType[]>([]);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeletModal, setOpenDeletModal] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [clickedORder, setClickedOrder] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetFaq(token);
      if (res) {
        setFaq(res.data);
      } else {
        toast.error("some thing went wrogn");
      }
      setLoading(false);
    };
    if (openEditModal == false && openDeletModal == false&&token) {
      getData();
      setAnswer("");
      setQuation("");
    }
  }, [openDeletModal, openEditModal,token]);

  const handelUpdate = (
    answer: string,
    qestion: string,
    id: number,
    order: number
  ) => {
    setAnswer(answer);
    setQuation(qestion);
    setClickedId(id);
    setClickedOrder(order);
    setOpenEditModal(true);
  };

  const handelDelete = (id: number) => {
    setClickedId(id);
    setOpenDeletModal(true);
  };

  const handelTableBody = () => {
    return faq.map((item, i) => {
      return (
        <tbody key={i} className="text-sm">
          <tr className="bg-white">
            <td className="pl-6 py-5 ">{item.id}</td>
            <td className="pl-6  ">{item.question}</td>
            <td className="pl-6 ">
              <div className="flex justify-between pr-10">
                <span>{item.answer}</span>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handelUpdate(
                        item.answer,
                        item.question,
                        item.id,
                        item.order
                      )
                    }
                  >
                    <EditIcon className="w-10 fill-green1" />
                  </button>
                  <button onClick={() => handelDelete(item.id)}>
                    <DeleteIcon className="w-10 fill-red1" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          <div className="flex  w-full justify-between items-center">
            <span>FAQ</span>
            <BaseButton
              title="Add FAQ"
              onClick={() => setOpenEditModal(true)}
              className="text-secoundary border border-secoundary px-3 py-1 rounded-md"
            />
          </div>
        </Title>
        <div className="px-5 py-10  m-auto">
          <div className="overflow-x-auto ">
            <div className="overflow-hidden mx-5 border rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-gray5 border-b ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left flex items-center"
                    >
                      id #
                      <button>
                        <img src="/arrows.svg" alt="" />
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      question
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      answer
                    </th>
                  </tr>
                </thead>
                {handelTableBody()}
              </table>
            </div>
          </div>
        </div>
      </div>
      {openEditModal &&
        (answer && qestion ? (
          <AddFAQModa
            open={openEditModal}
            setOpen={setOpenEditModal}
            Clickanswer={answer}
            qestion={qestion}
            ClickId={clickedId}
            Clickorder={clickedORder}
          />
        ) : (
          <AddFAQModa open={openEditModal} setOpen={setOpenEditModal} />
        ))}
         {openDeletModal && (
          <DeleteFAQModal
            open={openDeletModal}
            setOpen={setOpenDeletModal}
            id={clickedId}
          />
        )}
    </div>
  );
};

export default MainSectoins;
