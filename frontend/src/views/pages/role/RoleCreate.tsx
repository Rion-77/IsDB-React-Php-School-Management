import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
//inteface
import { roleSchema, type RoleSchema } from "../../../interfaces/Role";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaField from "../../../components/Form/TextareaField";

const RoleCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(roleSchema),
  });

  const formDataHandler: SubmitHandler<RoleSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Add Role" subtitle="Add a new role with desciption and assign what this role can do">
          <BackButton to="/role" text="Back to Role List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Role Name */}
          <InputField
            formHook={{ ...register("name") }}
            placeholder="Name"
            label="Role Name"
            icon="bi bi-shield-lock"
            type="text"
            errorMessage={errors}
          />
          {/* Role Desciption */}
          <TextareaField
            formHook={{ ...register("description") }}
            placeholder="Role Desciption"
            label="Desciption"
            icon="bi-text-paragraph"
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

export default RoleCreate;
