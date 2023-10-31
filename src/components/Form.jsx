import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/116847112575370271728/form/1FAIpQLScBQ3cUggGiZG3Jc86NdvH9m_I9LN6Fzhv-caOmSh_3EylDoQ/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.getElementById("ff-compose").appendChild(script);

    return () => {
      if (document.getElementById("ff-script") !== null){
        document.getElementById("ff-script").remove();
      }
    };
  }, []);

  return (
    <div className="w-screen h-2/3 bg-white flex flex-col justify-center items-center pt-20 pb-8">
      <div id="ff-compose"></div>
    </div>
  );
};

export default Form;
