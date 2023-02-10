import React, { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { Loading } from "../../../loading";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useDropzone } from "react-dropzone";
import {
  handelAddHomeSlider,
  handelupdateHomeSlider,
} from "../../../../helper/server/services";

interface Props {
  open: boolean;
  setOpen: any;
  ClickedName?: number;
  ClickedFile?: string;
  ClickId?: number;
}

const AddimgModal = ({
  open,
  setOpen,
  ClickedFile,
  ClickedName,
  ClickId,
}: Props) => {
  const [paths, setPaths] = useState([]);
  const [file, setFile] = useState<File>({} as File);
  const [order, setOrder] = useState<number>(1);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles[0]);
      setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
    },
    [setPaths]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    multiple: false,
  });

  useEffect(() => {
    if (ClickedName && ClickedFile) {
      //@ts-ignore
      setOrder(ClickedName);
      //@ts-ignore
      setPaths([ClickedFile]);
    }
  }, [ClickedName, ClickedFile]);

  const handelHomeSlider = async () => {
    setLoading(true);
    if (!ClickedFile && !ClickedName) {
      const data = new FormData();
      data.append("order", order.toString());
      data.append("img", file);

      const res = await handelAddHomeSlider(data, token);
      if (res) {
        setOpen(false);
        toast.success("add");
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    } else if (ClickedFile && ClickedName) {
      const data = new FormData();
      data.append("order", order.toString());
      //@ts-ignore
      if (file.path) {
        data.append("img", file);
      }
      data.append("_method", "PUT");
      //@ts-ignore
      const res = await handelupdateHomeSlider(data, token, ClickId);
      if (res) {
        setOpen(false);
        toast.success("update");
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className=" px-4 py-4 w-[100vh] mt-3 round">
          <div className="space-y-1">
            <label htmlFor="name" className="font-semibold px-2">
              Order
            </label>
            <input
              value={order}
              onChange={(e) => setOrder(+e.target.value)}
              id="name"
              className="w-full border outline-none px-3 py-1"
              type="number"
              placeholder="order"
            />
          </div>
          <div
            {...getRootProps({ onClick: (e) => e.preventDefault() })}
            className=" mt-5"
          >
            <label className=" text-sm font-semibold px-3 pb-1 block">
              photo
            </label>
            <label className="flex justify-center w-full h-52 px-4 transition bg-white border-2 border-gray-300  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                {paths?.length !== 0 ? (
                  paths.map((path) => (
                    <img
                      style={{ objectFit: "cover" }}
                      className="h-48 w-full"
                      key={path}
                      src={path}
                    />
                  ))
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="text-yellow-950 font-semibold">
                      Add or drop your
                    </span>
                    <span className="text-[#aeaeae] font-semibold ">
                      photo to here
                    </span>
                  </div>
                )}
              </span>
              <input {...getInputProps()} className="" />
            </label>
          </div>
          <div className="flex justify-between mt-3">
            <button
              onClick={() => setOpen(false)}
              className="border px-4 py-1 border-black font-bold rounded-full"
            >
              cancel
            </button>
            <button
              disabled={loading ? true : false}
              onClick={() => handelHomeSlider()}
              className="border px-4 py-1 border-black font-bold rounded-full"
            >
              {!loading ? "Add" : <Loading className="w-8" />}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddimgModal;
