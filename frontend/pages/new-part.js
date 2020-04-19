import { CreatePart as NewPartTemplate } from '../templates';

function NewPart() {
  return (
    <NewPartTemplate
      checklist={<h2>Checklist Area</h2>}
      form={<h2>Form Area</h2>}
    />
  );
}

export default NewPart;
