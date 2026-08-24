import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
//inteface
import { feeTypeSchema, type FeeTypeSchema } from "../../../interfaces/FeeType";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
import { useState } from "react";
import { api } from "../../../config";
import ActionAlert from "../../../components/ActionAlert";

const FeeTypeCreate = () => {
  // Error and success messaage handler
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(feeTypeSchema),
  });

  const formDataHandler: SubmitHandler<FeeTypeSchema> = (data) => {
    console.log(data);
    api
      .post("fee-type-create", data)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setMsg(true);
          setSuccess(true);
          reset({
            fee_type_name: "",
            fee_amount: "",
          });
        }
      })
      .catch(() => {
        setMsg(true);
        setSuccess(false);
      });
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Add Fee Type" subtitle="Add a new fee type with amount">
          <BackButton to="/fee-type" text="Back to Fee Type List" />
        </PageHeading>

        {msg && (
          <ActionAlert success={success} successText="New fee type added successfully" onClick={() => setMsg(false)} />
        )}

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Fee Type Name */}
          <InputField
            formHook={{ ...register("fee_type_name") }}
            placeholder="Fee Type Name"
            label="Fee Type Name"
            icon="bi bi-currency-dollar"
            type="text"
            errorMessage={errors}
          />

          {/* Fee Amount */}
          <InputField
            formHook={{ ...register("fee_amount") }}
            label="Fee Amount(BDT)"
            type="number"
            placeholder="Fee Amount"
            icon="bi bi-currency-dollar"
            errorMessage={errors}
          />

          {/* Buttons */}
          <FormButtonParent>
            <SubmitButton />
            <ResetButton />
          </FormButtonParent>
        </FormElement>
      </PageWrapper>
    </>
  );
};

export default FeeTypeCreate;
