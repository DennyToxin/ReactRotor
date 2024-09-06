import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="page-view flex flex-col justify-center items-center bg-bgPrimaryLt">
      <p>Ошибка 404</p>
      <p>Страница не найдена</p>
      <Link to={"/"}>На главную</Link>
    </div>
  );
};
