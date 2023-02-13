import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import {
  handelGetBuyingPage,
  handelUpdateBuyingPage,
} from "../../../../helper/server/services";
import AboutType from "../../../../helper/type/about/AboutType";
import { Title } from "../../../title";
import { useDropzone } from "react-dropzone";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { BaseButton } from "../../../buttons";
import { Loading } from "../../../loading";

const MainSection = () => {
  const [selling, setSelling] = useState({} as AboutType);
  const [value, setValue] = useState("");
  const [paths, setPaths] = useState<string[]>([]);
  const [file, setFile] = useState<File>({} as File);
  const [title, SetTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [load, setLoad] = useState(false);
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
    const getData = async () => {
      setLoad(true);
      const res = await handelGetBuyingPage(token);
      if (res) {
        setSelling(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoad(false);
    };
    if (token) {
      getData();
    }
  }, [token]);

  useEffect(() => {
    setValue(selling.body);
    SetTitle(selling.title);
    setPaths([selling.img]);
  }, [selling]);

  const handelAddAbout = async () => {
    if (title && file && value) {
      setLoading(true);
      const data = new FormData();
      data.append("title", title);
      if (file?.name?.length > 0) {
        data.append("img", file);
      }
      data.append("body", value);
      const res = await handelUpdateBuyingPage(token, data);
      if (res) {
        toast.success("add");
        setLoading(false);
      } else {
        toast.error("some thing went wrong");
        setLoading(false);
      }
    }
  };

  return (
    <div className="py-12 px-7">
      {!load ? (
        <div className="border rounded-xl  bg-gray2  pb-5">
          <Title>
            <div className="flex  w-full justify-between items-center">
              <span>About Page</span>
            </div>
          </Title>
          <div className="px-5 py-4 w-[60%] m-auto space-y-3">
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold px-2">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => SetTitle(e.target.value)}
                id="name"
                className="w-full border outline-none px-3 py-1"
                type="text"
                placeholder="title"
              />
            </div>
            <div
              {...getRootProps({ onClick: (e) => e.preventDefault() })}
              className=" mt-5"
            >
              <label className=" text-sm font-semibold px-3 pb-1 block">
                photo
              </label>
              <label className="flex justify-center w-full h-52  transition bg-white border-2 border-gray-300  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
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
            <ReactQuill
              value={value}
              theme="snow"
              className="h-[300px] bg-white"
              onChange={setValue}
              placeholder={"Write something awesome..."}
              formats={MainSection.formats}
              modules={MainSection.modules}
            />
          </div>
          {!loading ? (
            <div className="mt-20 m-auto flex justify-center">
              <BaseButton onClick={() => handelAddAbout()} title="Submit" />
            </div>
          ) : (
            <div className="mt-20">
              <Loading className="w-10" />
            </div>
          )}
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

MainSection.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

MainSection.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",

  "color",
  "code-block",
];

export default MainSection;
