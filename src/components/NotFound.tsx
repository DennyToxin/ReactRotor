import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="page-view flex flex-col justify-center items-center bg-bgPrimaryLt gap-4">
      <h2 className="font-montserrat font-semibold">Страница не найдена!</h2>
      <Link className="button" to={"/"}>На главную</Link>
    </div>
  );
};
