import { mail, phone } from "../utils";

export const Contacts = () => {
  return (
    <footer
      id="contacts"
      className="contacts__view bg-fontPrimaryLt
      flex justify-evenly items-center w-2/3 h-1/4"
    >
      <div className="w-full h-full flex justify-evenly items-center">
        <a href="tel:+79273718606" className="contacts__link">
          <img className="contacts__icon" src={phone} alt="phone" />
          +7 (927) 371 86 06
        </a>
        <a href="mailto:rotorpenza@yandex.ru" className="contacts__link">
          <img className="contacts__icon" src={mail} alt="mail" />
          rotorpenza@ya.ru
        </a>
      </div>
    </footer>
  );
};
