import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addStudentFormData } from "../service/service";

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await addStudentFormData(data);
    setIsSubmitting(false);
    alert("Submission Completed!");
  };

  if (isSubmitting) {
    return (
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Submitting...
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "200px", lineHeight: "2" }}>
      <div>Student Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          Student Name:{" "}
          <input {...register("studentName", { required: true })} />
          <br />
          {errors.studentName && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          Student Class:{" "}
          <input {...register("studentClass", { required: true })} />
          <br />
          {errors.studentClass && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          Student Vaccinated:{" "}
          <input {...register("isVaccinated")} type="checkbox" />
          <br />
          {errors.isVaccinated && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
