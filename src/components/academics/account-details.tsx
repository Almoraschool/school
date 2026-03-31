import React from "react";
import Heading3 from "../heading3";

const AccountDetails = () => {
  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="Account Details" />
      <div className="lg:p-10">
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full my-10 text-[#3B2565] border-collapse min-w-[600px]">
            <tbody>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Account Number
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  689010100007060
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Name
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  BANK OF INDIA
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Account Type
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">CURRENT</td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Beneficiary Name
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  BEERSHEBA SENIOR SEC SCHOOL
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  IFSC Code
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  BKID0006890
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full my-10 text-[#3B2565] border-collapse min-w-[600px]">
            <tbody>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Account Number
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  18003052169
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Name
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  THE KURMANCHAL NAGAR SAHKARI BANK Ltd.
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Bank Account Type
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">CURRENT</td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  Beneficiary Name
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  BEERSHEBA EDUCATIONAL AND SOCIAL WELFARE SOCIETY
                </td>
              </tr>
              <tr>
                <td className="border-2 text-xl font-semibold border-[#3B2565] py-3 px-5">
                  IFSC Code
                </td>
                <td className="border-2 border-[#3B2565] py-3 px-5">
                  KNSB0010003
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
