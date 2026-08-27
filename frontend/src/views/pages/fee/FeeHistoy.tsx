import { useEffect, useState } from "react";
import PageHeading from "../../../components/PageHeading";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import PageWrapper from "../../layout/PageWrapper";
import { useMemo } from "react";
// interfaces
import { api } from "../../../config";

import { defaultFee, type FeeSchema } from "../../../interfaces/Fee";
// Receipt start
import { useReceiptPrint, type Order, type PrintOptions } from "react-receipts";

// Receipt End

const FeeHistory = () => {
  const [fees, setFees] = useState<FeeSchema[]>([defaultFee]);

  // Get all fees from database
  const getFees = () => {
    api
      .get("fees")
      .then((res) => {
        console.log(res.data);
        setFees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFees();
  }, []);

  // Receipt start

  // interface Fee extends Order {
  //   studentName : string,
  // }

  // Example mock order for testing
  const MOCK_ORDER: Order = {
    id: "BRN-2023001",
    date: Date.now(),
    items: [
      // { name: "Premium T-Shirt (L)", price: 2999, quantity: 1 },
      { name: "Mid Monthly", price: 5000, quantity: 1 },
    ],
    subtotal: 7892,
    tax: 789,
    total: 8681,
    customer: {
      name: "নুসরাত জাহান",
      address: "123 Tech Avenue, Dhaka",
      phone: "+880-1234567890",
      email: "contact@bornosoftrn.com",
    },

    customFields: [{ key: "student Name", value: "নুসরাত জাহান" }],
    notes: "Thank you for shopping with Bornosoft!",
  };

  /*  const printOptions: PrintOptions = useMemo(
    () => ({
      layout: 2, // Layout 2: Detailed POS w/ Custom Fields
      alignment: "center",
      primaryColor: "#2563EB",
      textColor: "#000000",
      paperSize: "80mm", // Standard 80mm receipt paper
      customCss: "", // Optional custom styles
      baseFontSize: 12,
      fontFamily: "Arial",
    }),
    [],
  ); */

  /* 
    layout: number;
    alignment: "center" | "start" | "end";
    primaryColor: string;
    textColor: string;
    borderColor: string;
    headerBgColor: string;
    baseFontSize: number;
    paperSize: string;
    fontFamily: string;
    logoUrl: string;
    headerText: string;
    footerText: string;
    sellerName: string;
    showSignature: boolean;
    showTaxBreakdown: boolean;
    customCss: string;
    currency?: string | undefined;
    locale?: string | undefined;
    currencyDisplay?: "symbol" | "code" | "name" | undefined;
  */

  const printOptions = useMemo(
    () =>
      ({
        layout: 4, // Layout 2: Detailed POS w/ Custom Fields
        alignment: "center",
        primaryColor: "#2563EB",
        textColor: "#000000",
        paperSize: "a4", // Standard 80mm receipt paper
        customCss: "", // Optional custom styles
        baseFontSize: 12,
        fontFamily: "Arial",
        headerText: "Fee Receipt",
      }) as PrintOptions,
    [],
  );

  const currentOrder = MOCK_ORDER;

  const { printReceipt } = useReceiptPrint(currentOrder, printOptions);
  // Receipt End

  return (
    <>
      <PageWrapper>
        <PageHeading
          title="Collected Fee History"
          subtitle="See all collected fees"
        ></PageHeading>

        <ManageTable>
          <ManageTableHead
            heads={["STUDENT NAME", "FEE TYPE", "AMOUNT", "DATE", "Receipt"]}
          />
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td className="text-bold-500">{fee.name}</td>
                <td>{fee.fee_type_name}</td>
                <td>{fee.fee_amount}</td>
                <td>{fee.fee_collected_at}</td>
                <td>
                  <button
                    onClick={printReceipt}
                    disabled={!currentOrder.items.length}
                    type="button"
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default FeeHistory;
