import React, { useState, useCallback, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useDropzone } from "react-dropzone";
import {
  handelAddMake,
  handelupdateMake,
} from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  ClickedName?: string;
  ClickedFile?: string;
  ClickId?: number;
}

const AddMakeModal = ({
  open,
  setOpen,
  ClickedFile,
  ClickedName,
  ClickId,
}: Props) => {
  const [paths, setPaths] = useState([]);
  const [file, setFile] = useState<File>({} as File);
  const [name, setName] = useState("");
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles[0]);
      setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
    },
    [setPaths]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    //@ts-ignore
    setName(ClickedName);
    //@ts-ignore

    setPaths([ClickedFile]);
  }, [ClickedName, ClickedFile]);

  const handelmakeAdd = async () => {
    setLoading(true);
    if (!ClickedFile && !ClickedName) {
      const data = new FormData();
      data.append("name", name);
      data.append("logo", file);

      const res = await handelAddMake(data, token);
      if (res) {
        setOpen(false);
        toast.success("add");
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    } else if (ClickedFile && ClickedName) {
      const data = new FormData();
      data.append("name", name);
      //@ts-ignore

      if (file.path) {
        console.log(file);

        data.append("logo", file);
      }
      data.append("_method", "PUT");
      console.log(data.get("name"));
      //@ts-ignore

      const res = await handelupdateMake(data, token, ClickId);
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
              name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="w-full border outline-none px-3 py-1"
              type="text"
              placeholder="name"
            />
          </div>
          <div
            {...getRootProps({ onClick: (e) => e.preventDefault() })}
            className=" mt-5"
          >
            <label className=" text-sm font-semibold px-3 pb-1 block">
              photo
            </label>
            <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                {paths?.length !== 0 ? (
                  paths.map((path) => (
                    <img
                      style={{ objectFit: "cover" }}
                      className="w-20 h-20"
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
              onClick={() => handelmakeAdd()}
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

export default AddMakeModal;
