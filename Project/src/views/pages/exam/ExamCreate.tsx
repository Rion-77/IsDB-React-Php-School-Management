import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SelectField from "../../../components/Form/SelectField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import SelectOption from "../../../components/Form/SelectOption";
//inteface
import { examSchema, type ExamSchema } from "../../../interfaces/Exam";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";

const ExamCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(examSchema),
  });

  const formDataHandler: SubmitHandler<ExamSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Add Examination" subtitle="Add a new examination to your school.">
          <BackButton to="/exam" text="Back to Examination List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Exam Name */}
          <InputField
            formHook={{ ...register("exam_name") }}
            placeholder="Exam Name"
            label="Exam Name"
            icon="bi bi-journal-text"
            type="text"
            errorMessage={errors}
          />

          {/* Exam Type */}
          <SelectField
            formHook={{ ...register("exam_type_id") }}
            label="Exam Type"
            icon="bi bi-list-stars"
            errorMessage={errors}
          >
            <SelectOption text="Select an Exam Type" disabled={true} selected={true} />
            <SelectOption value={1} text="Monthly Exam" />
            <SelectOption value={2} text="Mid-Term Exam" />
            <SelectOption value={3} text="Final Exam" />
          </SelectField>

          {/* Exam Start Date */}
          <InputField
            formHook={{ ...register("exam_start_date") }}
            placeholder="Exam Start Date"
            label="Exam Start Date"
            icon="bi bi-calendar"
            type="date"
            min= {new Date().toISOString().split("T")[0]}
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

export default ExamCreate;
