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

const FeeTypeEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feeTypeSchema),
  });

  const formDataHandler: SubmitHandler<FeeTypeSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Edit Fee Type" subtitle="Update the fee type information">
          <BackButton to="/fee-type" text="Back to Fee Type List" />
        </PageHeading>

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

export default FeeTypeEdit;
