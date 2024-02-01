import { InputMask } from "@react-input/mask";

export default function NumberInput() {
  const handleChange = (e) => {
    if (e.target.value.length != 18) {
      e.target.value = "";
    }
  }
  return (
    <InputMask
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      placeholder="Введите номер"
      onBlur={handleChange}
    />
  );
}
