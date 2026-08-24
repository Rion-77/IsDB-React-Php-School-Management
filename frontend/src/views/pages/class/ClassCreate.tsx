import { useState } from "react";
import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
import ActionAlert from "../../../components/ActionAlert";
//inteface
import { classSchema, type ClassSchema } from "../../../interfaces/Class";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../config";

const ClassCreate = () => {
  // Error and success messaage handler
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form Registration with react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(classSchema),
  });

  // Form data handling
  const formDataHandler: SubmitHandler<ClassSchema> = (data) => {
    // console.log(data);
    api
      .post("class-create", data)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setMsg(true);
          setSuccess(true);
          reset({
            class_name: "",
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
        <PageHeading title="Add Class" subtitle="Add a new class with desciption and assign what this class can do">
          <BackButton to="/class" text="Back to Class List" />
        </PageHeading>

        {msg && (
          <ActionAlert success={success} successText="New class added successfully" onClick={() => setMsg(false)} />
        )}

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Class Name */}
          <InputField
            formHook={{ ...register("class_name") }}
            placeholder="Name"
            label="Class Name:"
            icon="bi bi-book"
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

export default ClassCreate;
