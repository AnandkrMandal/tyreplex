import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faMobileAlt,
  faCreditCard,
  faWallet,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { faGooglePay, faPaypal } from "@fortawesome/free-brands-svg-icons";

const PaymentMode = () => {
  return (
    <div className="flex flex-col items-start xl:items-center p-4 w-full mx-auto overflow-y-scroll no-scrollbar bg-white  text-white dark:bg-gray-800">
      <div className="flex justify-start flex-row space-x-6">
        <div className="card items-center bg-black mb-2 w-60 hover:shadow-lg hover:shadow-blue-gray-700">
          <div className="card-body ">
          <FontAwesomeIcon icon={faUniversity} className="text-blue-600 h-7" />
            <p >Deposit to Account</p>
          </div>
        </div>
        <div className="card  items-center bg-black w-60 mb-2 hover:shadow-lg hover:shadow-blue-gray-700">
          <div className="card-body">
          <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-green-500 h-7" />
            <p > Net Banking</p>
          </div>
        </div>
        <div className="card  items-center bg-black w-60 mb-2 hover:shadow-lg hover:shadow-blue-gray-700">
          <div className="card-body ">
          <FontAwesomeIcon icon={faCreditCard} className="text-yellow-500 h-7" />
            <p>Credit Card/Debit Card</p>
          </div>
        </div>
        <div className="card  items-center bg-black w-60 mb-2  hover:shadow-lg hover:shadow-blue-gray-700">
          <div className="card-body ">
          <FontAwesomeIcon icon={faMobileAlt} className="text-purple-500 h-7" />
            <p>UPI</p>
          </div>
        </div>
        <div className="card items-center bg-black w-60 mb-2 hover:shadow-lg hover:shadow-blue-gray-700">
          <div className="card-body ">
          <FontAwesomeIcon icon={faWallet} className="text-orange-500 h-7" />
            <p> Wallets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
