import React, { useEffect, useState } from "react";
import { BaseButton } from "../../../buttons";
import Setting from "../../../icons";
import { BaseInput } from "../../../inputs";
import { Title } from "../../../title";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import settingsType from "../../../../helper/type/settings/settingsType";
import {
  handelGetSitting,
  handelUpdateSitting,
} from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { Loading } from "../../../loading";

interface IFormInputs {
  fee: number;
  Duration: number;
  playLink: string;
  storeLink: string;
}

const StingSchem = yup.object().shape({
  fee: yup.number().required(),
  Duration: yup.number().required(),
  playLink: yup.string().required(),
  storeLink: yup.string().required(),
});

const MainSection = () => {
  const [setting, setSetteing] = useState({} as settingsType);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(StingSchem),
  });

  useEffect(() => {
    setLoad(true);
    const getData = async () => {
      const res = await handelGetSitting(token);
      if (res) {
        setSetteing(res);
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
    setValue("fee", +setting.juncker_fee);
    setValue("Duration", +setting?.bid_duration);
    setValue("playLink", setting?.playstore_link);
    setValue("storeLink", setting?.appstore_link);
  }, [setting]);

  const submit = async (data: IFormInputs) => {
    setLoading(true);
    const formD = new FormData();
    formD.append("bid_duration", data.Duration.toString());
    formD.append("juncker_fee", data.fee.toString());
    formD.append("playstore_link", data.playLink.toString());
    formD.append("appstore_link", data.storeLink.toString());

    const res = await handelUpdateSitting(token, formD);
    if (res) {
      toast.success("success Add");
    } else {
      toast.error("some thing went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="py-12 px-10 flex justify-center">
      {!load ? (
        <div className="w-[65%] border  rounded-xl  bg-gray2  pb-5">
          <Title>
            <Setting className="fill-gray1" />
            Edit Configuration
          </Title>
          <form onSubmit={handleSubmit(submit)} className="mx-5 border-b pb-5">
            <div className=" py-3 space-y-3">
              <label className="text-gray1 text-lg block">Junkker Fee</label>
              <BaseInput
                name="fee"
                register={register}
                placeholder="$65"
                type="text"
              />
              <p className="text-xs text-red1">{errors.fee?.message}</p>
            </div>
            <div className=" py-3 space-y-3">
              <label className="text-gray1 text-lg block">Bid Duration</label>
              <BaseInput
                name="Duration"
                register={register}
                placeholder="30 minutes"
                type="text"
              />
              <p className="text-xs text-red1">{errors.Duration?.message}</p>
            </div>
            <div className=" py-3 space-y-3">
              <label className="text-gray1 text-lg block">
                Play Store Link
              </label>
              <BaseInput name="playLink" register={register} type="text" />
            </div>
            <div className=" py-3 space-y-3">
              <label className="text-gray1 text-lg block">
                Apple Store Link
              </label>
              <BaseInput name="storeLink" register={register} type="text" />
            </div>
            <div className="flex justify-center py-5">
              {!loading ? (
                <BaseButton type="submit" title="Save Changes" />
              ) : (
                <Loading className="w-10" />
              )}
            </div>
          </form>
        </div>
      ) : (
        <Loading className="w-20" />
      )}
    </div>
  );
};

export default MainSection;
