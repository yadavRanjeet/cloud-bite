import React from "react";
import { Image, Breathing } from "react-shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Faltu = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !! Please Check your Internet connection
      </h1>
    );
  }
  return (
    <div>
      
      <Image
        src="https://source.unsplash.com/random/1440x1000"
        fallback={<Breathing width={500} height={400} />}
      />
    </div>
  );
};

export default Faltu;
