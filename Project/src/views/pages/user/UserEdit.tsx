import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SelectField from "../../../components/Form/SelectField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import SelectOption from "../../../components/Form/SelectOption";
//inteface
import { userSchema, type UserSchema } from "../../../interfaces/User";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";

const UserCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const formDataHandler: SubmitHandler<UserSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Edit User" subtitle="Edit an existing user">
          <BackButton to="/user" text="Back to User List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Full Name */}
          <InputField
            formHook={{ ...register("name") }}
            placeholder="Full Name"
            label="Full Name"
            icon="bi bi-person"
            type="text"
            errorMessage={errors}
          />

          {/* Mobile */}
          <InputField
            formHook={{ ...register("phone") }}
            label="Phone"
            type="text"
            placeholder="Phone"
            icon="bi bi-telephone"
            errorMessage={errors}
          />

          {/* Email */}
          <InputField
            formHook={{ ...register("email") }}
            label="Email"
            type="email"
            placeholder="Email"
            icon="bi bi-envelope"
            errorMessage={errors}
          />

          {/* Password */}
          <InputField
            formHook={{ ...register("password") }}
            label="Password"
            type="password"
            placeholder="password"
            icon="bi bi-lock"
            errorMessage={errors}
          />

          {/* Role */}
          <SelectField
            formHook={{ ...register("role_id") }}
            label="Role"
            icon="bi bi-person-badge"
            errorMessage={errors}
          >
            <SelectOption text="Select a Role" disabled={true} selected={true} />
            <SelectOption value={1} text="Admin" />
            <SelectOption value={2} text="Moderator" />
          </SelectField>

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

export default UserCreate;
