import React, { useEffect, useState } from "react";
import { Title } from "../../../title";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import { DeleteIcon, EditIcon } from "../../../icons";
import BlogType from "../../../../helper/type/blog/BlogType";
import { handelGetBlog } from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { Loading } from "../../../loading";
import DeleteBlogModa from "./DeleteBlogModa";
import { Search } from "../../../inputs";
import { useRouter } from "next/router";
import { PreviousNext } from "../../../pagination";

interface QueryProps {
  page: number;
  text: string | string[] | undefined;
}

const MainSectoins = () => {
  const [blog, setBlog] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [openModal, setOpenModal] = useState(false);
  const [clickedId, setClickedId] = useState<number>(0);
  const [blogQueryFilters, setBlogQueryFilters] = useState<QueryProps>({
    page: 1,
    text: "",
  });
  const { replace, query } = useRouter();
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetBlog(token);
      if (res) {
        setTotalPages(res.total)
        setBlog(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };

    if (openModal == false && token) {
      getData();
    }
  }, [openModal, token,blogQueryFilters]);

  const handelDelete = (id: number) => {
    setClickedId(id);
    setOpenModal(true);
  };

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setBlogQueryFilters((prev) => {
        return { ...prev, page: +query.page! };
      });
    }
  }, [query.page]);

  useEffect(() => {
    if (query.text !== undefined) {
      setBlogQueryFilters((prev) => {
        return { ...prev, text: query.text };
      });
    }
  }, [query.text]);

  const handelSearch = async (text: any) => {
    setBlogQueryFilters((prev) => {
      return { ...prev, text: text };
    });
    replace({ query: { ...query, text: text } }, undefined, {
      scroll: false,
    });
  };

  const setNext = () => {
    setBlogQueryFilters((prev) => {
      return { ...prev, page: blogQueryFilters.page + 1 };
    });

    let next = blogQueryFilters.page + 1;

    replace({ query: { ...query, page: next } }, undefined, {
      scroll: true,
    });
  };

  const setPrev = () => {
    setBlogQueryFilters((prev) => {
      return { ...prev, page: blogQueryFilters.page - 1 };
    });

    let prev = blogQueryFilters.page - 1;

    replace({ query: { ...query, page: prev } }, undefined, {
      scroll: true,
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          <div className="flex  w-full justify-between items-center">
            <span>Blog</span>
            <Link
              href="/blog/AddBlog"
              className="text-secoundary border border-secoundary px-3 py-1 rounded-md"
            >
              Creat Item
            </Link>
          </div>
        </Title>
        <div className="flex justify-end mx-5 py-7 ">
          <div className="w-[32%] flex justify-end">
            <Search
              value={blogQueryFilters.text!}
              placeholder="blog"
              onChange={(e: any) => handelSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="px-5 py-10">
          {!loading ? (
            <div className=" grid grid-cols-3 gap-3">
              {blog.map((item, i) => {
                return (
                  <div key={i} className="w-[100%] h-[250px]  overflow-hidden">
                    <div className="flex justify-end items-center py-1 bg-white">
                      <Link
                        href={`/blog/AddBlog?blogID=${item.id}`}
                        title="edit"
                      >
                        <EditIcon className="w-10 fill-green-700" />
                      </Link>
                      <button
                        onClick={() => handelDelete(item.id)}
                        title="delete"
                      >
                        <DeleteIcon className="w-10 fill-red-600" />
                      </button>
                    </div>
                    <img
                      className="w-[100%] h-[200px] border"
                      style={{ objectFit: "cover" }}
                      src={item.img}
                      alt=""
                    />
                    <h3 className="py10 text-center">{item.title}</h3>
                  </div>
                );
              })}
            </div>
          ) : (
            <Loading className="w-20" />
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center py-3 mt-10">
            <PreviousNext
              total={totalPages}
              setPrev={setPrev}
              setNext={setNext}
              currentPage={blogQueryFilters.page}
            />
          </div>
        )}
      </div>
      {openModal && (
        <DeleteBlogModa
          open={openModal}
          setOpen={setOpenModal}
          id={clickedId}
        />
      )}
    </div>
  );
};

export default MainSectoins;
