import { useParams } from "react-router";
import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
//inteface
import { defaultFeeType, feeTypeSchema, type FeeTypeSchema } from "../../../interfaces/FeeType";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
import { useEffect, useState } from "react";
import { api } from "../../../config";
import ActionAlert from "../../../components/ActionAlert";
import InputFieldHidden from "../../../components/Form/InputFieldHidden";

const FeeTypeEdit = () => {
  // Select the class id to edit
  const { feeTypeId } = useParams();
  const [feeType, setFeeType] = useState<FeeTypeSchema>(defaultFeeType);

  // Error and success messaage handler
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  // React hook form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(feeTypeSchema),
    defaultValues: {
      ...defaultFeeType,
    },
  });

  // Get fee type data by api
  const getFeeType = () => {
    api
      .get(`fee-type?id=${feeTypeId}`)
      .then((res) => {
        setFeeType(res.data);

        reset({
          ...res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeeType();
    console.log(feeType);
  }, []);

  const formDataHandler: SubmitHandler<FeeTypeSchema> = (data) => {
    // console.log(data);
    api
      .put("fee-type-update", data)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setMsg(true);
          setSuccess(true);
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
        <PageHeading title="Edit Fee Type" subtitle="Update the fee type information">
          <BackButton to="/fee-type" text="Back to Fee Type List" />
        </PageHeading>

        {msg && <ActionAlert success={success} successText="Fee type edited successfully" onClick={() => setMsg(false)} />}

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* id */}
          <InputFieldHidden formHook={{ ...register("id") }} type="hidden" />
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

export default FeeTypeEdit;
