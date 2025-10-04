export interface QuestionType {
  id: string;
  type: string;
  path: string;
  answer?: string | number | boolean;
  validations?: object;
  label?: string;
  helperText?: string;
  max?: number;
  units?: string;
}
