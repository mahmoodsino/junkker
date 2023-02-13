import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//@ts-ignore
import scriptLoader from "react-async-script-loader";
import { Loading } from "../../../loading";
import { MarkerF } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";

interface Props {
  open: boolean;
  setOpen: any;
  isScriptLoaded?: any;
  isScriptLoadSucceed?: any;
  lat: number;
  lng: number;
}

const UserMapModal = ({
  open,
  setOpen,
  isScriptLoadSucceed,
  isScriptLoaded,
  lat,
  lng,
}: Props) => {
  const [map, setMap] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 33.510414,
    lng: 36.278336,
  };

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="w-[100vh] px-3 py-3">
          {isScriptLoaded && isScriptLoadSucceed ? (
            <div>
              <GoogleMap
                options={{
                  disableDefaultUI: true,
                  disableDoubleClickZoom: true,
                //   gestureHandling: "none",
                //   keyboardShortcuts: false,
                }}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                onUnmount={onUnmount}
              >
                <MarkerF position={{ lat: lat, lng: lng }} />
              </GoogleMap>
            </div>
          ) : (
            <Loading className="w-10" />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWaj-R2dzFa7fYHE_ITWxjj8DRc6eRp1k&libraries=places",
])(UserMapModal);
