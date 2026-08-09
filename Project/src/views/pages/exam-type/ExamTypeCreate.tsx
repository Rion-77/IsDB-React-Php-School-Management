import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
//inteface
import { examTypeSchema, type ExamTypeSchema } from "../../../interfaces/ExamType";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ExamTypeCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(examTypeSchema),
  });

  const formDataHandler: SubmitHandler<ExamTypeSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Add Exam Type" subtitle="Add a new exam type with desciption and assign what this exam type can do">
          <BackButton to="/exam-type" text="Back to Exam Type List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Exam Type Name */}
          <InputField
            formHook={{ ...register("exam_type_name") }}
            placeholder="Name"
            label="Exam Type Name"
            icon="bi bi-list-stars"
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

export default ExamTypeCreate;
