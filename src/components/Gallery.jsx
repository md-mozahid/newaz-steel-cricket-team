import { useState } from "react";
import Button from "./Button";
import Logo from "../assets/img/Cricket_field_parts.png";

const Gallery = () => {
  const [loading, setLoading] = useState(false);

  const change = () => {
    setLoading((l) => !l);
  };

  return (
    <>
      <div className="container mx-auto p-20 text-center">
        <Button
          className={`bg-slate-700 ${loading && "bg-rose-500 border-0"}`}
          variant="primary"
          onClick={change}
        >
          {loading ? "Cricket-filed" : "Uploading soon..."}
        </Button>
      </div>

      {loading && (
        <div className="mt-20 flex justify-center items-center">
          <img src={Logo} alt="" className="w-96" />
        </div>
      )}
    </>
  );
};

export default Gallery;
