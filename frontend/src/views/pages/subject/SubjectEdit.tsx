import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
//inteface
import { subjectSchema, type SubjectSchema } from "../../../interfaces/Subject";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SubjectEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subjectSchema),
  });

  const formDataHandler: SubmitHandler<SubjectSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading
          title="Edit Subject"
          subtitle="Edit an existing subject"
        >
          <BackButton to="/subject" text="Back to Subjcet List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Subject Name */}
          <InputField
            formHook={{ ...register("subject_name") }}
            placeholder="Subject Name"
            label="Subject Name:"
            icon="bi bi-book"
            type="text"
            errorMessage={errors}
          />

          {/* Subject Code */}
          <InputField
            formHook={{ ...register("subject_code") }}
            placeholder="Subject Code"
            label="Subject Code:"
            icon="bi bi-hash"
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

export default SubjectEdit;
