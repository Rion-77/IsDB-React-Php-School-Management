import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
//inteface

import { groupSchema, type GroupSchema } from "../../../interfaces/Group";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const GroupEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(groupSchema),
  });

  const formDataHandler: SubmitHandler<GroupSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading
          title="Edit Group"
          subtitle="Edit an existing group"
        >
          <BackButton to="/group" text="Back to Group List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Group Name */}
          <InputField
            formHook={{ ...register("group_name") }}
            placeholder="Group Name"
            label="Group Name:"
            icon="bi bi-people"
            type="text"
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

export default GroupEdit;
