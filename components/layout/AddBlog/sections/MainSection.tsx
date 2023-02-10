import React, { useCallback, useEffect, useState } from "react";
import { Title } from "../../../title";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import {
  handelAddBlog,
  handelGetBlogDetails,
  handelupdateBlog,
} from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { BaseButton } from "../../../buttons";
import { Loading } from "../../../loading";
import { useRouter } from "next/router";
import BlogType from "../../../../helper/type/blog/BlogType";
import BlogDetailsType from "../../../../helper/type/blog/BlogDetailsType";

const MainSectoins = () => {
  const [value, setValue] = useState("");
  const [paths, setPaths] = useState<string[]>([]);
  const [file, setFile] = useState<File>({} as File);
  const [title, SetTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const { query } = useRouter();
  const [blog, setBlog] = useState<BlogDetailsType>({} as BlogDetailsType);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles[0]);
      setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
    },
    [setPaths]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const getData = async () => {
      if (query.blogID !== undefined) {
        const res = await handelGetBlogDetails(token, +query.blogID);
        if (res) {
          setBlog(res.data);
          console.log(res);
        } else {
          toast.error("some thing went wrong");
        }
      }
    };
    if(token){
      getData();
    }
  }, [query.blogID,token]);

  useEffect(() => {
    setValue(blog.body);
    SetTitle(blog.title);
    setPaths([blog.img]);
  }, [blog]);

  const handelBlog = async () => {
    if (title && file && value) {
      if (query.blogID) {
        setLoading(true);
        const data = new FormData();
        data.append("title", title);
        data.append("img", file);
        data.append("body", value);
        data.append("_method", "PUT");
        //@ts-ignore
        const res = await handelupdateBlog(data, token, query.blogID);
        if (res) {
          toast.success("add");
          setLoading(false);
        } else {
          toast.error("some thing went wrong");
          setLoading(false);
        }
      } else {
        setLoading(true);
        const data = new FormData();
        data.append("title", title);
        data.append("img", file);
        data.append("body", value);
        const res = await handelAddBlog(token, data);
        if (res) {
          toast.success("add");
          setLoading(false);
        } else {
          toast.error("some thing went wrong");
          setLoading(false);
        }
      }
    }
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          <div className="flex  w-full justify-between items-center">
            <span>Add Blog</span>
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
            className="h-[300px]"
            onChange={setValue}
            placeholder={"Write something awesome..."}
            formats={MainSectoins.formats}
            modules={MainSectoins.modules}
          />
        </div>
        {!loading ? (
          <div className="mt-20 m-auto flex justify-center">
            <BaseButton onClick={() => handelBlog()} title="Submit" />
          </div>
        ) : (
          <div className="mt-20">
            <Loading className="w-10" />
          </div>
        )}
      </div>
    </div>
  );
};

MainSectoins.modules = {
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
    ["link", "image", "video"],
    ["clean"],
  ],
};

MainSectoins.formats = [
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
  "image",
  "video",
  "color",
  "code-block",
];

export default MainSectoins;
